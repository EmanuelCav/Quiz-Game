import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";

import { QuizContext } from "../../../server/context/actions/quiz.action";
import { VipContext } from "../../../server/context/actions/vip.action";

const SearchCode = () => {

    const navigate = useNavigate()

    const initialState = {
        code: ""
    }

    const [codeData, setCodeData] = useState(initialState)

    const { code } = codeData;

    const { getQuizVipAction } = useContext(QuizContext)
    const { vip } = useContext(VipContext)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCodeData({ ...codeData, [name]: value })
    }

    const handleSumbit = (e) => {
        e.preventDefault();
        getQuizVipAction(codeData.code, vip.token, navigate)
    }

    return (
        <form className="form-user" style={{ width: "37.3%", top: 'calc(50% + 35px)', left: 'calc(50% + 40px)' }} onSubmit={handleSumbit}>
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

export default SearchCode
