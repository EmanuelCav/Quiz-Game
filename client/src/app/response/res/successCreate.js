import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/quiz.action";

import Message from '../message/message'

const SuccessCreate = () => {

    const { successCreate } = useContext(ResponseContext)

  return (
    <div>
        {
            successCreate && <Message msg={successCreate} />
        }
    </div>
  )
}

export default SuccessCreate