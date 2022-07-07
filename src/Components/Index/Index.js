import React from 'react'
import './index.css'
import firmware_logo from './../Assets/images/web.png'




function Index() {

  return (
    <div className='banner-container'>
        <div className='banner-wrapper bd-container'>
            <div className='banner-content'>
                <div className='banner-info'>
                    <h1>Harold Abella</h1>
                    <span>Web Developer</span>
                </div>

                <div className='banner-image'>
                    <img src={firmware_logo} alt="" />
                </div>
                
            </div>
            
        </div>
      
    </div>
  )
}

export default Index

