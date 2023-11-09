import axios from 'axios';

const KEY = 'AIzaSyCthIQ9b7zSRjN6G_XAg2qvLDH21gZjJwQ';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});