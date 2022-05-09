import React,{useState} from 'react'
import '../../assets/Navbar.css'
import {Link } from "react-router-dom";

function NavBar() {

    const [side,setSide] = useState("hidden")

    const handleSideOpen = ()=>
    {
        setSide("visible")
    }
    const handleSideClose = ()=>
    {
        setSide("hidden")
    }

    return (
        <div className='navbar'>
            <div className={`side-bar ${side}`}>
            <div className="xmark">
            <i onClick={handleSideClose} className="fa-solid fa-2x fa-xmark"></i>
            </div>
                <p className='for-p'><Link className='link for-p' to='/home'>Home</Link></p>
                <p className='for-p'><Link className='link for-p' to='/home'>Cars</Link></p>
                <p className='for-p'><Link className='link for-p' to='/home'>Online Booking</Link></p>
                <p className='for-p'><Link className='link for-p' to='/home'>About</Link></p>
                <p className='for-p'><Link className='link for-p' to='/home'>Contact Us</Link></p>
            </div>
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
            <i onClick={handleSideOpen} className="fa-solid fa-2x fa-bars"></i>
        </div>
    )
}

export default NavBar
