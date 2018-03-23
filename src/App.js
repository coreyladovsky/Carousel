import React, { Component } from "react";
import "./css/App.css";
import Carousel from "./components/carousel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">COREY LADOVSKY SPRING 2018</div>
        < Carousel />
      </div>
    );
  }
}

export default App;
