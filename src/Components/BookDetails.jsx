import React from 'react'
import Iframe from 'react-iframe'
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
        <Iframe url={`${selectedBook.volumeInfo.previewLink}&output=embed`}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
        </div>}
      
      
        
      
    
      {selectedSearchedBook &&
        <div className='search-result' >
        <h1>{selectedSearchedBook.volumeInfo.title}</h1>
        <img src={selectedSearchedBook.volumeInfo.imageLinks.thumbnail} />
    
        <Iframe url={`${selectedSearchedBook.volumeInfo.previewLink}&output=embed`}
        width="450px"
        height="450px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>
      
      </div>
    }

    

    </>
  )
}



export default withRouter(BookDetails)