import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      books: []
    }
  }
  async componentDidMount() {
    const key = 'AIzaSyBK7wCWGpeeKHMxJA-2Y_OEigeDTqfpL-o'
    const books = await axios(`https://www.googleapis.com/books/v1/volumes?q=patick+rothfuss&key%3D=${key}`)
    console.log(books)
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
