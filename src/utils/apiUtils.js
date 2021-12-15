import axios from 'axios'
const TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE1LzA0LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0OTk4MDgwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjUwMTI4NDAwfQ.43sCqLD_V6VUJP8qZLQSWO07uCIDI7bS5MGR92deYb8'

const api = axios.create({
    baseURL: 'https://airbnb.cybersoft.edu.vn'
})
console.log(api)

api.interceptors.request.use((config) => {
    config.headers = {
        ...config.headers,
        tokenCybersoft: TOKEN_CYBERSOFT,
        Authorization: localStorage.getItem('User') ? 'Bearer ' + JSON.parse(localStorage.getItem('User')).accessToken : ''
    }
    return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

