import React from "react";
import { pictures } from "../imports/imports.js";
import CarouselList from "./carousel_list.js";
import "../css/carousel.css";
import $ from "jquery";

class Carousel extends React.Component {
  constructor() {
    super();
    this.pics = pictures;
    this.state = {
      currentPage: 0,
      nextPage: 0
    };
    this.currentPage = 0;
    this.nextPhotos = this.nextPhotos.bind(this);
    this.lastPhotos = this.lastPhotos.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
    this.changeImage = this.changeImage.bind(this);
  }

  setPhoto(e) {
    if (e.target.attributes.value) {
      $(".checked")
        .removeClass("checked")
        .addClass("radio");
      $(e.target).addClass("checked");
      let nextPage = parseInt(e.target.attributes.value.value);
      this.setState({ currentPage: nextPage });
    }
  }

  changeImage() {
    $(".photo-ul").css("left", `${-1218 * this.currentPage}px`);
  }

  nextPhotos() {
    this.setState({nextPage: (this.state.currentPage + 1) % this.pics.length });
    $(".nextPage").addClass("slideInRight");
    $(".currentPage").addClass("slideOutRight");
    setTimeout(() => {
      this.setState({
        currentPage: this.state.nextPage
      });
      $(".nextPage").removeClass("slideInRight");
      $(".currentPage").removeClass("slideOutRight");

    }, 500);

  }

  lastPhotos() {
    // debugger
    let lastPhoto = this.state.currentPage - 1;
    if (lastPhoto < 0) {
      this.setState({ nextPage: this.pics.length - 1 });
    } else {
      this.setState({
        nextPage: (this.state.currentPage - 1) % this.pics.length
      });
    }
    $(".nextPage").addClass("slideInLeft");
    $(".currentPage").addClass("slideOutLeft");
    setTimeout(() => {
      this.setState({
        currentPage: this.state.nextPage
      });
      $(".nextPage").removeClass("slideInLeft");
      $(".currentPage").removeClass("slideOutLeft");

    }, 500);

    // this.currentPage-- ;
    // if(this.currentPage < 0) {
    //   this.currentPage = this.pics.length - 1;
    // }
    // let lastPhoto = this.state.currentPage - 1;
    // if (lastPhoto < 0) {
    //   this.setState({ currentPage: this.pics.length - 1 });
    // } else {
    //   this.setState({
    //     currentPage: (this.state.currentPage - 1) % this.pics.length
    //   });
    // }
    // this.changeImage();
  }

  render() {
    return (
      <div>
        <div className="photo-scroll-container">
          <div className="scroll-arrow" onClick={this.lastPhotos}>
            <i className="far fa fa-angle-left angles" />
          </div>
          <div className="all-images">

          <CarouselList pics={this.pics[this.state.currentPage]} classy="carousel currentPage" />
          <CarouselList pics={this.pics[this.state.nextPage]} classy="carousel nextPage"/>

          </div>
          <div className="scroll-arrow" onClick={this.nextPhotos}>
            <i className="far fa fa-angle-right angles" />
          </div>
        </div>
        <div className="radio-containter-master">
          <ul className="radio-container" onClick={this.setPhoto}>
            <div
              value="0"
              className={
                this.state.nextPage === 0 ? "radio checked" : "radio"
              }
            />

            <div
              value="1"
              className={
                this.state.nextPage === 1 ? "radio checked" : "radio"
              }
            />
            <div
              value="2"
              className={
                this.state.nextPage === 2 ? "radio checked" : "radio"
              }
            />
            <div
              value="3"
              className={
                this.state.nextPage === 3 ? "radio checked" : "radio"
              }
            />
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
