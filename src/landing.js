import React from 'react'
import headShot from './images/5512.jpeg'

export default function Landing () {
  return (
    <div id='landing'>
      <div>
        <h1>Alex Kist</h1>
        <h2>Web Developer</h2>
      </div>
      <img src={headShot} />
    </div>
  )
}
