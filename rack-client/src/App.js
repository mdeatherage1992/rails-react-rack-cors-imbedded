import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super();
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    const that = this
    fetch('http://localhost:3001')
    .then((res) => res.json())
    .then((mes) => that.setState({data: mes}))
  }

  render(){
    return (
      <div>
      <table>
      <thead>
      <tr>
      <th>ID</th>
      <th>Author</th>
      <th>Body</th>
      </tr>
      </thead>
      <tbody>
      {this.state.data.map(home =>
      <tr>
      <td>{home.id}</td>
      <td>{home.author}</td>
      <td>{home.body}</td>
      </tr>
      )}
      </tbody>
      </table>
      </div>

  )}

}

export default App;
