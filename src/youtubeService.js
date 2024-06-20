import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;
const CACHE_DURATION = 60 * 60 * 1000; // 5 minutes in milliseconds

const defaultVideos = [
  {
    id: { videoId: 'pK_LnrbNJh4' },
    snippet: {
      title: '[ITG PHOENIX] STAGER (스테이저) DX11',
    },
  },
  {
    id: { videoId: 'yybSRUPVFiI' },
    snippet: {
      title: '[ITG] Light Switch - MLA Edition',
    },
  },
  {
    id: { videoId: 'cLJlnhuarB0' },
    snippet: {
      title: "BBL Drizzy but it's DDR | [ITG SX11]",
    },
  },
  {
    id: { videoId: 'fMsT_8nmmhk' },
    snippet: {
      title: '[ITG] Spongebob Trap Remix - Couples 3x',
    },
  },
  {
    id: { videoId: 'BFda0pv6_f0' },
    snippet: {
      title: '[Good Reads 5] Kodokushi (孤独死)',
    },
  },
  {
    id: { videoId: '6bkh9yRwBcM' },
    snippet: {
      title: 'Chandelier - SX12 (RS+ FS+ BR++ XS- HS SS-) [No Mods]',
    },
  },
];

export const fetchYouTubeVideos = async () => {
  const cacheKey = 'youtube_videos_cache';
  const cachedData = JSON.parse(localStorage.getItem(cacheKey));
  const currentTime = new Date().getTime();

  if (cachedData && (currentTime - cachedData.timestamp) < CACHE_DURATION) {
    console.log('Using cached data');
    return cachedData.videos;
  }

  try {
    const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        part: 'snippet',
        channelId: CHANNEL_ID,
        maxResults: 6,
        order: 'date',
        type: 'video',
        key: API_KEY,
      },
    });

    const data = response.data.items;

    // Cache the data with a timestamp
    localStorage.setItem(cacheKey, JSON.stringify({
      videos: data,
      timestamp: currentTime,
    }));

    return data;
  } catch (error) {
    console.error('Error fetching YouTube videos', error);
    return defaultVideos; // Return default videos on error
  }
};
