import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { RiLockUnlockLine, RiLockPasswordLine } from "react-icons/ri";

import { VipContext } from "../../../server/context/actions/vip.action";

import ResponseVip from '../../../response/res/responseVip'

const SignUp = () => {

    const { registerAction } = useContext(VipContext)

    const navigate = useNavigate()

    const initialState = {
        nickname: "",
        email: "",
        password: "",
        confirm: ""
    }

    const [userData, setUserData] = useState(initialState)

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)

    const hidePassword = () => {
        setShowPassword(!showPassword)
    }

    const hideConfirm = () => {
        setShowConfirmPassword(!showConfirmPassword)
    }

    const { nickname, email, password, confirm } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        registerAction(userData, navigate)
    }

    return (
        <fieldset className="border-form">
            <ResponseVip />
            <legend className="title-form-auth">Sign up</legend>
            <form className="container-form" onSubmit={handleSumbit}>
                <div className="separator">
                    <input type="text" name="nickname" className="input-form" placeholder="NICKNAME" value={nickname} onChange={handleChange} />
                </div>
                <div className="separator">
                    <input type="text" name="email" className="input-form" placeholder="EMAIL" value={email} onChange={handleChange} />
                </div>
                <div className="container-password">
                    <div className="separator">
                        <input type={showPassword ? "text" : "password"} name="password" className="input-form" placeholder="PASSWORD" value={password} onChange={handleChange} />
                    </div>
                    {
                        showPassword ? <RiLockPasswordLine className="icon-password" onClick={hidePassword} /> : <RiLockUnlockLine className="icon-password" onClick={hidePassword} />
                    }
                </div>
                <div className="container-password">
                    <div className="separator">
                        <input type={showConfirmPassword ? "text" : "password"} name="confirm" className="input-form" placeholder="CONFIRM PASSWORD" value={confirm} onChange={handleChange} />
                    </div>
                    {
                        showConfirmPassword ? <RiLockPasswordLine className="icon-password" onClick={hideConfirm} /> : <RiLockUnlockLine className="icon-password" onClick={hideConfirm} />
                    }
                </div>
                <div className="separator">
                    <button className="button-play">SIGN UP</button>
                </div>
            </form>
        </fieldset>
    )
}

export default SignUp