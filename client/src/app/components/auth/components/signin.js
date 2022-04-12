import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { VipContext } from "../../../server/context/actions/vip.action";

import ResponseVip from '../../../response/res/responseVip'

const Signin = () => {

    const { loginAction } = useContext(VipContext)

    const navigate = useNavigate()

    const initialState = {
        email: "",
        password: ""
    }

    const [userData, setUserData] = useState(initialState)

    const { email, password } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value})
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        loginAction(userData, navigate)
    }

    return (
        <>
        <ResponseVip />
        <fieldset className="border-form">
            <legend className="title-form-auth">Sign in</legend>
            <form className="container-form" onSubmit={handleSumbit}>
                <div className="separator">
                    <input type="text" name="email" className="input-form" placeholder="EMAIL" value={email} onChange={handleChange} />
                </div>
                <div className="separator">
                    <input type="password" name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
                </div>
                <div className="separator">
                    <button className="button-play">SIGN IN</button>
                </div>
            </form>
        </fieldset>
        </>
    )
}

export default Signin