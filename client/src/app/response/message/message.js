import React from 'react'

const Message = ({ msg }) => {

  return (
    <div className='container-error'>
        <p className='message'>{msg}</p>
    </div>
  )
}

export default Message