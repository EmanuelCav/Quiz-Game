import React, { useState } from 'react'

import User from './components/user'
import Code from './components/code'
import ResponseAuth from '../../response/res/responseAuth'

const Form = () => {

    const [showCode, setShowCode] = useState(false)

  return (
    <div className="user-form">
        <ResponseAuth />
        {
            showCode ? (
                <Code />
            ) : (
                <User setShowCode={setShowCode} />
            )
        }
    </div>
  )
}

export default Form