import React, { useState, useContext } from 'react'
import { useNavigate } from "react-router-dom";

import { QuizContext } from "../../../server/context/actions/quiz.action";
import { UserContext } from "../../../server/context/actions/user.action";

const Code = () => {

    const { getQuizAction } = useContext(QuizContext)
    const { user } = useContext(UserContext)

    const navigate = useNavigate()

    const initialState = {
        code: ""
    }

    const [codeData, setCodeData] = useState(initialState)

    const { code } = codeData;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCodeData({...codeData, [name]: value})
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        getQuizAction(codeData.code, user.token, navigate)
    }

    return (
        <form className="form-user" onSubmit={handleSumbit}>
            <div className="separator">
                <h1 className="title-play">QUIZ CODE</h1>
            </div>
            <div className="separator">
                <input type="text" name="code" className="input-form" placeholder="ENTER A CODE" value={code} onChange={handleChange} autoComplete="off" />
            </div>
            <div className="separator">
                <button className="button-play">PLAY</button>
            </div>
        </form>
    )
}

export default Code