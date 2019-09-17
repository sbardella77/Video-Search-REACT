import axios from 'axios'
const KEY = /* write here your own GOOGLE APIKEY*/

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
})

