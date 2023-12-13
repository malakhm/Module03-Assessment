import React from 'react'
import fake from '../Assets/fake.png'
import './Styles/Cards.css'
const Cards=()=> {
  return (
    <div className='Card-Component-Main d-flex flex-column'>
        <img src={fake}></img>
        <div className='some-info d-flex'>
            <span className='author-main-class'>By Admin</span>
            <h3 className='category-main-class'>Health</h3>
        </div>
        <h2>Title here</h2>
      
    </div>
  )
}   

export default Cards
