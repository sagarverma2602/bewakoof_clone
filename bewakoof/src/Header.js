import React from 'react'
import './Header.css'
import logo from './assets/images/logo_bewakoof.png'
import {CiHeart,CiShoppingBasket} from 'react-icons/ci'
function Header() {
  return (
    <div className='mainheader'>
        <div className='header1'> 
            <div className='left-option'>
                <a href='#'>Offer</a>
                <a href='#'>Fanbook</a>
                <a href='#'>Download App</a>
                <a href='#'>Tribe</a>

            </div>
            <div className='right-option'>
                <a href='#'>Contact Us</a>
                <a href='#'>Track Order</a>
                
            </div>
        </div>
        <div className='header2'>
            <div className='left2'>
                <img src={logo} className='logo'/>
                <a href='#'> Men</a>
                <a href='#'> Women</a>
                <a href='#'> Mobile Covers</a>


                
            </div>
            <div className='right2'>
                <input type='search' placeholder='Search By Product, Category, Collection'></input>
                
                <div className='vline'></div>
                <a href='#'>Login</a>
                <CiHeart className='icons' />
                
                <CiShoppingBasket className='icons'/>

                
            </div>

        </div>
    </div>
  )
}

export default Header
