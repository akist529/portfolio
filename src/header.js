import React from 'react'
import aboutLogo from './images/about.png'
// import aboutActive from './images/about_active.png'
import portLogo from './images/portfolio.png'
// import portActive from './images/portfolio_active.png'
import contactLogo from './images/contact.png'
// import contactActive from './images/contact_active.png'
import resumeLogo from './images/resume.png'
// import resumeActive from './images/resume_active.png'
import gitLogo from './images/github.png'
import linLogo from './images/linkedin.png'
import './partials/_animations.scss'

export default function Header () {
  return (
    <header>
        <nav>
          <ul id='header-nav'>
            <li>
              <button id='btn-about'>
                <img id='aboutLogo' alt='aboutLogo' src={aboutLogo} />
                <p>About</p>
              </button>
            </li>
            <li>
              <button id='btn-portfolio'>
                <img id='portLogo' alt='portLogo' src={portLogo} />
                <p>Portfolio</p>
              </button>
            </li>
            <li>
              <button id='btn-contact'>
                <img id='contactLogo' alt='contactLogo' src={contactLogo} />
                <p>Contact</p>
              </button>
            </li>
          </ul>
        </nav>
        <div>
          <ul id='header-links'>
            <li>
              <button id='btn-github'>
                <p>GitHub</p>
                <img id='gitLogo' alt='gitLogo' src={gitLogo} />
              </button>
            </li>
            <li>
              <button id='btn-linkedin'>
                <p>LinkedIn</p>
                <img id='linLogo' alt='linLogo' src={linLogo} />
              </button>
            </li>
            <li>
              <button id='btn-resume'>
                <p>Resume</p>
                <img id='resumeLogo' alt='resumeLogo' src={resumeLogo} />
              </button>
            </li>
          </ul>
        </div>
    </header>
  )
}
