import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:4200" })

export const signinApi = async (userData) => {
    return await api.post('/login', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}
export const signupApi = async (userData) => {
    return await api.post('/register', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}