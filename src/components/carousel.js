import React from "react";
import { pictures } from "../imports/imports.js";
import CarouselList from "./carousel_list.js";
import "../css/carousel.css";

class Carousel extends React.Component {
  constructor() {
    super();
    this.pics = pictures;
    this.state = {
      currentPage: 0
    };
    this.nextPhotos = this.nextPhotos.bind(this);
    this.lastPhotos = this.lastPhotos.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
  }

  setPhoto(e) {
    if (e.target.value) {
      let nextPage = parseInt(e.target.value);
      this.setState({ currentPage: nextPage });
    }
  }

  nextPhotos() {
    this.setState({
      currentPage: (this.state.currentPage + 1) % this.pics.length
    });
  }

  lastPhotos() {
    let lastPhoto = this.state.currentPage - 1;
    if (lastPhoto < 0) {
      this.setState({ currentPage: this.pics.length - 1 });
    } else {
      this.setState({
        currentPage: (this.state.currentPage - 1) % this.pics.length
      });
    }
  }

  render() {
    return (
      <div>
        <div className="photo-scroll-container">
          <div className="scroll-arrow" onClick={this.lastPhotos}>
            <i className="far fa fa-angle-left angles" />
          </div>
          <CarouselList pics={this.pics[this.state.currentPage]} />
          <div className="scroll-arrow" onClick={this.nextPhotos}>
            <i className="far fa fa-angle-right angles" />
          </div>
        </div>
        <ul className="radio-container" onClick={this.setPhoto}>
          <input
            type="radio"
            name="photo-select"
            value="0"
            checked={this.state.currentPage === 0 ? "checked" : ""}
          />
          <input
            type="radio"
            name="photo-select"
            value="1"
            checked={this.state.currentPage === 1 ? "checked" : ""}
          />
          <input
            type="radio"
            name="photo-select"
            value="2"
            checked={this.state.currentPage === 2 ? "checked" : ""}
          />
          <input
            type="radio"
            name="photo-select"
            value="3"
            checked={this.state.currentPage === 3 ? "checked" : ""}
          />
        </ul>
      </div>
    );
  }
}

export default Carousel;
