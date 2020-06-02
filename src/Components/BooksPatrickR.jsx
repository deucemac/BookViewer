import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from "react-router-dom";
import BookDetails from './BookDetails'

export default class BooksPatrickR extends Component {
  state = {
    books: []
  }
  
  async componentDidMount() {
    const key = 'AIzaSyBK7wCWGpeeKHMxJA-2Y_OEigeDTqfpL-o'
    let books = await axios(`https://www.googleapis.com/books/v1/volumes?q=patick+rothfuss&key%3D=${key}`)
    books = books.data.items

    this.setState({
      books: books
    })
    console.log(books)
  }
  
  
  render() {
    let bookList = this.state.books.map((book, index) => { 
      if (index < 2)
        return <div key={index}>
          <Link to={`/book/${book.id}`}><h2>{book.volumeInfo.title}</h2>
          <img src={book.volumeInfo.imageLinks.thumbnail} /></Link>
        </div>
    })
    return (
      <div>
        <Route>{bookList}</Route>
        
      </div>
    )
  }
}
