import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='header'>
      <header>
        <Link to='/'><h1>Find a Book</h1></Link>
      </header>
    </div>
  )
}
