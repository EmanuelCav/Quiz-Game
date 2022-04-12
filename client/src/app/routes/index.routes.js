import React, { useContext } from 'react'
import { Navigate } from "react-router-dom";

import Form from '../components/user/form'

import { VipContext } from '../server/context/actions/vip.action'

const Index = () => {

  const { isLoggedInVip } = useContext(VipContext)

  return (
    <>
      {
        isLoggedInVip ? (
          <Navigate to="/allquiz" />
        ) : (
          <div className="container-index" >
            <Form />
          </div >
        )
      }
    </>
  )
}

export default Index