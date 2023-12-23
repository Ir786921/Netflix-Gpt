import React from 'react'
import bodyImg from "../Assest/home.jpg"
import Signup from './Signup'

const Body = () => {
  return (
   <div className=' h-[100vh] flex justify-center' style={{backgroundImage:`url(${bodyImg})`}}> 
   <Signup/></div>
  )
}

export default Body