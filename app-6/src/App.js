import React, { Component } from 'react';
import './App.css';

import Todolist from './Todolist.js'

class App extends Component {
  constructor(){
    super();

    this.state = {
      toDos: [],
      userInput: ''
    };

    this.updateList = this.updateList.bind(this);
  }
handleChange(val){
  this.setState({ userInput: val });
}

updateList(){
  this.setState({
    toDos: [...this.state.toDos, this.state.userInput ],
    userInput: ''
  });
}


  render() {
    let list = this.state.toDos.map( (e,i) => {
      return (
        <Todolist key={ i } task = { e }/>
      )

    })


    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input value = {this.state.userInput} onChange={ (e) => this.handleChange( e.target.value )}></input>
        <button onClick={ this.updateList }>Add</button>
        
        { list }
      </div>
    );
  }
}

export default App;
