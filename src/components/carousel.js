import React from "react";
import { pictures } from "../imports/imports.js";
import CarouselList from "./carousel_list.js";
import '../css/carousel.css';

class Carousel extends React.Component {
  constructor() {
    super();
    this.pics = pictures;
    this.state = {
      currentPage: 0,
    };
    this.nextPhotos = this.nextPhotos.bind(this);
  }

  nextPhotos() {
    this.setState({currentPage: ((this.state.currentPage + 1) % this.pics.length)});
  }




  render () {
    return(
      <div>
        <div className="photo-scroll-container">
          <div className="scroll-arrow"><i className="far fa fa-angle-left angles"></i></div>
          <CarouselList pics={this.pics[this.state.currentPage]} />
          <div className="scroll-arrow" onClick={this.nextPhotos}><i className="far fa fa-angle-right angles"></i></div>
        </div>
      </div>
    );
  }
}

export default Carousel;
