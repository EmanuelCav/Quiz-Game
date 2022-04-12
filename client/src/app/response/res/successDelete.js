import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/quiz.action";

import Message from '../message/message'

const SuccessDelete = () => {

    const { successDelete } = useContext(ResponseContext)

  return (
    <div className='success-delete'>
        {
            successDelete && <Message msg={successDelete} />
        }
    </div>
  )
}

export default SuccessDelete