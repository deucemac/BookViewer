import React from 'react'

export default function PublisherCollection(props) {
  return (
    
    <div>
      {props.books.map(book => {
        return (
          <>
            <h1>{book.volumeInfo.title}</h1>
            <img src={book.volumeInfo.imageLinks.thumbnail}></img>
          </>
      ) })}
    </div>
  )
}
