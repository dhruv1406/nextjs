// "use client";
import React from 'react'
import style from '../styles/signup.module.css'
import Link from 'next/link'

const Signup = () => {
  return (
    <div className={style.content}>
        <p className={style.title}>Welcome to My-NextJsApp</p>
        <Link href={"/signup"} className={style.btn}>Sign Up</Link>
    </div>
  )
}

export default Signup