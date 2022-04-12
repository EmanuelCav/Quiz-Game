import React, { useContext, useState } from 'react'
import { Navigate } from "react-router-dom";

import { VipContext } from "../server/context/actions/vip.action";

import Navigation from '../components/private/navigation'
import Play from '../components/private/play';
import Create from '../components/private/create';
import GetQuiz from '../components/private/getQuiz';
import MyQuiz from '../components/private/myQuiz';

const AllQuiz = () => {

  const { isLoggedInVip, vip } = useContext(VipContext)

  const [isPlay, setIsPlay] = useState(true)
  const [isCreate, setIsCreate] = useState(false)
  const [isMyQuiz, setIsMyQuiz] = useState(false)
  const [isGetQuiz, setIsGetQuiz] = useState(false)

  const [created, setCreated] = useState(false)

  return (
    <>
      {
        isLoggedInVip ? (
          <>
            <Navigation setIsPlay={setIsPlay} setIsCreate={setIsCreate} setIsMyQuiz={setIsMyQuiz} setIsGetQuiz={setIsGetQuiz}
              isPlay={isPlay} isCreate={isCreate} isMyQuiz={isMyQuiz} isGetQuiz={isGetQuiz} />
            {
              isPlay && <Play />
            }
            {
              isCreate && <Create setIsMyQuiz={setIsMyQuiz} setIsCreate={setIsCreate} setCreated={setCreated} />
            }
            {
              isMyQuiz && <MyQuiz setIsCreate={setIsCreate} setIsMyQuiz={setIsMyQuiz} created={created} vip={vip} />
            }
            {
              isGetQuiz && <GetQuiz />
            }
          </>
        ) : (
          <Navigate to="/auth" />
        )
      }
    </>
  )
}

export default AllQuiz
