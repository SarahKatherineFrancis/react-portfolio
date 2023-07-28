import React from 'react'
import "./portfolio.css"
import IMG1 from "../../assets/portfolio-1.png"
import IMG2 from "../../assets/portfolio-2.png"
import IMG3 from "../../assets/portfolio-3.jpg"
import IMG4 from "../../assets/portfolio-4.png"
import IMG5 from "../../assets/portfolio-5.png"
import IMG6 from "../../assets/portfolio-6.png"

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Elite Properties Group",
    github: "https://github.com/SarahKatherineFrancis/elite-properties-group",
    demo: "https://warm-capybara-6049ad.netlify.app/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Netflix Landing Page Clone",
    github: "https://github.com/SarahKatherineFrancis/netflix-clone",
    demo: "https://cosmic-brigadeiros-5d6374.netlify.app/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Journo Travel App",
    github: "https://github.com/SarahKatherineFrancis/journo",
    demo: "https://www.travel-journo.me/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Furr Petsitting App",
    github: "https://github.com/SarahKatherineFrancis/furr",
    demo: "https://furr.herokuapp.com/"
  },
  {
    id: 5,
    image: IMG5,
    title: "Lumo Dictionary App",
    github: "https://github.com/SarahKatherineFrancis/react-dictionary-app",
    demo: "https://angry-booth-422a13.netlify.app/"
  },
  {
    id: 6,
    image: IMG6,
    title: "Weather App",
    github: "https://github.com/SarahKatherineFrancis/react-weather-app",
    demo: "https://unruffled-agnesi-0b02b9.netlify.app/"
  }
]

function Portfolio() {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key= {id} className="portfolio__item">
              <div className="portfolio__item-img">
                <img src={image} alt={title} />
              </div>

              <h3>{title}</h3>

              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>
                  Github
                </a>

                <a href={demo} className='btn btn-primary' target='_blank'>
                  Live Demo
                </a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
