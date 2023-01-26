import React from 'react'
import './Header.css'
import logo from './logo.png'

const Header = () => {
  return (
    <div className='header'>
        <div className="wrapper header__first">
            <img src={logo} alt="" />

            <ul className='header__ul'>
                <li><a href="#home">Discover</a></li>
                <li><a href="#product">Product</a></li>
                <li><a href="#aboutUs">About Us</a></li>
                <li ><a href="#footer">Contacts</a></li>
            </ul>

            <div className='header__a'>
                <a href="#">Basket</a>
            </div>
        </div>
    </div>
  )
}

export default Header
