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

const DEFAULT_SETTINGS = {
  theme: 'system',
  fontSize: 'medium',
  animations: true,
  notifications: true
};

export default function Dashboard() {
    const [cardsPerPage, setCardsPerPage] = createSignal(4);
    const { videos, loadLiveVideos } = useYoutubeApi();
    const { isDark, toggleTheme } = useThemeStore();

    const [pinnedVideos, setPinnedVideos] = createSignal({});
    const [currentPage, setCurrentPage] = createSignal(1);
    const [isFocusMode, setIsFocusMode] = createSignal(false);
    const [settingsOpen, setSettingsOpen] = createSignal(false);

    onMount(() => loadLiveVideos(12));

    const updatePinnedState = (videoId, isPinned) => {
        const newPinnedVideos = {
            ...pinnedVideos(),
            [videoId]: isPinned
        };
        setPinnedVideos(newPinnedVideos);

        if (Object.values(newPinnedVideos).filter(Boolean).length === 0) {
            setIsFocusMode(false);
        }
    };

    const paginatedVideos = createMemo(() => (videos().data || []).slice((currentPage() - 1) * cardsPerPage(), currentPage() * cardsPerPage()));
    const totalPages = createMemo(() => Math.ceil((videos().data?.length || 0) / cardsPerPage()));
    const goToPage = (page) => { if (page >= 1 && page <= totalPages()) setCurrentPage(page) };

    const pinnedVideosCount = createMemo(() =>
        Object.values(pinnedVideos()).filter(Boolean).length
    );
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
                    <div class="flex gap-4">
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
                            class="btn btn-ghost flex items-center gap-2 z-10"
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
                            {videos().data
                                ?.filter(video => pinnedVideos()[video])
                                .map(video => (
                                    <Card
                                        id={video}
                                        isPinned={true}
                                        onPinChange={(pinned) => updatePinnedState(video, pinned)}
                                        className="aspect-video col-span-1 sm:col-span-1"
                                    />
                                ))}
                        </div>
                    </div>
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

            {/*<Section className="flex flex-row justify-around gap-4 mt-8 w-full max-w-4xl mb-8">*/}
            {/*    <YoutubeButton />*/}
            {/*</Section>*/}

            {/*<Section className="flex flex-row justify-around gap-4 mt-32 w-full max-w-4xl mb-32">*/}
            {/*    <CubeBox />*/}
            {/*</Section>*/}

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
                            const pinnedVideosList = videos().data?.filter(video => pinnedVideos()[video]) || [];
                            const count = pinnedVideosList.length;

                            // Define grid layouts based on number of videos
                            const getGridLayout = () => {
                                if (count <= 1) return 'grid-cols-1 grid-rows-1';
                                if (count === 2) return 'grid-cols-2 grid-rows-1';
                                if (count === 3) return 'grid-cols-2 grid-rows-2';
                                if (count === 4) return 'grid-cols-2 grid-rows-2';
                                if (count === 5 || count === 6) return 'grid-cols-3 grid-rows-2';
                                return 'grid-cols-4 grid-rows-2'; // 7 or 8 videos
                            };

                            // Adjust the size of the first row for 3, 5, or 6 videos
                            const getRowSpan = (index) => {
                                if (count === 3 && index === 0) return 'row-span-2';
                                if ((count === 5 || count === 6) && index < 3) return 'row-span-2';
                                return '';
                            };

                            // Adjust the aspect ratio based on layout
                            const getAspectRatio = () => {
                                if (count === 1) return 'aspect-auto';
                                if (count === 2 || count === 4) return 'aspect-video';
                                return 'aspect-video';
                            };

                            return (
                                <div class={`w-full h-full grid ${getGridLayout()} gap-1 p-1`}>
                                    {pinnedVideosList.map((video, index) => (
                                        <div class={`relative ${getRowSpan(index)}`}>
                                            <Card
                                                id={video}
                                                isPinned={true}
                                                hideUI={true}
                                                onPinChange={(pinned) => updatePinnedState(video, pinned)}
                                                className={`w-full h-full ${getAspectRatio()}`}
                                            />
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
                    <div class="w-full max-w-2xl p-32" onClick={e => e.stopPropagation()}>

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
                                        <ThemeSwitch/>
                                    </div>
                                </div>


                                <div class="space-y-8">
                                    <div class="flex flex-row justify-between items-center gap-4">
                                        <Text as="label" className="block text-md font-medium m-4">Cards</Text>
                                        <input
                                            type="number"
                                            value={Math.max(1, Math.min(12, cardsPerPage() || 4))}
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
                                                setCardsPerPage(parsedValue);
                                            }}
                                            class=" w-12 px-2 py-1 rounded-lg bg-black/50 border focus:border-white/30 focus:ring-2 focus:ring-white/50 transition-colors duration-200 text-white placeholder-gray-400 "
                                            placeholder="4"
                                        >
                                        </input>
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

