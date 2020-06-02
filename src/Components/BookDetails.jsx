import React from 'react'
import { withRouter } from 'react-router-dom'

function BookDetails(props) {
  const index = props.match.params.bookId
   console.log(index)
  const selectedBook = props.bookInfo.find(book => {
    return book.id == index
  })
  console.log(selectedBook)
  return (
    <>
      {selectedBook &&
        <div>
        <h1>{selectedBook.volumeInfo.title}</h1>
        <h1>hello</h1>
      </div>}
    </>
  )
}



export default withRouter(BookDetails)