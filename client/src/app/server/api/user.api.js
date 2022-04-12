import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:4200" })

export const createUserApi = async (userData) => {
    return await api.post('/createuser', userData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}