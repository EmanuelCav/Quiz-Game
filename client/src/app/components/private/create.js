import React, { useState, useContext } from 'react'

import { QuizContext } from '../../server/context/actions/quiz.action';
import { VipContext } from '../../server/context/actions/vip.action';

import ErrorCreate from '../../response/res/errorCreate'
import ErrorUpdate from '../../response/res/errorUpdate'

const Create = ({ setIsMyQuiz, setIsCreate, setCreated }) => {

  const { createQuizAction, updateQuizAction, myQuiz } = useContext(QuizContext)
  const { vip } = useContext(VipContext)

  const initialState = {
    title: "",
    description: "",
    amount: "",
    questions: [],
    type: ""
  }
  const initialStateQuestion = {
    question: "",
    correctOption: "",
    optionOne: "",
    optionTwo: "",
    optionThree: ""
  }

  const [secondStep, setSecondStep] = useState(false)

  const [quizData, setQuizData] = useState(initialState)
  const [questionData, setQuestionData] = useState(initialStateQuestion)

  const { title, description, type, amount } = quizData;
  var { question, correctOption, optionOne, optionTwo, optionThree } = questionData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuizData({ ...quizData, [name]: value })
  }
  const handleChangeQuestion = (e) => {
    const { name, value } = e.target;
    setQuestionData({ ...questionData, [name]: value })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    parseInt(quizData.amount)
    createQuizAction(quizData, vip.token, setSecondStep)
  }
  const handleSumbitQuestion = (e) => {
    e.preventDefault();
    updateQuizAction(myQuiz.slice(-1)[0]._id, questionData, vip.token, setQuestionData, initialStateQuestion)
    if(myQuiz.slice(-1)[0].questions.length + 1 == amount) {
      setIsMyQuiz(true)
      setIsCreate(false)
      setCreated(true)
    }
  }

  return (
    <div className="container-private" style={{ height: 'calc(100vh - 70px)' }}>
      {
        secondStep ? (
          <>
            {
              myQuiz.slice(-1)[0].questions.length >= amount ? (
                <></>
              ) : (
                <form className="form-user" style={{ width: "37.3%", top: 'calc(50% + 35px)', left: 'calc(50% + 40px)' }} onSubmit={handleSumbitQuestion} >
                  <ErrorUpdate />
                  <div className="separator">
                    <h1 className="title-play">QUESTION {myQuiz.slice(-1)[0].questions.length + 1}</h1>
                  </div>
                  <div className="separator">
                    <input type="text" name="question" className="input-form" placeholder="QUESTION" value={question} onChange={handleChangeQuestion} autoComplete="off" />
                  </div>
                  <div className="separator">
                    <input type="text" name="correctOption" className="input-form" placeholder="CORRECT OPTION" value={correctOption} onChange={handleChangeQuestion} autoComplete="off" />
                  </div>
                  <div className="separator">
                    <input type="text" name="optionOne" className="input-form" placeholder="OPTION 1" value={optionOne} onChange={handleChangeQuestion} autoComplete="off" />
                  </div>
                  <div className="separator">
                    <input type="text" name="optionTwo" className="input-form" placeholder="OPTION 2" value={optionTwo} onChange={handleChangeQuestion} autoComplete="off" />
                  </div>
                  <div className="separator">
                    <input type="text" name="optionThree" className="input-form" placeholder="OPTION 3" value={optionThree} onChange={handleChangeQuestion} autoComplete="off" />
                  </div>
                  <div className="separator">
                    {
                      myQuiz.slice(-1)[0].questions.length + 1 == amount ? (
                        <button className="button-play">UPLOAD</button>
                      ) : (
                        <button className="button-play">NEXT</button>
                      )
                    }
                  </div>
                </form>
              )
            }
          </>
        ) : (
          <form className="form-user" style={{ width: "37.3%", top: 'calc(50% + 35px)', left: 'calc(50% + 40px)' }} onSubmit={handleSumbit} >
            <ErrorCreate />
            <div className="separator">
              <h1 className="title-play">CREATE A QUIZ</h1>
            </div>
            <div className="separator">
              <input type="text" name="title" className="input-form" placeholder="TITLE" value={title} onChange={handleChange} autoComplete="off" />
            </div>
            <div className="separator">
              <textarea name="description" className="input-form" style={{ resize: 'none', height: '98px' }} placeholder="DESCRIPTION(optional)" value={description} onChange={handleChange} autoComplete="off" />
            </div>
            <div className="separator">
              <select className="input-form" name="type" value={type} onChange={handleChange}>
                <option value="" selected disabled hidden>Select an option</option>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <div className="separator">
              <input type="text" name="amount" className="input-form" placeholder="AMOUNT OF QUESTIONS" value={amount} onChange={handleChange} autoComplete="off" />
            </div>
            <div className="separator">
              <button className="button-play">NEXT</button>
            </div>
          </form>
        )
      }
    </div>
  )
}

export default Create
