import React from 'react'
import {Link} from 'react-router-dom'

export default function PublisherCollection(props) {
  return (
    
    <div>
      {props.books.map((book, index) => {
        return (
          <>
            <Link to={`book/${book.id}`}><h1>{book.volumeInfo.title}</h1>
            <img src={book.volumeInfo.imageLinks.thumbnail}></img></Link>
          </>
      ) })}
    </div>
  )
}


