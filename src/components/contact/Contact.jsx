import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {AiOutlineInstagram} from "react-icons/ai"
import {BsWhatsapp} from "react-icons/bs"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>dev@sarahcodes.org</h5>
            <a href="mailto:dev@sarahcodes.org" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <AiOutlineInstagram className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>_sarah_codes_</h5>
            <a href="https://ig.me/m/_sarah_codes_" target='_blank'>Send a message</a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+27 645475782</h5>
            <a href="https://api.whatsapp.com/send?phone=+27645475782" target='_blank'>Send a message</a>
          </article>
        </div>

        <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
