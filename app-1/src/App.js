import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor (){
    super()
    this.state = {
      inputText: ''
    }
  }
  updateInputBox(val){
    this.setState({
      inputText: val
    })
  }


  render() {
    return (
      <div className="App">
          <input onChange = { (e) => this.updateInputBox(e.target.value) }/>
          <h1>{this.state.inputText}</h1>
      </div>
    );
  }
}

export default App;
