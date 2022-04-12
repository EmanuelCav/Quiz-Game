import React, { useContext } from 'react'

import { QuizContext } from "../server/context/actions/quiz.action";
import { VipContext } from "../server/context/actions/vip.action";
import { UserContext } from "../server/context/actions/user.action";

import GetQuiz from '../components/quiz/getQuiz';

const Quiz = () => {

  const { getQuiz, joinQuizAction, joinQuizUserAction } = useContext(QuizContext)
  const { isLoggedInVip, vip } = useContext(VipContext)
  const { isLoggedInUser, user } = useContext(UserContext)

  return (
    <div className="container-getquiz">
      <GetQuiz getQuiz={getQuiz} isLoggedInVip={isLoggedInVip} joinQuizAction={joinQuizAction} vip={vip} isLoggedInUser={isLoggedInUser} user={user} joinQuizUserAction={joinQuizUserAction} />
    </div>
  )
}

export default Quiz