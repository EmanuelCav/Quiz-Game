import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

import SuccessCreate from '../../response/res/successCreate';
import GameStart from './components/gameStart';
import Participate from '../../response/res/participate';

const GetQuiz = ({ getQuiz, isLoggedInVip, joinQuizAction, vip, isLoggedInUser, user, joinQuizUserAction }) => {

    const navigate = useNavigate()

    const [questionNumber, setQuestionNumber] = useState(0)
    const [gameStarted, setGameStarted] = useState(false)

    const start = () => {
        if (isLoggedInVip) {
            joinQuizAction(getQuiz.code, vip.token, setGameStarted)
        } else {
            joinQuizUserAction(getQuiz.code, user.token, setGameStarted)
        }
    }

    const cancel = () => {
        if (isLoggedInVip) {
            navigate('/allquiz')
        } else {
            navigate('/')
        }
    }

    return (
        <div className="container-start-play">
            <SuccessCreate />
            {
                gameStarted ? (
                    <GameStart getQuiz={getQuiz} questionNumber={questionNumber} setQuestionNumber={setQuestionNumber} />
                ) : (
                    <>
                        <Participate />
                        <h1 className="title-quiz-start-play">{getQuiz.title}</h1>
                        <p className="by-start-play">By: {getQuiz.user.nickname}</p>
                        <p className="text-start-play">{getQuiz.description}</p>
                        <div className="data-start-play">
                            <p className="text-start-play" style={{ userSelect: 'auto' }}>Code: {getQuiz.code}</p>
                            <p className="text-start-play">Amount of questions: {getQuiz.amount}</p>
                            <p className="text-start-play" style={{ fontWeight: '600' }}>Participants: {getQuiz.participants.length}</p>
                        </div>
                        <div className="container-buttons-start-play">
                            {
                                !isLoggedInUser ? (
                                    <>
                                        {
                                            vip.vip._id === getQuiz.user._id ? (
                                                <></>
                                            ) : (
                                                <div className="separator">
                                                    <button className="button-start-play" onClick={start}>START</button>
                                                </div>
                                            )
                                        }
                                    </>
                                ) : (
                                    <div className="separator">
                                        <button className="button-start-play" onClick={start}>START</button>
                                    </div>
                                )
                            }
                            <div className="separator">
                                <button className="button-cancel-start-play" onClick={cancel}>CANCEL</button>
                            </div>
                        </div>
                    </>
                )
            }
        </div>
    )
}

export default GetQuiz