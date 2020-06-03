import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Header from './Components/Header'
import Input from './Components/Input'
import axios from 'axios'
import PublisherCollection from './Components/PublisherCollection'
import BookDetails from './Components/BookDetails';
import { Link, Route } from 'react-router-dom';



export default class App extends Component {
  constructor() {
    super()

    this.state = {
      searchedBooks: [],
      books: []
    }
  }

  async componentDidMount() {
    const key = process.env.REACT_APP_TOKEN
    let booksPR = await axios(`https://www.googleapis.com/books/v1/volumes?q=patick+rothfuss&key%3D=${key}`)
    booksPR = booksPR.data.items
    booksPR.splice(2, 10)

    let booksT = await axios(`https://www.googleapis.com/books/v1/volumes?q=ring+inauthor:tolkien&key%3D=${key}`)
    booksT = booksT.data.items
    booksT.splice(0, 1)
    console.log(booksT)
    booksT.splice(1, 5)
    booksT.splice(0, 1)

    let booksGM = await axios(`https://www.googleapis.com/books/v1/volumes?q=songs+of+fire+ice+inauthor:martin&key%3D=${key}`)
    booksGM = booksGM.data.items
    booksGM.splice(0, 1)
    console.log(booksGM)
    booksGM.splice(4, 4)


    this.setState({
      books: [...booksPR, ...booksT, ...booksGM]
    })
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


    let searchedResults = this.state.searchedBooks !== [] ? this.state.searchedBooks.map((book, index) => {
      return <div key={index}>
        <Link to=''><h2>{book.volumeInfo.title}</h2>
        {book.volumeInfo.imageLinks ?
          <img src={book.volumeInfo.imageLinks.thumbnail} /> : <h3>Waiting</h3>
        }</Link>
      </div>
    }) : ''

    return (
      <div>
        <Header />
        <Input handleChange={this.handleChange} />

        {searchedResults}
        <Route path='/' exact>
          <PublisherCollection books={this.state.books} />
        </Route>

        <Route path='/book/:bookId'>
          <BookDetails bookInfo={this.state.books} />
        </Route>

      </div>
    )

  }
}



