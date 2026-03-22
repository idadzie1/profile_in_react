import React from 'react'
import '../../general.css';
import './testimonials.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import ReactCountryFlag from "react-country-flag";
import testimonialsData from '../dataFiles/testimonials.js';


const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h4>Check Out</h4>
        <h2>Testimonials</h2>
        <div className="testimonials__container">
          <div className="testimonials__cards">
            <Swiper spaceBetween={10}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    
            >
            { testimonialsData.map(item =>{
              return <SwiperSlide id={item.id}>
                  <div className="testimonial__card">
                    <div className="card__info">
                      <div className="profile__pic">
                        <img src={item.profilepic} alt="profile pic" />
                      </div>
                      <h5>{item.name}</h5>
                        <ReactCountryFlag
                          countryCode={item.flag}
                          svg
                          style={{ width: "2em", height: "2em" }}
                        />                      
                    </div> 
                    <p>{item.testimonial}</p>
                    <h5 className='location__text'>{`...from ${item.location}`} </h5>         
                  </div>                
                </SwiperSlide>
              })}


            </Swiper>            
          </div>          
        </div>
    </section>
   
  )
}

export default Testimonials


