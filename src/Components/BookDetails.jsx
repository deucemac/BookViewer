import React from 'react'
import { withRouter } from 'react-router-dom'

function BookDetails(props) {
  const bookId = props.match.params.bookId
   console.log(bookId)
  const selectedBook = props.bookInfo.find(book => {
    return book.id == bookId
  })
  console.log(selectedBook)
  return (
    <>
      {selectedBook &&
        <div>
        <h1>{selectedBook.volumeInfo.title}</h1>
      </div>}
    </>
  )
}



export default withRouter(BookDetails)