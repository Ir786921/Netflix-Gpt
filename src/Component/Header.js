import React from 'react'
import logo from "../Assest/Netflix_Logo_PMS.png"

const Header = () => {
  return (
    <div className=' flex justify-between absolute bg-gradient-to-b from-black'>
            <img src={logo} alt="logo" className=' w-48 p-2'  />
            <div><h1 className=' text-white'>Imran Raza</h1></div>
    </div>
  )
}

export default Header