"use client";
import React from 'react'
import Google_btn from '../components/Google_btn'
import style from '../styles/loginPage.module.css'

const page = () => {
  return (
    <div className={style.login_main}>
      <h1>Create Your Account.</h1>
      <Google_btn/>
    </div>
  )
}

export default page