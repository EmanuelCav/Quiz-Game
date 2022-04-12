import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";

const Logo = () => {

  const navigate = useNavigate()
  const location = useLocation()

  const redirectIndex = () => {
    if(location.pathname === "/auth") {
      navigate('/')
    }
  }

  return (
    <div className="container-logo" onClick={redirectIndex} style={location.pathname === "/auth" ? {cursor: 'pointer'} : {cursor: 'default'}}>
        <img src="game.png" alt="Game-Quiz" className="icon-game" />
        <h1 className="text-game">QUIZ GAME</h1>
    </div>
  )
}

export default Logo