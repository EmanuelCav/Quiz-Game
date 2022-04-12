import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/user.action";

import Message from '../message/message'

const ResponseAuth = () => {

    const { responseAuth } = useContext(ResponseContext)

  return (
    <div>
        {
            responseAuth && <Message msg={responseAuth} />
        }
    </div>
  )
}

export default ResponseAuth