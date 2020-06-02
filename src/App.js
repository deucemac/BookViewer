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
    let searchedResults = this.state.searchedBooks.map((book, index) => {
      return <div key={index}>{book.volumeInfo.title}</div>
      
    })
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
 





 
