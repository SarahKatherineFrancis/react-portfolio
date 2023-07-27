import React from 'react'
import "./services.css"
import {BiCheck} from "react-icons/bi"

function Services() {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide basic design concepts</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create wireframes and prototypes</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Design user-friendly interfaces</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Ensure consistent and intuitive user experiences</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Conduct user research and usability testing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Build responsive and modern websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop interactive web applications</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Integrate with back-end services</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Optimize for performance and SEO</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Implement secure authentication and authorization</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Provide ongoing maintenance and support</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Create engaging and SEO-friendly blog posts</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Develop multimedia content (videos, infographics)</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Write compelling copy for websites</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Produce social media content</p>
            </li>

            <li>
              <BiCheck className='service__list-icon'/>
              <p>Craft email marketing campaigns</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
