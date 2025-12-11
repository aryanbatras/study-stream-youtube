import { createSignal, Show } from 'solid-js';
import { Motion } from 'solid-motionone';
import YouTubeAutoPlayer from './YouTubeAutoPlayer';
import { FaSolidThumbtack } from 'solid-icons/fa';

const Card = (props) => {
    const { id, className = '', isLive = false, isPinned = false, onPinChange } = props;
    const [isHovered, setHovered] = createSignal(false);
    
    const handlePinClick = (e) => {
        e.stopPropagation();
        onPinChange?.(!isPinned);
    };
    
    return (
        <Motion.div
            class={`relative aspect-video bg-black rounded-lg overflow-hidden ${className}`}
            data-video-id={id}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <Show when={id} fallback={
                <div class="w-full h-full flex items-center justify-center bg-black">
                    <Motion.div
                        class="w-16 h-16 rounded-full bg-black flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <svg class="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                        </svg>
                    </Motion.div>
                </div>
            }>
                <YouTubeAutoPlayer videoId={id} />
            </Show>
            
            {/* Controls Container - Higher z-index and always clickable */}
            <div class="absolute inset-0 z-20 pointer-events-none">
                {/* LIVE Badge - Only shows on hover */}
                <Motion.div
                    class="absolute top-1 left-1 bg-red-500 text-white text-[8px] px-1.5 py-0.5 rounded flex items-center pointer-events-auto"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{
                        opacity: isHovered() ? 0.75 : 0,
                        y: isHovered() ? 0 : -5
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <div class="w-1 h-1 bg-white rounded-full mr-0.5"></div>
                    LIVE
                </Motion.div>
                
                {/* Pin Button - Only shows on hover */}
                <Motion.div 
                    class="absolute top-1 right-1 flex gap-1 pointer-events-auto"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{
                        opacity: isHovered() ? 1 : 0,
                        y: isHovered() ? 0 : -5
                    }}
                    transition={{ duration: 0.2 }}
                >
                    <button
                        onClick={handlePinClick}
                        class={`p-1.5 rounded-full ${isPinned ? 'bg-primary/90' : 'bg-black/60'} text-white hover:bg-primary transition-all cursor-pointer shadow-md`}
                        title={isPinned ? 'Unpin' : 'Pin'}
                    >
                        <FaSolidThumbtack 
                            class="w-3 h-3 transition-transform" 
                            classList={{ 'rotate-45': isPinned }}
                        />
                    </button>
                </Motion.div>
            </div>
        </Motion.div>
    );
};

export default Card;
