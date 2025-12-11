const CACHE_PREFIX = 'yt_clone_cache_';
const CACHE_DURATION = 600 * 60 * 1000; // 15 minutes in milliseconds
const DEBUG = true; // Set to false in production

const log = (...args) => {
  if (DEBUG) {
    console.log('%c[Cache]', 'color: #4CAF50; font-weight: bold', ...args);
  }
};

export const cache = {
  set: (key, data, ttl = CACHE_DURATION) => {
    try {
      const now = new Date();
      const expiry = now.getTime() + ttl;
      const item = {
        data,
        expiry,
        timestamp: now.toISOString(),
        ttl: ttl / 1000 + 's'
      };
      
      localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(item));
      log(`Cached data for key: "${key}" (expires in ${ttl/1000}s)`);
      return true;
    } catch (error) {
      console.error('Error saving to cache:', error);
      return false;
    }
  },

  get: (key) => {
    try {
      const cached = localStorage.getItem(`${CACHE_PREFIX}${key}`);
      if (!cached) {
        log(`Cache miss for key: "${key}" (not found)`);
        return null;
      }

      const item = JSON.parse(cached);
      const now = new Date();
      const isExpired = now.getTime() > item.expiry;

      if (isExpired) {
        log(`Cache expired for key: "${key}" (expired at ${new Date(item.expiry).toLocaleTimeString()})`);
        localStorage.removeItem(`${CACHE_PREFIX}${key}`);
        return null;
      }

      const timeLeft = Math.ceil((item.expiry - now.getTime()) / 1000);
      log(`Cache hit for key: "${key}" (expires in ${timeLeft}s)`);
      return item.data;
    } catch (error) {
      console.error('Error reading from cache:', error);
      return null;
    }
  },

  remove: (key) => {
    try {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return true;
    } catch (error) {
      console.error('Error removing from cache:', error);
      return false;
    }
  },

  clear: () => {
    try {
      Object.keys(localStorage).forEach(key => {
        if (key.startsWith(CACHE_PREFIX)) {
          localStorage.removeItem(key);
        }
      });
      return true;
    } catch (error) {
      console.error('Error clearing cache:', error);
      return false;
    }
  }
};

export const CACHE_KEYS = {
  LIVE_VIDEOS: 'live_videos',
};
