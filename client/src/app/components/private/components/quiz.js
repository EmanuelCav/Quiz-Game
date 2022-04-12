import React from 'react'
import { useNavigate } from "react-router-dom";

const Quiz = ({ quiz, vip, removeQuizAction, getQuizVipAction }) => {

  const navigate = useNavigate()

  const joinQuiz = () => {
    getQuizVipAction(quiz.code, vip.token, navigate)
  }

  const removeQuiz = () => {
    removeQuizAction(quiz.code, vip.token)
  }

  return (
    <div className="container-quiz">
      <h1 className="title-quiz">{quiz.title}</h1>
      <p className="description-quiz">{quiz.description}</p>
      <p className="participants-quiz">Partipants: {quiz.participants.length}</p>
      {
        vip.vip._id === quiz.user ? (
          <>
            <p>Code: {quiz.code}</p>
            <button className="button-remove" onClick={removeQuiz}>DELETE</button>
          </>
        ) : (
          <button className="button-join" onClick={joinQuiz}>JOIN</button>
        )
      }
    </div>
  )
}

export default Quiz