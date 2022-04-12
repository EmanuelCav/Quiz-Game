import React, { createContext, useReducer } from 'react'

import * as quizApi from '../../api/quiz.api'
import { initialStateQuiz } from '../values/quiz.value'
import quizReducer from '../reducer/quiz.reducer'
import { ADD_QUESTION, ALL_QUIZ, CREATE_QUIZ, GET_QUIZ_USER, JOIN_QUIZ, MY_QUIZ, REMOVE_QUIZ } from '../constants/quiz.const'

import { initialStateResponse } from '../values/response.value'
import responseReducer from '../reducer/response.reducer'
import { ERROR_CREATE, ERROR_UPDATE, SUCCESS_CREATE, SUCCESS_DELETE, PARTICIPATE } from '../constants/response.const'

export const QuizContext = createContext(initialStateQuiz)
export const ResponseContext = createContext(initialStateResponse)

export const GlobalContextQuiz = ({ children }) => {

    const [stateQuiz, dispatchQuiz] = useReducer(quizReducer, initialStateQuiz)
    const [stateResponse, dispatchResponse] = useReducer(responseReducer, initialStateResponse)

    const getQuizAction = async (code, token, navigate) => {

        try {

            const { data } = await quizApi.getQuizUserApi(code, token)

            console.log(data);

            dispatchQuiz({
                type: GET_QUIZ_USER,
                payload: data
            })

            navigate(`/quiz/${code}`)

        } catch (error) {
            console.log(error.response.data);
        }

    }

    const allQuizAction = async (token) => {

        try {

            const { data } = await quizApi.allQuizApi(token)

            dispatchQuiz({
                type: ALL_QUIZ,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }

    }

    const myQuizAction = async (token) => {

        try {

            const { data } = await quizApi.myQuizApi(token)

            dispatchQuiz({
                type: MY_QUIZ,
                payload: data
            })

        } catch (error) {
            console.log(error);
        }

    }

    const getQuizVipAction = async (code, token, navigate) => {

        try {

            const { data } = await quizApi.getQuizVipApi(code, token)

            dispatchQuiz({
                type: GET_QUIZ_USER,
                payload: data
            })

            navigate(`/quiz/${code}`)

        } catch (error) {
            console.log(error);
        }

    }

    const createQuizAction = async (quizData, token, setSecondStep) => {

        try {

            const { data } = await quizApi.createQuizApi(quizData, token)

            dispatchQuiz({
                type: CREATE_QUIZ,
                payload: data
            })

            setSecondStep(true)

        } catch (error) {
            dispatchResponse({
                type: ERROR_CREATE,
                payload: error.response.data.message
            })
        }

    }

    const updateQuizAction = async (id, quizData, token, setQuestionData, initialStateQuestion) => {

        try {

            const { data } = await quizApi.updateQuizApi(id, quizData, token)

            dispatchQuiz({
                type: ADD_QUESTION,
                payload: data.quiz
            })

            dispatchResponse({
                type: SUCCESS_CREATE,
                payload: data.message
            })

            setQuestionData(initialStateQuestion)

        } catch (error) {
            dispatchResponse({
                type: ERROR_UPDATE,
                payload: error.response.data.message
            })
        }

    }

    const removeQuizAction = async (code, token) => {

        try {

            const { data } = await quizApi.removeQuizApi(code, token)

            dispatchQuiz({
                type: REMOVE_QUIZ,
                payload: code
            })

            dispatchResponse({
                type: SUCCESS_DELETE,
                payload: data.message
            })

        } catch (error) {
            console.log(error);
        }

    }

    const joinQuizAction = async (code, token, setGameStarted) => {

        try {

            const { data } = await quizApi.joinQuizApi(code, null, token)

            dispatchQuiz({
                type: JOIN_QUIZ,
                payload: data
            })

            setGameStarted(true)

        } catch (error) {
            dispatchResponse({
                type: PARTICIPATE,
                payload: error.response.data.message
            })
        }

    }

    const joinQuizUserAction = async (code, token, setGameStarted) => {

        try {

            const { data } = await quizApi.joinQuizUserApi(code, null, token)

            dispatchQuiz({
                type: JOIN_QUIZ,
                payload: data
            })

            setGameStarted(true)

        } catch (error) {
            dispatchResponse({
                type: PARTICIPATE,
                payload: error.response.data.message
            })
        }

    }

    return (
        <ResponseContext.Provider value={stateResponse}>
            <QuizContext.Provider value={{ ...stateQuiz, getQuizAction, allQuizAction, myQuizAction, getQuizVipAction, createQuizAction, updateQuizAction, removeQuizAction, joinQuizAction, joinQuizUserAction }}>
                {children}
            </QuizContext.Provider>
        </ResponseContext.Provider>
    )
}

