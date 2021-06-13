import axios from 'axios'

const api = axios.create({
  baseURL: 'http://yourIp:3333',
})

export default api