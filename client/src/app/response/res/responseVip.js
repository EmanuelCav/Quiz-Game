import React, { useContext } from 'react'

import { ResponseContext } from "../../server/context/actions/vip.action";

import Message from '../message/message'

const ResponseVip = () => {

    const { responseVip } = useContext(ResponseContext)

  return (
    <div>
        {
            responseVip && <Message msg={responseVip} />
        }
    </div>
  )
}

export default ResponseVip