import React from 'react'
import {Link} from 'react-router-dom'

export default function PublisherCollection(props) {
  return (
    
    <div className='parent-publisher'>
      {props.books && props.books.map((book, index) => {
        return (
          <div className='publisher'>
            <Link to={`book/${book.id}`}><h1>{book.volumeInfo.title}</h1>
            <img src={book.volumeInfo.imageLinks.thumbnail} /></Link>
          </div>
      ) })}
    </div>
  )
}


