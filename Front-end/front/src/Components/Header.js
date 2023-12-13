import React from 'react'
import Logo from '../Assets/logo.png'
import './Styles/Header.css'
const Header= () =>{
  return (
    <>
    <div className='Header-Main-Component '>
      <img src={Logo}/>
      <input className='Header-Main-Input' type='text' placeholder='search'/>
    </div>
    
    </>
  )
}

export default Header
