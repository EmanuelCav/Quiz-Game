import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/quiz.action";

import Message from '../message/message'

const ErrorCreate = () => {

    const { errorUpdate } = useContext(ResponseContext)

  return (
    <div>
        {
            errorUpdate && <Message msg={errorUpdate} />
        }
    </div>
  )
}

export default ErrorCreate