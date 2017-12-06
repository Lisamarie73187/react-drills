import React, { Component } from 'react';
import './App.css';

import ImageComponent from './ImageComponent.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageComponent myImage={ 'https://http.cat/418' }/>
      </div>
    );
  }
}

export default App;
