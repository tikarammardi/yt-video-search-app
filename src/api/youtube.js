import axios from 'axios';
<<<<<<< HEAD
const KEY = '';
=======
const KEY = 'AIzaSyALrYu9dd6YX6Sem6i0_icjvV2B-IrUuF0';
>>>>>>> 4068129503be27993679190e898531c19c434e36

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResult: 5,
    key: KEY
  }
});
