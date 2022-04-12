import React from 'react'

const Start = ({ setIsCreate, setIsMyQuiz }) => {

    const start = () => {
        setIsCreate(true)
        setIsMyQuiz(false)
    }

    return (
        <div className="form-user" style={{ width: "37.3%", top: 'calc(50% + 35px)', left: 'calc(50% + 40px)' }}>
            <div className="separator">
                <h1 className="title-play">START TO CREATE A QUIZ</h1>
            </div>
            <div className="separator">
                <button className="button-play" onClick={start}>START</button>
            </div>
        </div>
    )
}

export default Start