import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import BooksPatrickR from './Components/BooksPatrickR'
import BooksTolkien from './Components/BooksTolkien'
import BooksMartin from './Components/BooksMartin'
import Input from './Components/Input'
import axios from 'axios'



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      searchedBooks: []
    }
  }


  handleChange = async (e) => {

    if (e.target.value.length > 2) {
      let key = process.env.REACT_APP_TOKEN
      let books = await axios(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&key%3D=${key}`)
      console.log(books.data.items)
      // if (books.data.items) {
      this.setState({
        searchedBooks: books.data.items
      })
     
    } else if (e.target.value.length < 2) {
      this.setState({
        searchedBooks: []
      })
    }
  }

   






  render() {


    let searchedResults = this.state.searchedBooks !== [] ? this.state.searchedBooks.map((book, index) => {
      return <div key={index}>
        <h2>{book.volumeInfo.title}</h2>
        {book.volumeInfo.imageLinks ?
          <img src={book.volumeInfo.imageLinks.thumbnail} /> : <h3>Waiting</h3>
        }
      </div> 
    }) : ''

    return (
      <div>
        <Input handleChange={this.handleChange} />

        {searchedResults}
        <BooksPatrickR />
        <BooksTolkien />
        <BooksMartin />
      </div>
    )

  }
}







