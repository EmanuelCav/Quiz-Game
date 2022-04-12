import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/quiz.action";

import Message from '../message/message'

const ErrorCreate = () => {

    const { errorCreate } = useContext(ResponseContext)

  return (
    <div>
        {
            errorCreate && <Message msg={errorCreate} />
        }
    </div>
  )
}

export default ErrorCreate