import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state = {
        toDoList: ['mop','sweep','walk the dog','homework','make dinner'],
        userInput: ''
       
      }
    }
    updateInput(value){
      this.setState({userInput: value})
    }

    

  render() {
      var filteredArray = this.state.toDoList.filter((element) => {
        return element.includes(this.state.userInput)
      })
      var listArray = filteredArray.map( (e) => <h2>{e}</h2>)
    
      return (
        <div className="App">
          <input onChange={ (e) => this.updateInput(e.target.value)}></input>
          <div>{listArray}</div>
        </div>
        
    );
  }
}

export default App;
