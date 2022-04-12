import React from 'react'
import { Link, useLocation } from "react-router-dom";

const More = () => {

  const location = useLocation()

  return (
    <div className="container-more">
      <Link to="/auth" className="link">
        {
          location.pathname !== "/" ? (
            <></>
          ) : (
            <p className="log-more">Log in for more</p>
          )
        }
      </Link>
    </div>
  )
}

export default More