import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(){
      super()
      this.state = {
        toDoList: ['mop','sweep','walk the dog','homework','make dinner'],
        text: 'la'
      }
    }

    updateInput(val){
      this.setState({ userInput: val})
    }


    solveProblem(value){
      var arr = this.state.toDoList
      for( var i = 0; i < arr.length; i++){
        if(arr[i].includes(value) ){
          return arr.push(arr[i])
        }
      }
      this.setState({toDoList: arr})
    }


  render() {
    let filteredArray = this.state.toDoList.filter( (e) => e === this.state.text)
    let listedArray = filteredArray.map((element) => <h2>{element}</h2>)
    
      return (
        <div className="App">
          <input></input>
          <div>{listedArray}</div>
        </div>
        
    );
  }
}

export default App;
