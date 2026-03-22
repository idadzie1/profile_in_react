import '../../general.css';
import './nav.css';
import logoImage from '../assets/logo_image.jpg';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from 'react';

const Nav = () => {
    
    const[ isShowing, setIsShowing ] = useState(false)

  return (
    <nav>
        <div className="container">
            <div className="menu__logo">
                <a href="#">
                    <img src={logoImage} alt="logo image" />
                </a>                
            </div>
            <div className={`menu__list__items ${isShowing? `visible` : `hidden`}`}>
                <ul>
                    <li><a href="#" onClick={()=>setIsShowing(prev=>!prev)}>Home</a></li>
                    <li><a href="#about" onClick={()=>setIsShowing(prev=>!prev)}>About</a></li>
                    <li><a href="#portfolio" onClick={()=>setIsShowing(prev=>!prev)}>Portfolio</a></li>
                    <li><a href="#services" onClick={()=>setIsShowing(prev=>!prev)}>Services</a></li>
                    <li><a href="#testimonials" onClick={()=>setIsShowing(prev=>!prev)}>Testimonials</a></li>
                </ul>
            </div>
            <div className="toggle__icons" onClick={()=>setIsShowing(prev=>!prev)}>
                {isShowing? <IoCloseSharp /> : <GiHamburgerMenu />}                
                
            </div>
        </div>        
    </nav>   
         
    
    )
}

export default Nav
