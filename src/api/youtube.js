import axios from 'axios';
const KEY = 'AIzaSyD9aeL7-FpA0_CQ2rj9syEdNzblEYnJdBQ';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
