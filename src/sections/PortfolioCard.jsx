import React from 'react'
import cardImage from '../assets/lawn3.jpg'

const PortfolioCard = (props) => {
  return (

        <div className="portfolio__card">
            <figure className="card__image">
                 <img src={props.image} alt="image goes here" />
                <figcaption className='caption__text'>{props.caption}</figcaption>                 
            </figure>
            <h4>{props.caption}</h4> 
            <div className="card__buttons">                 
                 <a href={props.demo} className='live btn' target="_blank">GitHub</a>
                 <a href={props.github} className='github btn' target="_blank">Demo</a>
            </div>                       
        </div>     
    
  )
}

export default PortfolioCard
