import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { FaRegSun, FaRegMoon } from "react-icons/fa";

const Header = () => {
  const [dark, setDark] = useState("light")
  const handleDarkMode = () => {
    if(dark === "light"){
      setDark("dark")
      document.documentElement.classList.add("dark")
      localStorage.setItem("dark-mode", "dark")
    }else{
      setDark("light")
      document.documentElement.classList.remove("dark");
      localStorage.setItem("dark-mode", "light");

    }

    useEffect(() => {
      if(localStorage.getItem("dark-mode") === "dark"){
      document.documentElement.classList.add("dark");
      }
      
    }, [])

  }
  return (
    <div className='flex container mx-auto h-20 items-center gap-8'> 
      <Link to={"/"} className='text-2xl font-medium flex-1'>Movie</Link>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>Contact</Link>
      <button className='cursor-pointer' onClick={handleDarkMode}>
        {
         dark === "light" ?
          <FaRegMoon/>
          :
          <FaRegSun/>
        }
      </button>
    </div>
  )
}

export default Header