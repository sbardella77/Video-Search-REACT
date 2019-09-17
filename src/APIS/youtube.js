import axios from 'axios'
const KEY = 'AIzaSyBoUUrLmBX_VjeCZtnXUr2WNf089tM96H0'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 10,
    key: KEY
  }
})

