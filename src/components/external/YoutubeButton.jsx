import { styled } from 'solid-styled-components';
import { createSignal, createEffect } from 'solid-js';

const YoutubeButton = ({ settings, onSettingsOpen }) => {
    const [showDialog, setShowDialog] = createSignal(false);
    
    const handleGoLive = () => {
        if (!settings().youtubeUrl) {
            setShowDialog(true);
            return;
        }
        
        // Extract channel name from URL
        const url = settings().youtubeUrl;
        let channelId = '';
        
        // Handle different URL formats
        if (url.includes('youtube.com/channel/')) {
            channelId = url.split('youtube.com/channel/')[1].split('/')[0].split('?')[0];
        } else if (url.includes('youtube.com/')) {
            const path = url.split('youtube.com/')[1];
            if (path.startsWith('@')) {
                channelId = path.split('/')[0].substring(1);
            } else if (path.startsWith('c/') || path.startsWith('user/')) {
                channelId = path.split('/')[1];
            }
        }
        
        if (channelId) {
            window.open(`https://studio.youtube.com/channel/${channelId}/livestreaming`, '_blank');
        } else {
            // Fallback to YouTube Studio if we can't parse the URL
            window.open('https://studio.youtube.com', '_blank');
        }
    };

    return (
        <>
            <StyledWrapper>
                <button className="button-with-icon" onClick={handleGoLive}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="Play" className="icon">
                        <path d="M12 39c-.549 0-1.095-.15-1.578-.447A3.008 3.008 0 0 1 9 36V12c0-1.041.54-2.007 1.422-2.553a3.014 3.014 0 0 1 2.919-.132l24 12a3.003 3.003 0 0 1 0 5.37l-24 12c-.42.21-.885.315-1.341.315z" fill="#ffffff" className="color000000 svgShape" />
                    </svg>
                    <span className="text">Go Live</span>
                </button>
            </StyledWrapper>

            {showDialog() && (
                <div class=" inset-0 bg-black/50 flex items-center justify-center absolute z-50">
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
