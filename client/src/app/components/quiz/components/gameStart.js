import React, { useEffect, useState } from 'react'

import Result from './result'

const GameStart = ({ getQuiz, questionNumber, setQuestionNumber }) => {

    const [correct, setCorrect] = useState(getQuiz.questions[questionNumber].options[0])
    const [result, setResult] = useState(false)
    var [correctsAnswers, setCorrectsAnswers] = useState(0)

    const nextQuestion = (option) => {
        if(option === correct) {
            setCorrectsAnswers(correctsAnswers+=1)
        }

        if (questionNumber === getQuiz.questions.length - 1) {
            setResult(true)
        } else {
            setQuestionNumber(questionNumber += 1)
        }
    }

    useEffect(() => {
        setCorrect(getQuiz.questions[questionNumber].options[0])
        shuffle(getQuiz.questions[questionNumber].options)
    }, [getQuiz.questions, questionNumber])

    function shuffle(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    return (
        <>
            {
                result ? (
                    <Result correctsAnswers={correctsAnswers} lengthQuestions={getQuiz.questions.length} />
                ) : (
                    <div className='container-question-quiz'>
                        <div className='container-title-question'>
                            <h1 className='title-quiz-start-play'>{getQuiz.questions[questionNumber].question}</h1>
                        </div >
                        <div className='container-options'>
                            {
                                getQuiz.questions[questionNumber].options.map((option, index) => {
                                    return <button className='option' id={option} onClick={() => nextQuestion(option)} key={index}>
                                        {option}
                                    </button>
                                })
                            }
                        </div>
                    </div >
                )
            }
        </>
    )
}

export default GameStart