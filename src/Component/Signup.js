import React from 'react'

const Signup = () => {
  return (
    <div className=' m-auto'>
        <form action="" className=' p-4 bg-black opacity-85 rounded-md shadow-md w-[450px] flex justify-center flex-col '>
            <h1 className=' text-start text-white font-bold text-3xl ml-12'>Login</h1>
            <br />
            
            <input type="text" name="" id="" className=' bg-[#333333] w-[350px] m-auto p-2 rounded-md shadow-sm text-white' placeholder="Email or Phone Number" />
            <br />
            <input type="email" name="" id="" className=' bg-[#333333] w-[350px] m-auto p-2 rounded-md shadow-sm text-white' placeholder="Password" />
               <br />
               <br />
               
            <button className='  w-[350px] m-auto p-2 rounded-md shadow-sm text-white bg-[#E50914]' >Login</button>
        </form>
    
    </div>
  )
}

export default Signup;