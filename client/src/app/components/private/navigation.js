import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { IoMdHome, IoMdAdd, IoMdSearch } from "react-icons/io";
import { BsFillPlayFill } from "react-icons/bs";
import { RiLogoutBoxFill } from "react-icons/ri";

import { VipContext } from "../../server/context/actions/vip.action";

const Navigation = ({ setIsPlay, setIsCreate, setIsMyQuiz, setIsGetQuiz, isPlay, isCreate, isMyQuiz, isGetQuiz }) => {

  const { logoutAction } = useContext(VipContext)

  const navigate = useNavigate()

  const logout = () => {
    logoutAction(navigate)
  }

  const showPlay = () => {
    setIsPlay(true)
    setIsCreate(false)
    setIsMyQuiz(false)
    setIsGetQuiz(false)
  }

  const showCreate = () => {
    setIsPlay(false)
    setIsCreate(true)
    setIsMyQuiz(false)
    setIsGetQuiz(false)
  }

  const showMyQuiz = () => {
    setIsPlay(false)
    setIsCreate(false)
    setIsMyQuiz(true)
    setIsGetQuiz(false)
  }

  const showGetQuiz = () => {
    setIsPlay(false)
    setIsCreate(false)
    setIsMyQuiz(false)
    setIsGetQuiz(true)
  }

  return (
    <div className="container-navigation">
        <BsFillPlayFill className="icon-navigation" onClick={showPlay} style={isPlay ? {background: '#eef', outline: '1px solid #639', color: "#639"} : {}} />
        <IoMdHome className="icon-navigation" onClick={showMyQuiz} style={isMyQuiz ? {background: '#eef', outline: '1px solid #639', color: "#639"} : {}} />
        <IoMdSearch className="icon-navigation" onClick={showGetQuiz} style={isGetQuiz ? {background: '#eef', outline: '1px solid #639', color: "#639"} : {}} />
        <IoMdAdd className="icon-navigation" onClick={showCreate} style={isCreate ? {background: '#eef', outline: '1px solid #639', color: "#639"} : {}} />
        <RiLogoutBoxFill className="icon-navigation" onClick={logout} />
    </div>
  )
}

export default Navigation