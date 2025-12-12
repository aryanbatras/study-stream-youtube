import { onMount, createSignal, createMemo, Show, createEffect } from 'solid-js';
import Section from "../components/reusable/Section.jsx";
import Card from "../components/reusable/Card.jsx";
import YoutubeButton from "../components/external/YoutubeButton.jsx";
import { useYoutubeApi } from '../hooks/useYoutubeApi.js';
import { FaSolidThumbtack, FaSolidGear } from 'solid-icons/fa';
import ShinyText from "../components/external/ShinyText.jsx";
import Text from "../components/reusable/Text.jsx";
import CubeBox from "../components/external/CubeBox.jsx";
import {useThemeStore} from "../stores/themeStore.js";
import ThemeSwitch from "../components/external/ThemeSwitch.jsx";

// Load JitsiMeetExternalAPI globally
if (typeof window !== 'undefined') {
  window.JitsiMeetExternalAPI = window.JitsiMeetExternalAPI || null;
  if (!window.JitsiMeetExternalAPI) {
    const script = document.createElement('script');
    script.src = 'https://meet.jit.si/external_api.js';
    script.async = true;
    document.head.appendChild(script);
  }
}

export default function Dashboard() {

// In your Dashboard component
const handleVideoLinkSubmit = (videoId) => {
    setLiveVideo({
        id: videoId,
        title: 'Live Stream',
        thumbnail: `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
    });
};

    const [settings, setSettings] = createSignal({
        theme: localStorage.getItem('theme') || '',
        cardsPerPage: localStorage.getItem('cardsPerPage') || '',
        youtubeUrl: localStorage.getItem('youtubeUrl') || '',
        showInDashboard: localStorage.getItem('showInDashboard') ? localStorage.getItem('showInDashboard') === 'true' : true,
        showTimer: localStorage.getItem('showTimer') ? localStorage.getItem('showTimer') === 'true' : true,
        showTaskManager: localStorage.getItem('showTaskManager') ? localStorage.getItem('showTaskManager') === 'true' : true
    });
    const saveSettings = (key, value) => {
        localStorage.setItem(key, value);
        setSettings(prev => ({ ...prev, [key]: value }));

        // Refresh the page if any component visibility setting is changed
        if (['showTimer', 'showTaskManager'].includes(key)) {
            setTimeout(() => window.location.href = '/dashboard', 500); // Navigate to /dashboard on refresh
        }
    };

    const [cardsPerPage, setCardsPerPage] = createSignal(settings().cardsPerPage || 4);
    const { videos, loadLiveVideos } = useYoutubeApi();
    const { isDark, toggleTheme } = useThemeStore();

    const [pinnedVideos, setPinnedVideos] = createSignal({});
    const [currentPage, setCurrentPage] = createSignal(1);
    const [isFocusMode, setIsFocusMode] = createSignal(false);
    const [settingsOpen, setSettingsOpen] = createSignal(false);

    // Add state for the live video
    const [liveVideo, setLiveVideo] = createSignal(null);
    const [isLoadingLive, setIsLoadingLive] = createSignal(false);

    // Add this effect to check for live video when the channel ID changes
    createEffect(async () => {
        const channelId = settings().youtubeUrl;
        if (!channelId) return;

        setIsLoadingLive(true);
        try {
            const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
            if (!response.ok) {
                setLiveVideo(null);
                return;
            }

            const text = await response.text();
            console.log('RSS Feed Response:', text); // Debug log

            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(text, "text/xml");

            // Debug: Log all entries to see what's in the feed
            const allEntries = Array.from(xmlDoc.getElementsByTagName('entry'));
            console.log('All entries:', allEntries);

            const liveEntry = allEntries.find(entry => {
                const liveBroadcast = entry.getElementsByTagName('yt:liveBroadcastContent')[0];
                console.log('Entry:', entry);
                console.log('Live broadcast element:', liveBroadcast);
                console.log('Live broadcast content:', liveBroadcast?.textContent);
                return liveBroadcast?.textContent === 'live';
            });

            console.log('Found live entry:', liveEntry); // Debug log

            if (liveEntry) {
                console.log('Processing live entry:', liveEntry);
                const videoId = liveEntry.getElementsByTagName('yt:videoId')[0]?.textContent;
                const title = liveEntry.getElementsByTagName('title')[0]?.textContent;
                const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/mqdefault.jpg` : '';

                console.log('Extracted video data:', { videoId, title, thumbnail });

                setLiveVideo({
                    id: videoId,
                    title,
                    thumbnail
                });
            } else {
                setLiveVideo(null);
            }
        } catch (error) {
            console.error('Error checking live status:', error);
            setLiveVideo(null);
        } finally {
            setIsLoadingLive(false);
        }
    });

    onMount(() => loadLiveVideos(25));

    const updatePinnedState = (videoId, isPinned, isLive = false) => {
        const newPinnedVideos = { ...pinnedVideos() };

        // For live videos, use a special prefix to distinguish them
        const pinKey = isLive ? `live_${videoId}` : videoId;

        if (isPinned) {
            newPinnedVideos[pinKey] = true;
        } else {
            delete newPinnedVideos[pinKey];
        }

        setPinnedVideos(newPinnedVideos);

        if (Object.values(newPinnedVideos).filter(Boolean).length === 0) {
            setIsFocusMode(false);
        }
    };

    const paginatedVideos = createMemo(() => (videos().data || []).slice((currentPage() - 1) * cardsPerPage(), currentPage() * cardsPerPage()));
    const totalPages = createMemo(() => Math.ceil((videos().data?.length || 0) / cardsPerPage()));
    const goToPage = (page) => { if (page >= 1 && page <= totalPages()) setCurrentPage(page) };

    const pinnedVideosCount = createMemo(() => {
        return Object.keys(pinnedVideos()).filter(key => pinnedVideos()[key]).length;
    });

    return (
        <Section className="min-h-screen flex flex-col justify-around items-center">

            <Section className="min-w-screen  max-w-4xl mb-6">

                <div class="flex justify-between p-16 items-center mb-4">
                    <div class="flex-1">
                        {pinnedVideosCount() > 0 && (
                            <div class="text-sm text-gray-500 flex items-center gap-1">
                                <FaSolidThumbtack class="w-5 h-5" />
                                {pinnedVideosCount()} pinned
                            </div>
                        )}
                    </div>
                    <div class="flex gap-4 items-center">
                        <YoutubeButton
                            settings={settings}
                            onSettingsOpen={() => setSettingsOpen(!settingsOpen())}
                            onVideoLinkSubmit={handleVideoLinkSubmit}
                        />
                        {pinnedVideosCount() > 0 && (
                            <button
                                onClick={() => setIsFocusMode(true)}
                                class="btn btn-primary flex items-center gap-2"
                            >
                                <span>Focus Mode</span>
                            </button>
                        )}
                        <button
                            onClick={() => setSettingsOpen(!settingsOpen())}
                            class="btn flex items-center gap-2 z-10"
                            aria-label="Settings"
                        >
                            <FaSolidGear class="w-5 h-5" />
                            <span>Settings</span>
                        </button>
                    </div>
                </div>

                {pinnedVideosCount() > 0 && (
                    <div class="min-w-screen mb-12">
                        <div class="flex justify-between items-center mb-6 px-4">
                            <h2 class="text-2xl font-bold  flex items-center gap-3">
                                <FaSolidThumbtack class="w-7 h-7 text-purple-600" />
                                <Text animte={true}>Pinned Streams</Text>
                            </h2>
                        </div>
                        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 px-4">
                            {/* Regular pinned videos */}
                            {videos().data
                                ?.filter(videoId => pinnedVideos()[videoId])
                                .map(videoId => (
                                    <Card
                                        key={`regular_${videoId}`}
                                        id={videoId}
                                        isPinned={true}
                                        onPinChange={(pinned) => updatePinnedState(videoId, pinned)}
                                        className="aspect-video col-span-1 sm:col-span-1"
                                    />
                                ))}

                            {/* Live pinned video if any */}
                            {liveVideo() && pinnedVideos()[`live_${liveVideo().id}`] && (
                                <Card
                                    key={`live_${liveVideo().id}`}
                                    id={liveVideo().id}
                                    title={liveVideo().title}
                                    thumbnail={liveVideo().thumbnail}
                                    isLive={true}
                                    isPinned={true}
                                    onPinChange={(pinned) => updatePinnedState(liveVideo().id, pinned, true)}
                                    className="aspect-video col-span-1 sm:col-span-1"
                                />
                            )}

                        </div>
                    </div>
                )}

                {/* Add this section to show the live video */}
                {settings().showInDashboard && settings().youtubeUrl && (
                    <Section className="w-full p-4 pl-16 pr-16">
                        <Text animate={true} className="px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80">
                            <ShinyText>Your Live Stream</ShinyText>
                        </Text>
                        {isLoadingLive() ? (
                            <div class="flex justify-center items-center h-64 bg-black">
                                <span class="loading loading-spinner loading-lg"></span>
                            </div>
                        ) : liveVideo() ? (
                            <div class="mt-4">
                                <Card
                                    id={liveVideo().id}
                                    title={liveVideo().title}
                                    thumbnail={liveVideo().thumbnail}
                                    isLive={true}
                                    className="w-full aspect-video"
                                    isPinned={!!pinnedVideos()[`live_${liveVideo().id}`]}
                                    onPinChange={(pinned) => updatePinnedState(liveVideo().id, pinned, true)}
                                />
                            </div>
                        ) : (
                            <div class="mt-4 p-4 rounded-lg bg-gray-800 border border-gray-700">
                                <span class="text-gray-300">You're not currently live on YouTube.</span>
                            </div>
                        )}
                    </Section>
                )}
            </Section>

            <Section className="w-full p-4 pl-16 pr-16">
                <Text animate={true} className="px-8 text-2xl md:text-4xl lg:text-6xl font-serif font-stretch-50% opacity-80">
                    <ShinyText> Live Streams </ShinyText>
                </Text>
                {videos().loading ? (
                    <div class="flex justify-center items-center h-64 bg-black">
                        <span class="loading loading-spinner loading-lg"></span>
                    </div>
                ) : videos().error ? (
                    <div class="alert alert-error">
                        <span>Error: {videos().error}</span>
                    </div>
                ) : (
                    <>
                        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 p-4">
                            {paginatedVideos().map((video) => (
                                <Card
                                    id={video}
                                    isPinned={!!pinnedVideos()[video]}
                                    onPinChange={(pinned) => updatePinnedState(video, pinned)}
                                />
                            ))}
                        </div>

                        {totalPages() > 1 && (
                            <div class="flex justify-center gap-2 mt-6">
                                <button
                                    onClick={() => goToPage(currentPage() - 1)}
                                    disabled={currentPage() === 1}
                                    class="btn btn-sm"
                                >
                                    Previous
                                </button>
                                {Array.from({ length: totalPages() }, (_, i) => i + 1).map((page) => (
                                    <button
                                        key={page}
                                        onClick={() => goToPage(page)}
                                        class={`btn btn-sm ${currentPage() === page ? 'btn-primary' : ''}`}
                                    >
                                        {page}
                                    </button>
                                ))}
                                <button
                                    onClick={() => goToPage(currentPage() + 1)}
                                    disabled={currentPage() === totalPages()}
                                    class="btn btn-sm"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </Section>


            <Show when={isFocusMode()}>
                <div class="fixed inset-0 z-50 bg-black flex">
                    <div class="absolute top-4 right-4 z-50">
                        {/*<button */}
                        {/*    onClick={() => setIsFocusMode(false)}*/}
                        {/*    class="text-white hover:bg-white/20 rounded-full p-2 transition-colors"*/}
                        {/*    aria-label="Exit focus mode"*/}
                        {/*>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">*/}
                        {/*        <path d="M18 6 6 18"/>*/}
                        {/*        <path d="m6 6 12 12"/>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                    </div>
                    <div class="w-full h-full">
                        {(() => {
                            const pinnedVideosList = [
                                // Regular pinned videos
                                ...(videos().data?.filter(videoId => pinnedVideos()[videoId]) || []).map(videoId => ({
                                    id: videoId,
                                    isLive: false
                                })),
                                // Live pinned video if any
                                ...(liveVideo() && pinnedVideos()[`live_${liveVideo().id}`] ? [{
                                    id: liveVideo().id,
                                    title: liveVideo().title,
                                    thumbnail: liveVideo().thumbnail,
                                    isLive: true
                                }] : [])
                            ];

                            const count = pinnedVideosList.length;
                            if (count === 0) return null;

                            // Define grid layouts based on number of videos
                            const getGridLayout = () => {
                                switch (count) {
                                    case 1: return 'grid-cols-1 grid-rows-1';
                                    case 2: return 'grid-cols-2 grid-rows-1';
                                    case 3: return 'grid-cols-2 grid-rows-2';
                                    case 4: return 'grid-cols-2 grid-rows-2';
                                    default: return 'grid-cols-2 grid-rows-2';
                                }
                            };

                            return (
                                <div class={`w-full h-full grid ${getGridLayout()} gap-4 p-4`}>
                                    {pinnedVideosList.map((video, index) => (
                                        <div key={`focus-${video.isLive ? 'live' : 'regular'}-${video.id}`}
                                             class={`relative ${count === 3 && index === 0 ? 'row-span-2' : ''}`}>
                                            <Card
                                                id={video.id}
                                                title={video.title}
                                                thumbnail={video.thumbnail}
                                                isLive={video.isLive}
                                                isPinned={true}
                                                onPinChange={(pinned) => updatePinnedState(
                                                    video.id,
                                                    pinned,
                                                    video.isLive
                                                )}
                                                className="w-full h-full"
                                            />
                                            {count > 4 && index >= 4 && (
                                                <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
                                                    <span class="text-white text-2xl">+{count - 4} more</span>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            );
                        })()}
                    </div>
                </div>
            </Show>

            {/* Settings Panel */}
            <Show when={settingsOpen()}>
                <div class="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4" onClick={() => setSettingsOpen(false)}>
                    <div class="w-full max-w-2xl" onClick={e => e.stopPropagation()}>

                        <Section className="rounded-xl shadow-2xl overflow-hidden">
                            <div class="p-8">
                                <div class="flex justify-between items-center mb-8">
                                    <Text className="text-3xl font-bold">Settings</Text>
                                    <button
                                        onClick={() => setSettingsOpen(false)}
                                        class="p-2 rounded-full hover:bg-opacity-20 transition-colors"
                                        aria-label="Close settings"
                                    >
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isDark() ? "currentColor" : "black"} stroke-width="2">
                                            <path d="M18 6L6 18M6 6l12 12"/>
                                        </svg>
                                    </button>
                                </div>

                                <div class="space-y-8">
                                    <div class="flex flex-row justify-between items-center gap-4">
                                        <Text as="label" className="block text-md font-medium m-4">Theme</Text>
                                        <ThemeSwitch saveSettings={saveSettings}/>
                                    </div>
                                </div>


                                <div class="space-y-8">
                                    <div class="flex flex-row justify-between items-center gap-4">
                                        <Text as="label" className="block text-md font-medium m-4">Cards</Text>
                                        <input
                                            type="number"
                                            value={settings().cardsPerPage || cardsPerPage()}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                const parsedValue = parseInt(value);
                                                if (isNaN(parsedValue) || parsedValue < 1) {
                                                    console.error(`Failed to parse value "${value}" to an integer.`);
                                                    return;
                                                }
                                                if (parsedValue > 12) {
                                                    console.error(`Value "${value}" is greater than 12.`);
                                                    return;
                                                }
                                                saveSettings('cardsPerPage', parsedValue);
                                                setCardsPerPage(parsedValue);
                                            }}
                                            class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "
                                            placeholder="4"
                                        >
                                        </input>
                                    </div>
                                </div>

                                <div class="space-y-8 mt-8">
                                    <div class="space-y-4">
                                        <div class="flex items-center justify-between">
                                            <label for="showTimer" class="text-sm text-gray-300">
                                                Show Timer
                                            </label>
                                            <input
                                                id="showTimer"
                                                type="checkbox"
                                                checked={settings().showTimer}
                                                onInput={(e) => saveSettings('showTimer', e.target.checked)}
                                                class="toggle toggle-primary"
                                            />
                                        </div>
                                        <div class="flex items-center justify-between">
                                            <label for="showTaskManager" class="text-sm text-gray-300">
                                                Show Task Manager
                                            </label>
                                            <input
                                                id="showTaskManager"
                                                type="checkbox"
                                                checked={settings().showTaskManager}
                                                onInput={(e) => saveSettings('showTaskManager', e.target.checked)}
                                                class="toggle toggle-primary"
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div class="space-y-8 mt-8">
                                    <Text className="text-xl font-semibold mb-4">Go Live</Text>
                                    <div class="space-y-4">
                                        <div class="flex flex-col gap-2">
                                            <Text as="label" className="block text-md font-medium">YouTube Channel URL</Text>
                                            <div class="flex flex-col lg:flex-row gap-2">
                                                <input
                                                    type="url"
                                                    value={settings().youtubeUrl}
                                                    onInput={(e) => saveSettings('youtubeUrl', e.target.value)}
                                                    placeholder="https://www.youtube.com/@channelname"
                                                    class="flex-1 px-4 py-2 rounded-lg bg-black/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400"
                                                />
                                                <button class="btn btn-primary whitespace-nowrap">Save</button>
                                            </div>
                                            <div class="flex items-center mt-4">
                                                <input
                                                    id="showInDashboard"
                                                    type="checkbox"
                                                    checked={settings().showInDashboard}
                                                    onInput={(e) => saveSettings('showInDashboard', e.target.checked)}
                                                    class="w-4 h-4 rounded border-gray-600 bg-black/50 focus:ring-2 focus:ring-white/50"
                                                />
                                                <label for="showInDashboard" class="ml-2 text-sm text-gray-300">
                                                    Show my live stream in dashboard
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </Section>
                    </div>
                </div>
            </Show>
        </Section>
    );
}

