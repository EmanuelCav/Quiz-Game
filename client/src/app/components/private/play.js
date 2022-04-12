import React, { useEffect, useContext } from 'react'

import { QuizContext } from "../../server/context/actions/quiz.action";
import { VipContext } from "../../server/context/actions/vip.action";

import Quiz from './components/quiz'

const Play = () => {

    const { allQuizAction, allQuiz, getQuizVipAction } = useContext(QuizContext)
    const { vip } = useContext(VipContext)

    useEffect(() => {
        allQuizAction(vip.token)
    }, [vip.token])

    return (
        <div className="container-private">
            {
                allQuiz.map((quiz) => {
                    return <Quiz quiz={quiz} vip={vip} getQuizVipAction={getQuizVipAction} key={quiz._id} />
                })
            }
        </div>
    )
}

export default Play