import React, { Component } from 'react';
import './App.css';
import Picture from "./images/prod1/1.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={Picture} alt={""} />
      </div>
    );
  }
}

export default App;
