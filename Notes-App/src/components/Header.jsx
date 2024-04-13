import React from 'react'
import { ImSun } from "react-icons/im";
import { HiMiniMoon } from "react-icons/hi2";

function Header({darkMode, setDarkMode}) {
  return (
    <div className='header'>
        <h1 >Notes</h1>

        {
            darkMode ? <ImSun onClick={() => setDarkMode(!darkMode)} color='yellow'         className='mode'/> : <HiMiniMoon onClick={() => setDarkMode(!darkMode)} className='mode'/>
        }
    </div>
  )
}

export default Header
