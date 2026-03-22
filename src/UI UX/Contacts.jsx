import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import './contact.css'

const Contacts = () => {
  return (
    <div className='contacts'>        
        <a href="#" className='facebook social__btn'><FaSquareFacebook /></a>        
        <a href="#" className='twitter social__btn'><FaXTwitter /></a>        
        <a href="#" className='whatsapp social__btn'><IoLogoWhatsapp /></a>        
        <a href="#" className='messanger social__btn'><FaFacebookMessenger /></a>        
        <a href="#" className='linked social__btn'><FaLinkedin /></a>       
    </div>
  )
}

export default Contacts
