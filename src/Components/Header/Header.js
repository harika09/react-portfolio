import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>
        <div className='header-wrapper bd-container'>
            <div className='logo'>LOGO</div>

            <div className='header-list-container'>
                <ul className='header-list-menu'>
                    <li className='header-list-'><a href="#">Home</a></li>
                    <li className='header-list-'><a href="#">Projects</a></li>
                    <li className='header-list-'><a href="#">About</a></li>
                    <li className='header-list-'><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
      
    </div>
  )
}

export default Header
