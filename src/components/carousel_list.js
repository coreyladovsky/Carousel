import React from "react";
import '../css/carousel_list.css';

class CarouselList extends React.Component {
  render() {
    let pics = this.props.pics.map((pic, idx) => {
      return (
        <li className="photo-list-item">
          <img key={idx} src={pic} alt="" />
        </li>
      );
    });
    return(
      <ul className={`photo-ul ${this.props.classy}`} >
        {pics}
      </ul>
    );
  }
}

export default CarouselList;
