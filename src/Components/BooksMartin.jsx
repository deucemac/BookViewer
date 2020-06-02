import React, { Component } from 'react'
import axios from 'axios'



export default class BooksMartin extends Component {
  state = {
    books: []
  }


  componentDidMount = async () => {
    const key = process.env.REACT_APP_TOKEN
    let books = await axios(`https://www.googleapis.com/books/v1/volumes?q=songs+of+fire+ice+inauthor:martin&key%3D=${key}`)
    books = books.data.items

    this.setState({
      books: books
    })
    console.log(books)
  }




  render() {
    let bookList = this.state.books.filter((book) => {
      return book.volumeInfo.title === 'A Feast for Crows' || book.volumeInfo.title === 'A Storm of Swords' || book.volumeInfo.title === 'A Clash of Kings' || book.volumeInfo.title === 'A Game of Thrones' 
       
    })
    console.log(bookList)
    let finalList = bookList.map(book =>
      <div>
        <h2>{book.volumeInfo.title}</h2>
        <img src={book.volumeInfo.imageLinks.thumbnail} />
      </div>)
    return (
      <div>
        <div>{finalList}</div>
      </div>
    )

  }
}

