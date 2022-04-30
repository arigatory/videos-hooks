import axios from 'axios';

const KEY = 'AIzaSyCE4af2vh3W8O0fwFqNYryxg-0xdcWqjEs';


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});