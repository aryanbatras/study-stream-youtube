import { createSignal, onMount, onCleanup, For } from "solid-js";
import { FaSolidUserGroup, FaSolidClock } from "solid-icons/fa";
import { FaBrandsYoutube } from "solid-icons/fa";

type Room = {
    id: string;
    name: string;
    participants: number;
    currentVideo?: string;
    startTime?: number;
    jitsiRoom?: string;
};

export default function StudyRoom() {
    const [isOpen, setIsOpen] = createSignal(false);
    const [activeRoom, setActiveRoom] = createSignal<Room | null>(null);
    const [showJitsi, setShowJitsi] = createSignal(false);

    let jitsiApi: any = null;
    let jitsiContainer!: HTMLDivElement;

    // Load Jitsi external API dynamically once
    const loadJitsiApi = () =>
        new Promise<void>((resolve) => {
            if (typeof window.JitsiMeetExternalAPI === "function") return resolve();
            const script = document.createElement("script");
            script.src = "https://meet.jit.si/external_api.js";
            script.onload = () => resolve();
            document.body.appendChild(script);
        });

    const createJitsiMeeting = async () => {
        await loadJitsiApi();
        if (!activeRoom()) return;

        // Destroy existing API if already exists
        if (jitsiApi) {
            jitsiApi.dispose();
            jitsiApi = null;
        }

        const roomName = activeRoom()!.jitsiRoom!;
        jitsiApi = new window.JitsiMeetExternalAPI("meet.jit.si", {
            roomName,
            parentNode: jitsiContainer,
            width: "100%",
            height: "100%",
            interfaceConfigOverwrite: {
                TILE_VIEW_MAX_COLUMNS: 3,
            },
            configOverwrite: {
                startWithAudioMuted: true,
                startWithVideoMuted: true,
            },
            userInfo: {
                displayName: "Guest",
            }
        });
    };

    const [rooms, setRooms] = createSignal<Room[]>([
        {
            id: "deep-focus",
            name: "Deep Focus",
            participants: 12,
            currentVideo: "jfKfPfyJRdk",
            startTime: Date.now() - 3600000,
            jitsiRoom: "DeepFocusRoom123"
        },
        {
            id: "coding-session",
            name: "Coding Session",
            participants: 8,
            currentVideo: "lTRiuFIWV8k",
            startTime: Date.now() - 1800000,
            jitsiRoom: "CodingSessionRoom999"
        },
        {
            id: "night-owls",
            name: "Night Owls",
            participants: 5,
            currentVideo: "5qap5aO4i9A",
            startTime: Date.now() - 7200000,
            jitsiRoom: "NightOwlsRoom777"
        }
    ]);

    const joinRoom = (room: Room) => {
        setShowJitsi(false);
        setActiveRoom(room);
    };

    const leaveRoom = () => {
        setActiveRoom(null);
        setShowJitsi(false);

        if (jitsiApi) {
            jitsiApi.dispose();
            jitsiApi = null;
        }
    };

    const updateParticipants = () => {
        setRooms(prev =>
            prev.map(r => ({
                ...r,
                participants: Math.max(1, r.participants + (Math.random() > 0.5 ? 1 : -1)),
            }))
        );
    };

    let intervalId: number;
    onMount(() => {
        intervalId = setInterval(updateParticipants, 10_000) as unknown as number;
    });
    onCleanup(() => clearInterval(intervalId));

    return (
        <>
            {/* JITSI MODAL */}
            {showJitsi() && (
                <div class="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999]">
                    <div class="w-[90vw] h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden relative">
                        <div
                            ref={el => (jitsiContainer = el)}
                            class="w-full h-full"
                        />

                        <button
                            onClick={() => {
                                setShowJitsi(false);
                                if (jitsiApi) jitsiApi.dispose();
                            }}
                            class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-md text-sm shadow"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

            {/* MAIN BOTTOM UI */}
            <div class="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 z-30 text-gray-900">

                {!isOpen() ? (
                    <button
                        onClick={() => setIsOpen(true)}
                        class="bg-white text-gray-900 rounded-full shadow-lg p-3 hover:shadow-xl transition-all"
                    >
                        <FaSolidUserGroup class="w-6 h-6 text-emerald-500" />
                    </button>
                ) : (
                    <div class="bg-white text-gray-900 rounded-xl shadow-xl w-80 overflow-hidden">

                        {/* HEADER */}
                        <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                            <h3 class="font-semibold text-lg">Study Rooms</h3>
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    leaveRoom();
                                }}
                                class="text-gray-500 hover:text-gray-700 text-xl"
                            >
                                ×
                            </button>
                        </div>

                        {/* LIST OR ROOM */}
                        {!activeRoom() ? (
                            <div class="max-h-96 overflow-y-auto">
                                <For each={rooms()}>
                                    {room => (
                                        <div
                                            onClick={() => joinRoom(room)}
                                            class="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                                        >
                                            <div class="flex justify-between">
                                                <h4 class="font-medium">{room.name}</h4>
                                                <div class="flex items-center text-xs text-gray-500 space-x-2">
                                                    <span class="flex items-center">
                                                        <FaSolidUserGroup class="mr-1" size={10} />
                                                        {room.participants}
                                                    </span>
                                                    <span class="flex items-center">
                                                        <FaSolidClock class="mr-1" size={10} />
                                                        {Math.floor((Date.now() - room.startTime!) / 60000)}m
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </For>
                            </div>
                        ) : (
                            <div class="h-96 flex flex-col">

                                {/* ROOM HEADER */}
                                <div class="p-4 border-b border-gray-200">
                                    <div class="flex justify-between">
                                        <h4 class="font-medium">{activeRoom()!.name}</h4>

                                        <button
                                            onClick={leaveRoom}
                                            class="text-sm text-emerald-600"
                                        >
                                            ← Back
                                        </button>
                                    </div>
                                </div>

                                {/* CONTENT */}
                                <div class="flex-1 bg-black text-white flex items-center justify-center">
                                    <p>YouTube or placeholder</p>
                                </div>

                                {/* FOOTER */}
                                <div class="p-3 bg-gray-50 border-t">
                                    <button
                                        onClick={() => {
                                            setShowJitsi(true);
                                            createJitsiMeeting();
                                        }}
                                        class="w-full py-2 bg-emerald-500 text-white rounded-md"
                                    >
                                        Join with Jitsi
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
