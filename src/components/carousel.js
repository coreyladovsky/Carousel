import React from "react";
import { pictures } from "../imports/imports.js";
import CarouselList from "./carousel_list.js";
import "../css/carousel.css";
import $ from "jquery";
import Swipeable from "react-swipeable";

class Carousel extends React.Component {
  constructor() {
    super();
    this.pics = pictures;
    this.state = {
      currentPage: 0,
      nextPage: 0
    };
    this.nextPhotos = this.nextPhotos.bind(this);
    this.lastPhotos = this.lastPhotos.bind(this);
    this.setPhoto = this.setPhoto.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.setDots = this.setDots.bind(this);
  }

  componentDidMount() {
    $("html").on("keydown", e => {
      if (e.originalEvent.key === "ArrowRight") {
        this.nextPhotos();
      } else if (e.originalEvent.key === "ArrowLeft") {
        this.lastPhotos();
      }
    });
  }

  setPhoto(e) {
    if (e.target.attributes.value) {
      $(".checked")
        .removeClass("checked")
        .addClass("radio");
      $(e.target).addClass("checked");
      let upcomming = parseInt(e.target.attributes.value.value, 10);
      this.setState({ nextPage: upcomming });
      if (upcomming > this.state.currentPage) {
        this.changeImage("slideInRight", "slideOutRight");
      } else {
        this.changeImage("slideInLeft", "slideOutLeft");
      }
    }
  }

  setDots() {
    return this.pics.map((pic, idx) => {
      return(
        <div
          key={idx}
          value={idx}
          className={this.state.nextPage === idx ? "radio checked" : "radio"}
        />
      );
    });
  }

  changeImage(str1, str2) {
    $(".nextPage").addClass(str1);
    $(".currentPage").addClass(str2);
    setTimeout(() => {
      this.setState({
        currentPage: this.state.nextPage
      });
      $(".nextPage").removeClass(str1);
      $(".currentPage").removeClass(str2);
    }, 500);
  }

  nextPhotos() {
    this.setState({
      nextPage: (this.state.currentPage + 1) % this.pics.length
    });
    this.changeImage("slideInRight", "slideOutRight");
  }

  lastPhotos() {
    let lastPhoto = this.state.currentPage - 1;
    if (lastPhoto < 0) {
      this.setState({ nextPage: this.pics.length - 1 });
    } else {
      this.setState({
        nextPage: (this.state.currentPage - 1) % this.pics.length
      });
    }
    this.changeImage("slideInLeft", "slideOutLeft");
  }

  render() {
    return (
      <div>
        <Swipeable
          className="swipable"
          trackMouse
          preventDefaultTouchmoveEvent
          onSwipedLeft={this.nextPhotos}
          onSwipedRight={this.lastPhotos}
        >
          <div className="photo-scroll-container">
            <div className="scroll-arrow" onClick={this.lastPhotos}>
              <i className="far fa fa-angle-left angles" />
            </div>
            <div className="all-images">
              <CarouselList
                pics={this.pics[this.state.currentPage]}
                classy="carousel currentPage"
              />
              <CarouselList
                pics={this.pics[this.state.nextPage]}
                classy="carousel nextPage"
              />
            </div>
            <div className="scroll-arrow" onClick={this.nextPhotos}>
              <i className="far fa fa-angle-right angles" />
            </div>
          </div>
        </Swipeable>
        <div className="radio-containter-master">
          <ul className="radio-container" onClick={this.setPhoto}>
            {this.setDots()}
          </ul>
        </div>
      </div>
    );
  }
}

export default Carousel;
