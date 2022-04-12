import React from 'react'

import Signin from './components/signin'
import SignUp from './components/signup'

const Form = ({ showSignUp, showSignIn }) => {
  return (
    <div className="container-form-auth">
      {
        showSignUp && <SignUp />
      }
      {
        showSignIn && <Signin />
      }
    </div>
  )
}

export default Form