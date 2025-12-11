import { onMount, createSignal, createMemo, Show } from 'solid-js';
import Section from "../components/reusable/Section.jsx";
import Card from "../components/reusable/Card.jsx";
import YoutubeButton from "../components/external/YoutubeButton.jsx";
import { useYoutubeApi } from '../hooks/useYoutubeApi.js';
import { FaSolidThumbtack } from 'solid-icons/fa';
import ShinyText from "../components/external/ShinyText.jsx";
import Text from "../components/reusable/Text.jsx";
import CubeBox from "../components/external/CubeBox.jsx";

export default function Dashboard() {
    const CARDS_PER_PAGE = 4;
    const { videos, loadLiveVideos } = useYoutubeApi();

    const [pinnedVideos, setPinnedVideos] = createSignal({});
    const [currentPage, setCurrentPage] = createSignal(1);
    const [isFocusMode, setIsFocusMode] = createSignal(false);

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

    const paginatedVideos = createMemo(() => (videos().data || []).slice((currentPage() - 1) * CARDS_PER_PAGE, currentPage() * CARDS_PER_PAGE));
    const totalPages = createMemo(() => Math.ceil((videos().data?.length || 0) / CARDS_PER_PAGE));
    const goToPage = (page) => { if (page >= 1 && page <= totalPages()) setCurrentPage(page) };

    const pinnedVideosCount = createMemo(() =>
        Object.values(pinnedVideos()).filter(Boolean).length
    );
    return (
        <Section className="min-h-screen flex flex-col justify-around items-center">

            <Section className="min-w-screen  max-w-4xl mb-6">

                <div class="flex justify-between p-16 items-center mb-4">
                    {pinnedVideosCount() > 0 && (
                        <>
                        <div class="text-sm text-gray-500 flex items-center gap-1">
                            <FaSolidThumbtack class="w-5 h-5" />
                            {pinnedVideosCount()} pinned
                        </div>
                        <button 
                            onClick={() => setIsFocusMode(true)}
                            class="btn btn-primary flex items-center gap-2"
                        >
                            <span>Focus Mode</span>
                        </button>
                        </>
                    )}
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
        </Section>
    );
}

