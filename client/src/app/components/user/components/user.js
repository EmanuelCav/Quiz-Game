import React, { useState, useContext } from 'react'

import { UserContext } from "../../../server/context/actions/user.action";

const User = ({ setShowCode }) => {

    const { createUserAction } = useContext(UserContext)

    const initialState = {
        nickname: ""
    }

    const [userData, setUserData] = useState(initialState)

    const { nickname } = userData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData({...userData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        createUserAction(userData, setShowCode)
    }

    return (
        <form className="form-user" onSubmit={handleSumbit}>
            <div className="separator">
                <h1 className="title-play">LET'S PLAY</h1>
            </div>
            <div className="separator">
                <input type="text" name="nickname" className="input-form" placeholder="ENTER A NICKNAME" value={nickname} onChange={handleChange} autoComplete="off" />
            </div>
            <div className="separator">
                <button className="button-play">CONTINUE</button>
            </div>
        </form>
    )
}

export default User