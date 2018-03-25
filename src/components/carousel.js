import React from "react";
import { pictures } from "../imports/imports.js";
import CarouselList from "./carousel_list.js";
import "../css/carousel.css";
import $ from 'jquery';

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
    if (e.target.attributes.value.value) {
      $(".checked").removeClass("checked").addClass("radio");
        $(e.target).addClass("checked");
      let nextPage = parseInt(e.target.attributes.value.value);
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

            <div
              value="0"
              className={this.state.currentPage === 0 ? "radio checked" : "radio"}
            ></div>

            <div
              value="1"
              className={this.state.currentPage === 1 ? "radio checked" : "radio"}
            ></div>
            <div
              value="2"
              className={this.state.currentPage === 2 ? "radio checked" : "radio"}
            ></div>
            <div
              value="3"
              className={this.state.currentPage === 3 ? "radio checked" : "radio"}
            ></div>        </ul>
      </div>
    );
  }
}

export default Carousel;
