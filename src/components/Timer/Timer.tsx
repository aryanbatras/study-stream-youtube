/* ✨ ONLY TEXT COLOR FIXES APPLIED */

import { createSignal, createEffect, createMemo, onCleanup, onMount } from "solid-js";
import { FaSolidPlay, FaSolidPause } from "solid-icons/fa";

type PersistedTimer = {
    seconds: number;
    running: boolean;
    lastStart?: number | null;
    sessions: number[];
    daily: Record<string, number>;
};

const STORAGE_KEY = "study-timer-v3";

export default function Timer() {
    const [seconds, setSeconds] = createSignal(0);
    const [running, setRunning] = createSignal(false);
    const [isExpanded, setIsExpanded] = createSignal(false);
    const [showHistory, setShowHistory] = createSignal(false);

    const [sessions, setSessions] = createSignal<number[]>([]);
    const [daily, setDaily] = createSignal<Record<string, number>>({});

    let intervalId: number | undefined;

    // ---------- Helpers ----------
    const pad = (n: number) => String(n).padStart(2, "0");

    const todayKey = () => {
        const d = new Date();
        return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
    };

    const format = (sec: number) => {
        const h = Math.floor(sec / 3600);
        const m = Math.floor((sec % 3600) / 60);
        const s = sec % 60;
        return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
    };

    const getLastNDates = (n: number) => {
        const arr: string[] = [];
        const d = new Date();
        for (let i = 0; i < n; i++) {
            const dt = new Date();
            dt.setDate(d.getDate() - i);
            arr.push(`${dt.getFullYear()}-${pad(dt.getMonth() + 1)}-${pad(dt.getDate())}`);
        }
        return arr.reverse();
    };

    const last30 = createMemo(() => getLastNDates(30));

    const totalMinutesStudied = createMemo(() => {
        const now = new Date();
        const thirtyDaysAgo = new Date();
        thirtyDaysAgo.setDate(now.getDate() - 30);
        const filtered = Object.entries(daily()).filter(([key]) => {
            const [year, month, day] = key.split('-');
            const date = new Date(Number(year), Number(month) - 1, Number(day));
            return date > thirtyDaysAgo;
        });
        return filtered.reduce((a, [, b]) => a + b, 0);
    });

    // ---------- Timer control ----------
    const startInterval = () => {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => setSeconds(s => s + 1), 1000) as unknown as number;
    };

    const stopInterval = () => {
        if (intervalId) clearInterval(intervalId);
        intervalId = undefined;
    };

    const startTimer = () => {
        setRunning(true);
        startInterval();
        persist({ lastStart: Date.now() });
    };

    const stopTimer = () => {
        setRunning(false);
        stopInterval();
        persist({ lastStart: null });
    };

    const toggleTimer = () => running() ? stopTimer() : startTimer();

    const completeSession = () => {
        if (seconds() === 0) return;

        const sec = seconds();
        const mins = Math.floor(sec / 60);
        const key = todayKey();

        setSessions(s => [...s, sec]);

        setDaily(d => ({
            ...d,
            [key]: (d[key] || 0) + mins
        }));

        stopTimer();
        setSeconds(0);
        persist();
    };

    // ---------- Persistence ----------
    const persist = (extra: Partial<PersistedTimer> = {}) => {
        const data: PersistedTimer = {
            seconds: seconds(),
            running: running(),
            lastStart: extra.lastStart ?? null,
            sessions: sessions(),
            daily: daily(),
            ...extra
        };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    };

    // load data
    onMount(() => {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return;

        try {
            const p: PersistedTimer = JSON.parse(raw);

            if (p.running && p.lastStart) {
                const elapsed = Math.floor((Date.now() - p.lastStart) / 1000);
                setSeconds((p.seconds || 0) + elapsed);
                setRunning(true);
                startInterval();
            } else {
                setSeconds(p.seconds || 0);
                setRunning(false);
            }

            setSessions(p.sessions || []);
            setDaily(p.daily || {});

        } catch {
            localStorage.removeItem(STORAGE_KEY);
        }
    });

    createEffect(() => persist({ seconds: seconds() }));
    createEffect(() => persist({ running: running() }));
    createEffect(() => persist({ sessions: sessions() }));
    createEffect(() => persist({ daily: daily() }));

    onCleanup(() => stopInterval());

    // ---------- UI ----------
    return (
        <div style="position: fixed; bottom: 16px; right: 16px; z-index: 30;">
            {!isExpanded() ? (
                <button
                    onClick={() => setIsExpanded(true)}
                    style="
                        background: rgba(255,255,255,0.9);
                        backdrop-filter: blur(10px);
                        border-radius: 999px;
                        padding: 12px 16px;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        color: #111;          /* 💛 TEXT VISIBLE */
                        box-shadow: 0 4px 10px rgba(0,0,0,0.15);
                    "
                >
                    <div style="
                        width: 12px;
                        height: 12px;
                        border-radius: 999px;
                        background: #10b981;
                        animation: pulse 1.5s infinite;
                    "></div>
                    <span style="font-weight: 600; color:#111;">{format(seconds())}</span>
                </button>
            ) : (
                <div
                    style="
                        width: 260px;
                        background: rgba(255,255,255,0.95);
                        backdrop-filter: blur(16px);
                        border-radius: 12px;
                        padding: 16px;
                        color:#111;            /* 💛 ALL TEXT DARK */
                        box-shadow: 0 8px 20px rgba(0,0,0,0.15);
                    "
                >
                    <div style="display:flex; justify-content:space-between; margin-bottom:16px; color:#111;">
                        <h3 style="font-size: 16px; font-weight: 700; color:#111;">Focus Timer</h3>
                        <button onClick={() => setIsExpanded(false)} style="font-size: 18px; color:#111;">×</button>
                    </div>

                    <div style="text-align:center; margin-bottom: 24px; color:#111;">
                        <div style="font-size: 40px; font-weight: 800; margin-bottom: 8px; color:#111;">
                            {format(seconds())}
                        </div>
                        <div style="font-size: 14px; color: #333; gap: 8px;">
                            {daily()[todayKey()] || 0} mins studied today
                        </div>
                    </div>

                    <div style="display:flex; justify-content:center; margin-bottom: 12px;">
                        <button
                            onClick={toggleTimer}
                            style="
                                width: 56px;
                                height: 56px;
                                border-radius: 999px;
                                background: #10b981;
                                color:white;
                                display:flex;
                                justify-content:center;
                                align-items:center;
                                font-size:20px;
                            "
                        >
                            {running() ? <FaSolidPause /> : <FaSolidPlay />}
                        </button>
                    </div>

                    <button
                        onClick={completeSession}
                        style="
                            width: 100%;
                            padding: 10px 14px;
                            background: #ecfdf5;
                            border-radius: 6px;
                            font-size: 14px;
                            color:#111;
                            margin-bottom: 10px;
                        "
                    >
                        Complete session
                    </button>

                    <button
                        onClick={() => setShowHistory(s => !s)}
                        style="
                            width: 100%;
                            padding: 8px 12px;
                            background: #f3f4f6;
                            border-radius: 6px;
                            font-size: 14px;
                            color:#111;
                        "
                    >
                        {showHistory() ? "Hide History" : "Show History"}
                    </button>

                    {showHistory() && (
                        <div style="margin-top: 14px; color:#111;">
                            <h4 style="font-weight:600; margin-bottom: 8px; color:#111;">Last 30 Days</h4>

                            <div style="font-size: 14px; color: #333;">{totalMinutesStudied()} mins total</div>
                            <div
                                style="
                                    display:grid;
                                    grid-template-columns:repeat(6, 1fr);
                                    gap:6px;
                                "
                            >
                                {last30().map(date => (
                                    <div
                                        title={`${date} — ${daily()[date] || 0} min`}
                                        style={`
                                            width: 30px;
                                            height: 30px;
                                            border-radius: 6px;
                                            background: ${
                                            daily()[date] > 60
                                                ? "#065f46"
                                                : daily()[date] > 30
                                                    ? "#10b981"
                                                    : daily()[date] > 0
                                                        ? "#a7f3d0"
                                                        : "#f3f4f6"
                                        };
                                        `}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
