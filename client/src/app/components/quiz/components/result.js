import React from 'react'

const Result = ({ correctsAnswers, lengthQuestions }) => {
  return (
    <>
        <p className='title-quiz-start-play'>Corrects: {correctsAnswers}</p>
        <p className='title-quiz-start-play'>Incorrects: {lengthQuestions - correctsAnswers}</p>
        <p className='title-quiz-start-play'>Percentage: {Math.floor((correctsAnswers * 100) / lengthQuestions)}%</p>
    </>
  )
}

export default Result