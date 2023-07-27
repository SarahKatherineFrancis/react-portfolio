import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.png"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"
import IMG6 from "../../assets/portfolio-6.png"

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="Elite Properties Group" />
          </div>

          <h3>Elite Properties Group</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/elite-properties-group"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://warm-capybara-6049ad.netlify.app/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="Elite Properties Group" />
          </div>

          <h3>Netflix Landing Page Clone</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/netflix-clone"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://cosmic-brigadeiros-5d6374.netlify.app/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG3} alt="Elite Properties Group" />
          </div>

          <h3>Journo Travel App</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/journo"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://www.travel-journo.me/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG4} alt="Elite Properties Group" />
          </div>

          <h3>Furr Petsitting App</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/furr"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://furr.herokuapp.com/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG5} alt="Elite Properties Group" />
          </div>

          <h3>Lumo Dictionary App</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/react-dictionary-app"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://angry-booth-422a13.netlify.app/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG6} alt="Elite Properties Group" />
          </div>

          <h3>Weather App</h3>

          <a
          href="https://github.com/SarahKatherineFrancis/react-weather-app"
          className='btn' target='_blank'>
            Github
          </a>

          <a href="https://unruffled-agnesi-0b02b9.netlify.app/"
          className='btn btn-primary' target='_blank'>
            Live Demo
          </a>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
