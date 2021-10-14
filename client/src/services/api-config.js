import axios from 'axios'

const baseUrl =
process.env.NODE_ENV === 'production'
? 'https://pamper-pups.herokuapp.com/'
: 'http://localhost:4567';

const api = axios.create({
    baseURL: baseUrl
})

export default api;