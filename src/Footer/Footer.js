import React from 'react'
import './Footer.css'
import logo from '../Header/logo.png'


const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="wrapper footer__first">
            <div className="footer__up">
                <div className='footer__left'>
                    <img src={logo} alt="" />
                    <h3>Subscribe to our newsleter</h3>
                    <input type="text" placeholder='Enter Email'/>
                </div>

                <div className='footer__right'>
                    <div>
                        <h3>Links</h3>
                        <ul>
                            <li>About us</li>
                            <li>Insights</li>
                            <li>Our work</li>
                            <li>Customer Review</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Product</h3>
                        <ul>
                            <li>Product Detail</li>
                            <li>Review page</li>
                            <li>Winter Collations</li>
                            <li>Summer Collection</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Contact</h3>
                        <ul>
                            <li>Address: Test test</li>
                            <li>Telephone: +1 000 000 000</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer_down">
                Copyright&copy;<strong>Gent Mulaj</strong>2023. All Right Reserved
            </div>
        </div>
    </div>
  )
}

export default Footer
