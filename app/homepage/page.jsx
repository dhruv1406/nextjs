"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import Vendors from '../components/Vendors'

const page = () => {
  return (
    <>
    <div className="height-100vh">
    <Navbar/>
      <h1 className='text-center'>Vendor Details</h1>
      <Vendors/>
    </div>
      
    </>
  )
}

export default page