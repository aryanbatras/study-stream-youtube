import { createSignal, createEffect } from 'solid-js';
import { cache, CACHE_KEYS } from '../utils/cache';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;
if (!API_KEY) console.error('Missing YouTube API key');
const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const CACHE_DURATION = 5 * 60 * 1000;

const fetchChannelLiveVideo = async (channelId) => {
    const cacheKey = `${CACHE_KEYS.CHANNEL_LIVE}_${channelId}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) return cachedData;

    try {
        const response = await fetch(
            `${BASE_URL}/search?part=snippet&channelId=${channelId}&eventType=live&type=video&key=${API_KEY}`
        );
        if (!response.ok) return null;
        const data = await response.json();
        const liveVideo = data.items?.[0];
        if (liveVideo) {
            cache.set(cacheKey, liveVideo, CACHE_DURATION);
            return liveVideo;
        }
        return null;
    } catch (error) {
        console.error('Error fetching channel live video:', error);
        return null;
    }
};

const fetchLiveVideos = async (maxResults = 12) => {
    const cacheKey = `${CACHE_KEYS.LIVE_VIDEOS}_${maxResults}`;
    const cachedData = cache.get(cacheKey);
    if (cachedData) return cachedData;
    try {
        const keywords = ['live study', 'study with me', 'live pomodoro'];
        const searchQuery = keywords.join('|');
        const response = await fetch(`${BASE_URL}/search?part=snippet&type=video&eventType=live&q=${encodeURIComponent(searchQuery)}&maxResults=${maxResults}&key=${API_KEY}`);
        if (!response.ok) return new Error(`API request failed with status ${response.status}`);
        const searchData = await response.json();
        const videoIds = searchData.items?.map(item => item.id.videoId).filter(Boolean) || [];
        if (videoIds.length > 0) cache.set(cacheKey, videoIds, CACHE_DURATION);
        return videoIds;
    } catch (error) {
        throw new Error(`Failed to fetch live videos: ${error.message}`);
    }
};

export function useYoutubeApi() {
    const [videos, setVideos] = createSignal({ data: [], loading: false, error: null });
    const [userLiveVideo, setUserLiveVideo] = createSignal(null);
    const [isCheckingLive, setIsCheckingLive] = createSignal(false);

    const loadLiveVideos = async (maxResults = 12) => {
        try {
            setVideos(prev => ({ ...prev, loading: true, error: null }));
            const videoIds = await fetchLiveVideos(maxResults);
            setVideos({ data: videoIds, loading: false, error: null });
        } catch (err) {
            setVideos(prev => ({ data: prev.data, loading: false, error: err.message || 'Failed to load live videos' }));
        }
    };

    const checkUserLiveStatus = async (channelId) => {
        if (!channelId || isCheckingLive()) return;
        
        setIsCheckingLive(true);
        try {
            const liveVideo = await fetchChannelLiveVideo(channelId);
            setUserLiveVideo(liveVideo || null);
        } catch (error) {
            console.error('Error checking user live status:', error);
            setUserLiveVideo(null);
        }
        setIsCheckingLive(false);
    };

    return {
        videos,
        userLiveVideo,
        loadLiveVideos,
        checkUserLiveStatus
    };
}