import React from 'react'
import '../../general.css';
import './about.css';
import portrait from '../assets/portrait1.png';
import cards from '../dataFiles/aboutcard'

import AboutCard from './AboutCard';



const About = () => {
  return (
    <section id='about'>
      <div className="CTA__call">
        <p>Get to Know</p>
        <p className='text__font'>About Me</p>          
      </div>

      <div className="portrait__experience">
        <div className="portrait">          
            <img src={portrait} alt="portrait" />      
          
        </div>

        <div className="work">          
          <div className="about__cards"> 

            {cards.map(card=>
              { return <AboutCard key={card.id} icon={card.icon} desc={card.description} years={card.years}/>
                
              }
            )}
          </div>

          <div className="about__me">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id hic saepe dicta reprehenderit fugiat ex? Minima ratione, beatae unde ad at, asperiores sit eveniet harum labore nemo optio, sequi autem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quasi et debitis possimus voluptatem fugit voluptas dolor dignissimos! Consequatur pariatur, soluta vel praesentium mollitia earum repudiandae similique eius est labore.</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, reiciendis necessitatibus. Fugit voluptates rerum dolorem quo a explicabo quae quibusdam quia quaerat consectetur. Non molestias minus magni saepe dignissimos asperiores!</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nemo eius deleniti similique consequuntur, est natus fugit aut quis. Aperiam voluptatibus illo magnam fugiat tempora possimus sed libero deleniti corrupti.</p>

          </div> 

          <div className="btn">Let's Talk</div>                                  

        </div>
      </div>
    </section>
   
  )
}

export default About
