import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from "react-router-dom";

export default class BooksTolkien extends Component {
  state = {
    books: []
  }

  componentDidMount = async () => {
    let key = process.env.REACT_APP_TOKEN
    let books = await axios(`https://www.googleapis.com/books/v1/volumes?q=ring+inauthor:tolkien&key%3D=${key}`)
    books = books.data.items

    this.setState({
      books: books
    })
    console.log(books)
  }

 


  render() {
    let bookList = this.state.books.filter((book, index) => {
      return book.volumeInfo.title === 'The Fellowship of the Ring' || book.volumeInfo.title === 'The Two Towers' || book.volumeInfo.title === 'The Return of the King'
    })
    console.log(bookList.splice(1, 1))
    console.log(bookList)
    let filterList = bookList.map((item, index) =>
      <div key={index}>
        <Link><h2>{item.volumeInfo.title}</h2>
        <img src={item.volumeInfo.imageLinks.thumbnail}/></Link>
      </div>)
    return (
      <div>
        <div>{filterList}</div>
      </div>
    )

  }
}
