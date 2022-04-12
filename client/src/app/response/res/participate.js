import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/quiz.action";

import Message from '../message/message'

const Participate = () => {

    const { participate } = useContext(ResponseContext)

  return (
    <div>
        {
            participate && <Message msg={participate} />
        }
    </div>
  )
}

export default Participate