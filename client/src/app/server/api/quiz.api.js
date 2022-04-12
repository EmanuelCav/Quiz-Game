import axios from 'axios'

const api = axios.create({ baseURL: "http://localhost:4200" })

export const getQuizUserApi = async (code, token) => {
    return await api.get(`/quiz/${code}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const allQuizApi = async (token) => {
    return await api.get('/allquiz', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const myQuizApi = async (token) => {
    return await api.get('/myquiz', {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const getQuizVipApi = async (code, token) => {
    return await api.get(`/quizvip/${code}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const createQuizApi = async (quizData, token) => {
    return await api.post('/createquiz', quizData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const updateQuizApi = async (id, quizData, token) => {
    return await api.patch(`/updatequiz/${id}`, quizData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
}

export const removeQuizApi = async (code, token) => {
    return await api.delete(`/quiz/${code}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const joinQuizApi = async (code, quizData, token) => {
    return await api.patch(`joinquiz/${code}`, quizData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export const joinQuizUserApi = async (code, quizData, token) => {
    return await api.patch(`joinquizuser/${code}`, quizData, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}
