import React, { useContext, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import SuccessDelete from '../../response/res/successDelete';

import { QuizContext } from "../../server/context/actions/quiz.action";

import Quiz from './components/quiz'
import Start from './components/start';

const MyQuiz = ({ setIsCreate, setIsMyQuiz, created, vip }) => {

  const { myQuizAction, myQuiz, removeQuizAction, getQuizVipAction } = useContext(QuizContext)

  const navigate = useNavigate()

  useEffect(() => {
    myQuizAction(vip.token)
    if (created) {
      getQuizVipAction(myQuiz.slice(-1)[0].code, vip.token, navigate)
    }
  }, [vip.token, created, navigate])


  return (
    <>
      <SuccessDelete />
      <div className="container-private">
        {
          myQuiz.length === 0 ? (
            <Start setIsCreate={setIsCreate} setIsMyQuiz={setIsMyQuiz} />
          ) : (
            <>
              {
                myQuiz.map((quiz) => {
                  return <Quiz quiz={quiz} vip={vip} removeQuizAction={removeQuizAction} getQuizVipAction={getQuizVipAction} key={quiz._id} />
                })
              }
            </>
          )
        }
      </div>
    </>
  )
}

export default MyQuiz