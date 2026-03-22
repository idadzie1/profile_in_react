import React from 'react'
import '../../general.css';
import './portfolio.css';
import PortfolioCard from './PortfolioCard';
import portfolioCards from '../dataFiles/portfolioData';

const Portfolio = () => {
  return (

    <section id='portfolio'>
        <h4>Explore My</h4>
        <h2>Portfolio</h2>
        <div className="portfolio__container">
          <div className="portfolio__cards">

            { portfolioCards.map(item =>{
              return <PortfolioCard key={item.id} 
              image={item.image} 
              caption={item.caption} 
              demo={item.url} 
              github={item.gitHub} />
            })}            

          </div>
        </div>
    </section>

  )
}

export default Portfolio
