import axios from 'axios';
const KEY = 'AIzaSyBy_lsXZ523V_Bkkg_EVrrDuk623nqGPnQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
