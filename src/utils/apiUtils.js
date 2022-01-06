import axios from 'axios'
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8'
const TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTY4ZTcwOGVmZTE5MzAwMWMwYTVhNTAiLCJlbWFpbCI6ImtoYTl4MDE1OUBnbWFpbC5jb20iLCJ0eXBlIjoiQ0xJRU5UIiwiaWF0IjoxNjQxNDc3NTY3fQ.vul26OWoIhqHOphiOTCPXx_BtDPAfjhDTXSgVGRORbo'
const api = axios.create({
    baseURL: 'https://airbnb.cybersoft.edu.vn'
})

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        tokenByClass: TOKEN_CYBERSOFT,
        token: TOKEN,
        Authorization: localStorage.getItem('User') ? 'Bearer ' + JSON.parse(localStorage.getItem('User')).accessToken : ''
    }
    return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default api
