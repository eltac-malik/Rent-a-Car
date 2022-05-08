import React from 'react'
import '../../assets/Navbar.css'
import {Link } from "react-router-dom";

function NavBar() {
    return (
        <div className='navbar'>
            <div className="img">
            <img src="https://carrentbaku.az/wp-content/uploads/2018/11/rent-logo-01.png" alt=""/>
            </div>
            <ul>
                <li><Link className='link' to='/home'>Home</Link></li>
                <li><Link className='link'  to='/home'>Cars</Link></li>
                <li><Link className='link'  to='/home'>Online Booking</Link></li>
                <li><Link className='link'  to='/home'>About</Link></li>
                <li><Link className='link'  to='/home'>Contact Us</Link></li>
            </ul>
            <ul className='contact-ul'>
                <li>+994508257515</li>
                <li><i className="fa-brands fa-whatsapp"></i></li>
                <li><i className="fa-brands fa-facebook-f"></i></li>
                <li><i className="fa-brands fa-instagram"></i></li>
            </ul>
        </div>
    )
}

export default NavBar
