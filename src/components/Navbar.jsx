// import React from 'react'
import logo from '../assets/logo.png'
import profile from '../assets/react.svg'
const Navbar = () => {
  return (
    <div className="max-w-screen-lg mt-10 mx-auto p-5 bg-red-200 h-[15vh] flex items-center justify-between rounded-lg">
      <div className="left ml-2">
        <img className='w-24' src={logo} alt="" />
      </div>
      <div className="right mr-10 flex items-center justify-center gap-5">
        <i className=" text-black text-xl ri-search-line"></i>
        <i className="text-black text-xl ri-notification-2-line"></i>
        <i className="text-black text-xl ri-settings-line"></i>
        <img className='rounded-full' src={profile} alt="" />
      </div>
    </div>
  )
}

export default Navbar