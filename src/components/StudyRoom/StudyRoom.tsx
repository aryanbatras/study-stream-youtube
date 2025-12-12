import { createSignal, onMount, onCleanup, For } from "solid-js";
import { FaSolidUserGroup, FaSolidClock, FaBrandsYoutube } from "solid-icons/fa";

type Room = {
    id: string;
    name: string;
    participants: number;
    currentVideo?: string;
    startTime?: number;
};

// Duration formatter (memo-friendly)
const formatDuration = (timestamp?: number) => {
    if (!timestamp) return "Just started";
    const diff = Math.floor((Date.now() - timestamp) / 1000);

    const h = Math.floor(diff / 3600);
    const m = Math.floor((diff % 3600) / 60);

    return h > 0 ? `${h}h ${m}m` : `${m}m`;
};

export default function StudyRoom() {
    const [isOpen, setIsOpen] = createSignal(false);
    const [activeRoom, setActiveRoom] = createSignal<Room | null>(null);

    const [rooms, setRooms] = createSignal<Room[]>([
        {
            id: "deep-focus",
            name: "Deep Focus",
            participants: 12,
            currentVideo: "jfKfPfyJRdk",
            startTime: Date.now() - 3600000,
        },
        {
            id: "coding-session",
            name: "Coding Session",
            participants: 8,
            currentVideo: "lTRiuFIWV8k",
            startTime: Date.now() - 1800000,
        },
        {
            id: "night-owls",
            name: "Night Owls",
            participants: 5,
            currentVideo: "5qap5aO4i9A",
            startTime: Date.now() - 7200000,
        },
    ]);

    const joinRoom = (room: Room) => setActiveRoom(room);
    const leaveRoom = () => setActiveRoom(null);

    // Random activity generator
    const updateParticipants = () => {
        setRooms(prev =>
            prev.map(r => ({
                ...r,
                participants: Math.max(
                    1,
                    r.participants + (Math.random() > 0.5 ? 1 : -1)
                ),
            }))
        );
    };

    let intervalId: number;
    onMount(() => {
        intervalId = setInterval(updateParticipants, 10_000) as unknown as number;
    });

    onCleanup(() => clearInterval(intervalId));

    return (
        <div class="fixed bottom-0 left-1/2 -translate-x-1/2 mb-4 z-30">
            {!isOpen() ? (
                <button
                    onClick={() => setIsOpen(true)}
                    class="bg-white/95 text-gray-900 backdrop-blur-sm rounded-full shadow-lg p-3 hover:shadow-xl transition-all"
                >
                    <FaSolidUserGroup class="w-6 h-6 text-emerald-500" />
                </button>
            ) : (
                <div class="bg-white/95 text-gray-900 backdrop-blur-sm rounded-xl shadow-xl w-80 overflow-hidden transition-all">
                    {/* Header */}
                    <div class="p-4 border-b border-gray-200 flex justify-between items-center">
                        <h3 class="font-semibold text-lg">Study Rooms</h3>
                        <button
                            onClick={() => {
                                setIsOpen(false);
                                leaveRoom();
                            }}
                            class="text-gray-500 hover:text-gray-700 text-xl leading-none"
                        >
                            ×
                        </button>
                    </div>

                    {/* Room list */}
                    {!activeRoom() ? (
                        <div class="max-h-96 overflow-y-auto">
                            <div class="p-4 text-sm text-gray-600">
                                Join a room to study together with others
                            </div>

                            <For each={rooms()}>
                                {room => (
                                    <div
                                        onClick={() => joinRoom(room)}
                                        class="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
                                    >
                                        <div class="flex justify-between items-center">
                                            <h4 class="font-medium text-gray-900">{room.name}</h4>

                                            <div class="flex items-center space-x-3 text-xs text-gray-500">
                        <span class="flex items-center">
                          <FaSolidUserGroup class="mr-1" size={10} />
                            {room.participants}
                        </span>
                                                <span class="flex items-center">
                          <FaSolidClock class="mr-1" size={10} />
                                                    {formatDuration(room.startTime)}
                        </span>
                                            </div>
                                        </div>

                                        {room.currentVideo && (
                                            <div class="mt-2 flex items-center text-xs text-gray-500">
                                                <FaBrandsYoutube class="mr-1 text-red-500" />
                                                <span class="truncate">
                          {room.name === "Deep Focus"
                              ? "Lofi Hip Hop Radio"
                              : room.name === "Coding Session"
                                  ? "Study with Me"
                                  : "Lofi Girl"}
                        </span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </For>
                        </div>
                    ) : (
                        /* Active Room Page */
                        <div class="h-96 flex flex-col text-gray-900">
                            <div class="p-4 border-b border-gray-200">
                                <div class="flex justify-between items-center">
                                    <h4 class="font-medium">{activeRoom()!.name}</h4>

                                    <button
                                        onClick={leaveRoom}
                                        class="text-sm text-emerald-600 hover:text-emerald-800"
                                    >
                                        ← Back
                                    </button>
                                </div>

                                <div class="flex items-center space-x-4 mt-1 text-sm text-gray-600">
                  <span class="flex items-center">
                    <FaSolidUserGroup class="mr-1" size={12} />
                      {activeRoom()!.participants} studying
                  </span>

                                    <span class="flex items-center">
                    <FaSolidClock class="mr-1" size={12} />
                    Started {formatDuration(activeRoom()!.startTime)} ago
                  </span>
                                </div>
                            </div>

                            {/* Video */}
                            <div class="flex-1 bg-black flex items-center justify-center">
                                {activeRoom()!.currentVideo ? (
                                    <div class="text-white text-center p-4">
                                        <FaBrandsYoutube size={48} class="mx-auto mb-4 text-red-500" />
                                        <p>YouTube stream would play here</p>
                                        <p class="text-sm text-gray-400 mt-2">
                                            Video ID: {activeRoom()!.currentVideo}
                                        </p>
                                    </div>
                                ) : (
                                    <div class="text-center p-4 text-gray-300">
                                        <h4 class="font-medium text-white mb-1">No video stream</h4>
                                        <p class="text-sm text-gray-400">
                                            This room doesn't have a video stream
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Footer */}
                            <div class="p-3 bg-gray-50 border-t border-gray-200">
                                <p class="text-xs text-gray-500 mb-2">
                                    <span class="font-medium text-emerald-600">Tip:</span> Keep your mic & camera off.
                                </p>

                                <div class="flex space-x-2">
                                    <button class="flex-1 py-2 bg-emerald-500 text-white text-sm rounded-md hover:bg-emerald-600">
                                        Join with Jitsi
                                    </button>

                                    <button
                                        onClick={leaveRoom}
                                        class="py-2 px-3 border border-gray-300 text-sm rounded-md hover:bg-gray-100"
                                    >
                                        Leave
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
