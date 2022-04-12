import React, { useState, useContext } from 'react'
import { Navigate } from "react-router-dom";

import OptionsAuth from '../components/auth/optionsAuth'
import Form from '../components/auth/form'

import { VipContext } from '../server/context/actions/vip.action'

const Auth = () => {

  const { isLoggedInVip } = useContext(VipContext)

  const [showSignUp, setShowSignUp] = useState(false)
  const [showSignIn, setShowSignIn] = useState(true)

  return (
    <>
      {
        isLoggedInVip ? (
          <Navigate to="/allquiz" />
        ) : (
          <div className="container-auth">
            <OptionsAuth setShowSignUp={setShowSignUp} setShowSignIn={setShowSignIn} showSignUp={showSignUp} showSignIn={showSignIn} />
            <Form showSignUp={showSignUp} showSignIn={showSignIn} />
          </div>
        )
      }
    </>
  )
}

export default Auth