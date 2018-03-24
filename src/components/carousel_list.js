import React from "react";
import '../css/carousel_list.css';

class CarouselList extends React.Component {
  render() {
    let pics = this.props.pics.map((pic, idx) => {
      return (
        <li>
          <img key={idx} src={pic} alt="" />
        </li>
      );
    });
    return(
      <ul className="photo-ul">
        {pics}
      </ul>
    );
  }
}

export default CarouselList;
