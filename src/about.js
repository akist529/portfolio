import React from 'react'
import htmlLogo from './images/HTML5.svg'
import cssLogo from './images/CSS3.svg'
import jsLogo from './images/JavaScript.svg'
import reactLogo from './images/React.svg'
import bootLogo from './images/Bootstrap.svg'
import lintLogo from './images/ESLint.svg'
import sassLogo from './images/Sass.svg'
import gitLogo from './images/Git.svg'
import codeLogo from './images/vscode.svg'
import queryLogo from './images/JQuery.svg'
import packLogo from './images/webpack.svg'
import mongoLogo from './images/mongodb.svg'

export default function About () {
  const greeting = "Hi, I'm Alex!"

  return (
    <div id='about'>
      <div>
        <h1>{greeting}</h1>
        <div id='summary'>
          <p>I am a self-taught web developer currently working as an industrial engineer in the Chicago area.</p>
          <p>Outside of code, I enjoy weightlifting, brazilian jiu-jitsu, hobbyist game dev and reading.</p>
          <p>My end-goal is to work with a team of passionate developers where I can grow as an individual and stay up-to-date with the latest technologies in the world of web applications.</p>
        </div>
      </div>
        <h2>My Proficiencies</h2>
        <div className='skillsets'>
          <img id='htmlLogo' src={htmlLogo} />
          <p>I strive to make my HTML code as semantic as possible, focusing on accessibility and readability.</p>
          <img id='cssLogo' src={cssLogo} />
          <p>Every day I find new ways to keep my CSS organized with the help of preprocessors such as SASS. I regularly use CSS Flexbox and Grid layouts for all of my projects.</p>
          <img id='jsLogo' src={jsLogo} />
          <p>I have a strong grasp of JavaScript ES6 syntax and aim to keep code modular wherever possible.</p>
          <img id='reactLogo' src={reactLogo} />
          <p>I have hands-on experience working with React, utilizing its vast array of third-party libraries with NPM.</p>
        </div>
        <h2>Other Skills</h2>
        <div id='other-skills'>
          <img src={bootLogo} title='Bootstrap' />
          <img src={lintLogo} title='ESLint' />
          <img src={sassLogo} title='Sass' />
          <img src={gitLogo} title='Git' />
          <img src={codeLogo} title='VS Code' />
          <img src={queryLogo} title='jQuery' />
          <img src={packLogo} title='Webpack' />
          <img src={mongoLogo} title='MongoDB' />
        </div>
    </div>
  )
}
