import React from 'react'
import Phone from './images/phone.png'
import htmlLogo from './images/HTML5.svg'
import cssLogo from './images/CSS3.svg'
import jsLogo from './images/JavaScript.svg'

export default function Portfolio () {
  const title = "Projects I've Built"
  const bookshelf = '"bookshelf"'

  return (
    <div id='portfolio'>
        <h1>{title}</h1>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>Tic-Tac-Toe</h2>
              <p>Allows users to choose 2-player and AI modes. Players mark spaces on the grid until a player wins. Score is kept and players can enter their own names.</p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>To-Do App</h2>
              <p>Allows users to log tasks toward projects. Includes log-in and collaborative features (i.e. invite others to a project & assign tasks to them).</p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>Library</h2>
              <p>Allows users to add books to their {bookshelf}, including books they have either read or wish to read. Entries can be deleted or sorted as desired. </p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>Restaurant</h2>
              <p>A mock restaurant page for a bar & grill themed around rock & roll.</p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>Etch A Sketch</h2>
              <p>Allows users to draw with the cursor and manually change the size of the grid. Users can also change the color they wish to draw with, and can reset the board when desired.</p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
        <div className='project'>
          <div className='project-details'>
            <img src={Phone} />
            <div>
              <h2>Rock Paper Scissors</h2>
              <p>Players take turns in a simple game of rock-paper-scissors until one player wins 5 rounds, upon which the game resets.</p>
            </div>
          </div>
          <div className='project-tech-stack'>
            <h3>Tech Stack</h3>
            <div className='project-tech'>
                <img className='project-tech' src={htmlLogo} />
                <img className='project-tech' src={cssLogo} />
                <img className='project-tech' src={jsLogo} />
            </div>
          </div>
        </div>
    </div>
  )
}
