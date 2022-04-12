import React from 'react'
import { Link } from "react-router-dom";

const OptionsAuth = ({ setShowSignUp, setShowSignIn, showSignUp, showSignIn }) => {

    const showRegister = () => {
        setShowSignUp(true)
        setShowSignIn(false)
    }
    const showLogin = () => {
        setShowSignIn(true)
        setShowSignUp(false)
    }

    return (
        <div className="container-options-auth">
            <div className="options-auth">
                <p onClick={showRegister} className="option-auth" 
                style={showSignUp ? {textDecoration: 'underline #fff'} : {}}>SIGN UP</p>
                <p onClick={showLogin} className="option-auth"
                style={showSignIn ? {textDecoration: 'underline #fff'} : {}}>SIGN IN</p>
                <Link className="link" to="/"><p className="option-auth">BACK</p></Link>
            </div>
        </div>
    )
}

export default OptionsAuth