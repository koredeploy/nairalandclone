import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.BASE_URL
})

export const signup = (incomingData)=> api.post('/api/auth/users/', incomingData)
export const sigin = (incomingData)=> api.post('/api/auth/token/login/', incomingData)