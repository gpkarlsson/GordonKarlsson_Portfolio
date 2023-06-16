import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <>
    <div>Navbar</div>
    <ul>
      <li><Link to="/dashboard">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/resume">Resume</Link></li>
    </ul>
    </>
  )
}
