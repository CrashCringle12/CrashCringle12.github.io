import axios from 'axios';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const CHANNEL_ID = process.env.REACT_APP_YOUTUBE_CHANNEL_ID;

export const fetchYouTubeVideos = async () => {
  console.log('API_KEY:', API_KEY)
  const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      channelId: CHANNEL_ID,
      maxResults: 6, // Fetch the most recent 6 videos
      order: 'date',
      type: 'video',
      key: API_KEY,
    },
  });

  return response.data.items;
};
