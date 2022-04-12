import React, { createContext, useReducer } from 'react'

import * as vipApi from '../../api/vip.api'
import { AUTH, LOGOUT } from '../constants/vip.const'
import vipReducer from '../reducer/vip.reducer'
import { initialStateVip } from '../values/vip.value'

import { RESPONSE_VIP } from "../constants/response.const";
import responseReducer from '../reducer/response.reducer'
import { initialStateResponse } from "../values/response.value";

export const VipContext = createContext(initialStateVip)
export const ResponseContext = createContext(initialStateResponse)

export const GlobalContextVip = ({ children }) => {

    const [stateVip, dispatchVip] = useReducer(vipReducer, initialStateVip)
    const [stateResponse, dispatchResponse] = useReducer(responseReducer, initialStateResponse)

    const registerAction = async (userData, navigate) => {

        try {

            const { data } = await vipApi.signupApi(userData)

            dispatchVip({
                type: AUTH,
                payload: data
            })

            navigate('/allquiz')

        } catch (error) {
            dispatchResponse({
                type: RESPONSE_VIP,
                payload: error.response.data.message
            })
        }

    }

    const loginAction = async (userData, navigate) => {

        try {

            const { data } = await vipApi.signinApi(userData)

            dispatchVip({
                type: AUTH,
                payload: data
            })

            navigate('/allquiz')

        } catch (error) {
            dispatchResponse({
                type: RESPONSE_VIP,
                payload: error.response.data.message
            })
        }

    }

    const logoutAction = async (navigate) => {

        try {

            dispatchVip({
                type: LOGOUT,
                payload: {}
            })

            navigate('/auth')

        } catch (error) {
            console.log(error);
        }

    }

    return (
        <ResponseContext.Provider value={stateResponse}>
            <VipContext.Provider value={{ ...stateVip, loginAction, registerAction, logoutAction }}>
                {children}
            </VipContext.Provider>
        </ResponseContext.Provider>
    )
}
