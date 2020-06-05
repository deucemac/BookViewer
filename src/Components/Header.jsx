import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    <div className='header'>
      <header>
        <Link to='/'><h1 className='header-writing'>Find a Book</h1></Link>
        <div className='icons'>
          <a href="#" class="fa fa-facebook"></a>
          <a href="#" class="fa fa-google"></a>
        </div>
      </header>
    </div>
  )
}
