import React from 'react'
import Navbar from './navbar'
const Header = () => {
  return (
    <div>
      <Navbar />
      <header className="w-full h-[50px] bg-black text-white flex justify-center items-center px-4">
        <h2 className="text-[24px] font-bold"><span className="text-[#FF9F0D]">Food</span>Tuck</h2>
      </header>
    </div>
  )
}

export default Header