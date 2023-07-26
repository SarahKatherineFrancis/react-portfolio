import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {BsEnvelopeAtFill} from "react-icons/bs"

function HeaderSocials() {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/sarah-kfrancis/" target='_blank'>
        <BsLinkedin />
      </a>
      <a href="https://github.com/SarahKatherineFrancis" target='_blank'>
        <FaGithub />
      </a>
      <a href="#contact" target='_blank'>
        <BsEnvelopeAtFill />
      </a>
    </div>
  )
}

export default HeaderSocials
