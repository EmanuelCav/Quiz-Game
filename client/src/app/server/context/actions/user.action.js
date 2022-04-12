import React, { useReducer, createContext } from 'react'

import * as userApi from '../../api/user.api'
import { CREATE_USER } from '../constants/user.const'
import { initialStateUser } from '../values/user.value'
import userReducer from '../reducer/user.reducer'

import { RESPONSE_AUTH, LOADING } from "../constants/response.const";
import { initialStateResponse } from "../values/response.value";
import responseReducer from '../reducer/response.reducer'

export const UserContext = createContext(initialStateUser)
export const ResponseContext = createContext(initialStateResponse)

export const GlobalContextUser = ({ children }) => {

    const [stateUser, dispatchUser] = useReducer(userReducer, initialStateUser)
    const [stateResponse, dispatchResponse] = useReducer(responseReducer, initialStateResponse)

    const createUserAction = async (userData, setUserCode) => {

        try {

            const { data } = await userApi.createUserApi(userData)

            dispatchUser({
                type: CREATE_USER,
                payload: data
            })

            setUserCode(true)

        } catch (error) {
            dispatchResponse({
                type: RESPONSE_AUTH,
                payload: error.response.data.message
            })
        }

    }

    return (
        <ResponseContext.Provider value={stateResponse}>
            <UserContext.Provider value={{ ...stateUser, createUserAction }}>
                {children}
            </UserContext.Provider>
        </ResponseContext.Provider>
    )
}