import React from 'react'
import { ImSun } from "react-icons/im";
import { HiMiniMoon } from "react-icons/hi2";

function Header({darkMode, setDarkMode}) {
  return (
    <div className='header'>
        <h1 >Notes</h1>

        {
            darkMode ? <ImSun onClick={() => setDarkMode(!darkMode)} color='yellow'/> : <HiMiniMoon onClick={() => setDarkMode(!darkMode)}/>
        }
    </div>
  )
}

export default Header
