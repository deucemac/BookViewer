import React from 'react'
import { withRouter } from 'react-router-dom'

function BookDetails(props) {
  const bookId = props.match.params.bookId
   console.log(bookId)
  const selectedBook = props.bookInfo.find(book => {
    return book.id === bookId
  })
  const selectedSearchedBook = props.searchedBooks.find(book => {
    return book.id === bookId
  })
  // console.log(selectedBook)
  
  return (
    <>
      
      {selectedBook &&
        <div>
        <h1>{selectedBook.volumeInfo.title}</h1>
        <img src={selectedBook.volumeInfo.imageLinks.thumbnail} />
        </div>}
        
      
    
      {selectedSearchedBook &&
        <div>
        <h1>{selectedSearchedBook.volumeInfo.title}</h1>
        <img src={selectedSearchedBook.volumeInfo.imageLinks.thumbnail} />
      </div>
      }

    </>
  )
}



export default withRouter(BookDetails)