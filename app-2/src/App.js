import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      myArray: ['Ice Cream', 'Peanut Butter', 'Marshmallows','Chocolate']
    }
  }


  render() {
    let listedArray = this.state.myArray.map((element) => <h2>{element}</h2>)

    return (
      <div className="App">

      {listedArray}
  
      </div>
    );
  }
}

export default App;
