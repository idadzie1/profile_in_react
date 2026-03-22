import React from 'react'

const AboutCard = (props) => {
  return (

        <div className="experience">
            <div className="icon">{<props.icon />}</div>
            <div className="experience__heading">
              <h5>{props.desc}</h5>
            </div>
            <p className='small__text'>{props.years}</p>
        </div>
    
  )
}

export default AboutCard
