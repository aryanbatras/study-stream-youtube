import { styled } from 'solid-styled-components';
import { createSignal } from 'solid-js';

const extractVideoId = (url) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
};

const YoutubeButton = ({ settings, onSettingsOpen, onVideoLinkSubmit }) => {
    const [showDialog, setShowDialog] = createSignal(false);
    const [videoUrl, setVideoUrl] = createSignal('');
    const [error, setError] = createSignal('');

    const handleGoLive = () => {
        if (!settings().youtubeUrl) {
            setShowDialog(true);
            return;
        }
        setShowDialog('input');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const videoId = extractVideoId(videoUrl());
        if (videoId) {
            onVideoLinkSubmit(videoId);
            setShowDialog(false);
            setVideoUrl('');
            setError('');
        } else {
            setError('Please enter a valid YouTube video URL');
        }
    };

    return (
        <>
            <StyledWrapper>
                <button className="button-with-icon" onClick={handleGoLive}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Play" className="icon">
                        <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff" className="color000000 svgShape" />
                    </svg>
                    <span className="text">Watch Live</span>
                </button>
            </StyledWrapper>

            {showDialog() === true && (
                <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
                        <h3 class="text-xl font-medium text-white mb-4">YouTube Channel Required</h3>
                        <p class="text-gray-300 mb-6">
                            Please add your YouTube channel URL in settings to go live.
                        </p>
                        <div class="flex justify-end space-x-3">
                            <button
                                onClick={() => setShowDialog(false)}
                                class="px-4 py-2 text-gray-300 hover:text-white"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => {
                                    setShowDialog(false);
                                    onSettingsOpen();
                                }}
                                class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                            >
                                Go to Settings
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {showDialog() === 'input' && (
                <div class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div class="bg-gray-800 p-6 rounded-lg max-w-md w-full mx-4">
                        <h3 class="text-xl font-medium text-white mb-4">Enter YouTube Live URL</h3>
                        <form onSubmit={handleSubmit} class="space-y-4">
                            <div>
                                <input
                                    type="url"
                                    value={videoUrl()}
                                    onInput={(e) => {
                                        setVideoUrl(e.target.value);
                                        setError('');
                                    }}
                                    placeholder="https://www.youtube.com/watch?v=..."
                                    class="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:border-red-500 focus:ring-2 focus:ring-red-500/50 transition-colors duration-200 text-white placeholder-gray-400"
                                    required
                                />
                                {error() && <p class="mt-1 text-sm text-red-400">{error()}</p>}
                            </div>
                            <div class="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setShowDialog(false);
                                        setVideoUrl('');
                                        setError('');
                                    }}
                                    class="px-4 py-2 text-gray-300 hover:text-white"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
                                >
                                    Watch
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

const StyledWrapper = styled.div`
  .button-with-icon {
    overflow: hidden;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 0px solid #d32f2f;
    font-family: "Istok Web", sans-serif;
    letter-spacing: 2px;
    padding: 0 12px;
    text-align: center;
    width: 116px;
    height: 40px;
    font-size: 12px;
    text-transform: uppercase;
    font-weight: normal;
    border-radius: 6px;
    outline: none;
    user-select: none;
    cursor: pointer;
    transform: translateY(0px);
    position: relative;
    box-shadow:
      inset 0 30px 30px -15px rgba(255, 255, 255, 0.2),
      inset 0 0 0 1px rgba(255, 255, 255, 0),
      inset 0 1px 20px rgba(0, 0, 0, 0.1),
      0 3px 0 #d32f2f,
      0 3px 2px rgba(0, 0, 0, 0.2),
      0 5px 10px rgba(0, 0, 0, 0.1),
      0 10px 20px rgba(0, 0, 0, 0.1);
    background: #e53935;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);
    transition: 200ms all ease-in-out;
  }

  .button-with-icon .icon {
    margin-right: 8px;
    width: 20px;
    height: 20px;
    transition: all 0.5s ease-in-out;
  }

  .button-with-icon:active {
    transform: translateY(3px);
    box-shadow:
      inset 0 16px 2px -15px rgba(0, 0, 0, 0),
      inset 0 0 0 1px rgba(255, 255, 255, 0.15),
      inset 0 1px 20px rgba(0, 0, 0, 0.1),
      0 0 0 #d32f2f,
      0 0 0 2px rgba(255, 255, 255, 0.5),
      0 0 0 rgba(0, 0, 0, 0),
      0 0 0 rgba(0, 0, 0, 0);
  }

  .button-with-icon:hover .text {
    transform: translateX(85px);
  }

  .button-with-icon:hover .icon {
    transform: translate(27px);
    scale: 1.05;
  }

  .text {
    transition: all 0.5s ease-in-out;
  }`;

export default YoutubeButton;