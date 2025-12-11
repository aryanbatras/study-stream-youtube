// YouTubeAutoPlayer.jsx
import { onMount, onCleanup, createSignal, createEffect } from "solid-js";

export default function YouTubeAutoPlayer(props) {
    let containerRef; // where YT player will attach
    const [hasError, setHasError] = createSignal(false);
    const [thumbLoaded, setThumbLoaded] = createSignal(false);
    const [isPlaying, setIsPlaying] = createSignal(false);
    const [autoplayBlocked, setAutoplayBlocked] = createSignal(false);
    let player = null;
    let videoId = () => props.videoId;

    // --- Load YT API only once (global promise) ---
    function loadYouTubeAPI() {
        if (window.__YT_API_PROMISE) return window.__YT_API_PROMISE;
        window.__YT_API_PROMISE = new Promise((resolve, reject) => {
            if (window.YT && window.YT.Player) return resolve(window.YT);
            const existing = document.getElementById("youtube-iframe-api");
            if (!existing) {
                const tag = document.createElement("script");
                tag.id = "youtube-iframe-api";
                tag.src = "https://www.youtube.com/iframe_api";
                tag.async = true;
                tag.onerror = () => reject(new Error("YouTube API failed to load"));
                document.head.appendChild(tag);
            }
            const prev = window.onYouTubeIframeAPIReady;
            window.onYouTubeIframeAPIReady = () => {
                if (prev) prev();
                resolve(window.YT);
            };
            // small safety timeout
            setTimeout(() => {
                if (!(window.YT && window.YT.Player)) {
                    // allow user to still see fallback (iframe) if API doesn't arrive
                    // but resolve so app doesn't hang
                    resolve(window.YT);
                }
            }, 8000);
        });
        return window.__YT_API_PROMISE;
    }

    // --- Preload thumbnail so it's instant when shown ---
    function preloadThumbnail(id) {
        const url = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
        const img = new Image();
        img.src = url;
        img.onload = () => setThumbLoaded(true);
        img.onerror = () => setThumbLoaded(false);
        return url;
    }

    // --- Create player and wire events ---
    async function initPlayer(id) {
        if (!id || !containerRef) return;
        setHasError(false);
        setIsPlaying(false);
        setAutoplayBlocked(false);

        // ensure thumbnail preload starts immediately
        const thumbUrl = preloadThumbnail(id);

        try {
            const YT = await loadYouTubeAPI();

            // If YT is not available (resolve from fallback), create a plain iframe fallback
            if (!(YT && YT.Player)) {
                // fallback: insert iframe manually and listen to onload
                const iframe = document.createElement("iframe");
                const src = `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&controls=0&rel=0&modestbranding=1&playsinline=1&origin=${window.location.origin}&enablejsapi=1`;
                iframe.setAttribute("src", src);
                iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
                iframe.setAttribute("allowfullscreen", "true");
                iframe.style.width = "100%";
                iframe.style.height = "100%";
                iframe.style.border = "0";
                iframe.style.opacity = "0";
                iframe.style.transition = "opacity 600ms ease";
                iframe.style.willChange = "opacity, transform";
                containerRef.innerHTML = "";
                containerRef.appendChild(iframe);

                iframe.onload = () => {
                    // small delay to avoid catching initial white frame
                    setTimeout(() => {
                        iframe.style.opacity = "1";
                        setTimeout(() => setIsPlaying(true), 250);
                    }, 600);
                };
                return;
            }

            // Destroy any existing player
            if (player && typeof player.destroy === "function") {
                try { player.destroy(); } catch {}
                player = null;
            }

            // Create a fresh player
            player = new YT.Player(containerRef, {
                videoId: id,
                playerVars: {
                    autoplay: 1,
                    mute: 1,
                    controls: 0,
                    modestbranding: 1,
                    rel: 0,
                    playsinline: 1,
                    origin: window.location.origin,
                    enablejsapi: 1,
                    iv_load_policy: 3, // hide annotations
                },
                events: {
                    onReady: (e) => {
                        // keep iframe hidden until we detect playing
                        const iframe = player.getIframe();
                        if (iframe) {
                            iframe.style.opacity = "0";
                            iframe.style.transition = "opacity 600ms ease";
                            iframe.style.willChange = "opacity, transform";
                            iframe.style.background = "black";
                            iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
                        }
                        // try to play; if blocked, show overlay
                        try {
                            const p = e.target.playVideo();
                            if (p && typeof p.catch === "function") {
                                p.catch((err) => {
                                    // autoplay blocked
                                    setAutoplayBlocked(true);
                                });
                            }
                        } catch (err) {
                            setAutoplayBlocked(true);
                        }
                    },
                    onStateChange: (ev) => {
                        // YT state codes: -1 unstarted, 0 ended, 1 playing, 2 paused, 3 buffering, 5 cued
                        const state = ev.data;
                        if (state === YT.PlayerState.PLAYING) {
                            // ensure small buffer so the first visible frame is ready
                            setTimeout(() => {
                                const iframe = player.getIframe();
                                if (iframe) iframe.style.opacity = "1";
                                // fade out thumbnail (we keep it on top until this point)
                                setTimeout(() => setIsPlaying(true), 200);
                            }, 250);
                        } else if (state === YT.PlayerState.BUFFERING) {
                            // keep showing overlay until play
                        } else if (state === YT.PlayerState.ENDED) {
                            // optionally show ended state or replay
                        }
                    },
                    onError: (event) => {
                        console.error("YT player error:", event);
                        setHasError(true);
                    },
                },
            });
        } catch (err) {
            console.error("YouTube init error:", err);
            setHasError(true);
        }
    }

    // initialize on mount and when videoId changes
    onMount(() => initPlayer(videoId()));
    createEffect(() => {
        // watch prop changes
        if (props.videoId) {
            // small debounce to avoid repetitive re-init storms
            const id = props.videoId;
            // destroy existing player first
            if (player && typeof player.destroy === "function") {
                try { player.destroy(); } catch {}
                player = null;
            }
            setThumbLoaded(false);
            setIsPlaying(false);
            setAutoplayBlocked(false);
            // initialize
            initPlayer(id);
        }
    });

    onCleanup(() => {
        try {
            if (player && typeof player.destroy === "function") player.destroy();
        } catch (e) {}
        player = null;
    });

    // UI pieces:
    const thumbUrl = props.videoId ? `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` : "";

    return (
        <div class="relative w-full h-full" style={{ "aspect-ratio": "16/10", "background-color": "black", position: "relative" }}>
            {/* Player container (YT attaches iframe here) */}
            <div
                ref={el => (containerRef = el)}
                id="yt-player-container"
                class="absolute inset-0"
                style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 }}
            ></div>

            {/* Thumbnail overlay (shows until we decide it's safe to show iframe) */}
            <div
                class="absolute inset-0 flex items-center justify-center"
                style={{
                    "background-color": "black",
                    "z-index": 1, // Lower z-index to allow card controls to be clickable
                    transition: "opacity 500ms ease",
                    opacity: isPlaying() ? "0" : "1",
                    pointerEvents: isPlaying() ? "none" : "none", // Never block pointer events
                    "will-change": "opacity",
                }}
            >
                {/* actual image */}
                {props.videoId && (
                    <img
                        src={thumbUrl}
                        onload={() => setThumbLoaded(true)}
                        onerror={() => setThumbLoaded(false)}
                        alt="video thumbnail"
                        style={{
                            "max-width": "100%",
                            "max-height": "100%",
                            "object-fit": "cover",
                            "object-position": "center",
                            display: "block",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                )}

                {/* If autoplay blocked, show a play button on top of thumbnail */}
                {autoplayBlocked() && !isPlaying() && (
                    <button
                        onclick={() => {
                            try {
                                if (player && typeof player.playVideo === "function") {
                                    player.playVideo();
                                    setAutoplayBlocked(false);
                                } else {
                                    // For fallback iframe attempt to set src with autoplay param (may still be blocked)
                                    const iframe = containerRef.querySelector("iframe");
                                    if (iframe) {
                                        iframe.contentWindow && iframe.contentWindow.postMessage && iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
                                        iframe.style.opacity = "1";
                                        setIsPlaying(true);
                                    }
                                }
                            } catch (e) {
                                console.warn("Play click failed", e);
                            }
                        }}
                        style={{
                            position: "absolute",
                            zIndex: 30,
                            background: "rgba(255,255,255,0.95)",
                            border: "none",
                            padding: "10px 18px",
                            "border-radius": "6px",
                            cursor: "pointer",
                            transform: "translateY(0)",
                        }}
                    >
                        ▶ Play
                    </button>
                )}
            </div>

            {/* Error overlay */}
            {hasError() && (
                <div class="absolute inset-0 flex items-center justify-center text-white" style={{ zIndex: 40 }}>
                    Failed to load player
                </div>
            )}
        </div>
    );
}
