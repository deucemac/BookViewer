import React, { Component } from 'react'

export default class Input extends Component {
  
  
  
  render() {
    return (
      <div>
        <input type='text' placeholder='Search' onChange={this.props.handleChange} /><button>Go!</button>
      </div>
    )
  }
}
