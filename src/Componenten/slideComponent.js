import React from 'react';
import { Carousel } from "react-bootstrap";
import img1 from '../Images/foto1.png';
import img2 from '../Images/foto2.png';
import img3 from '../Images/foto3.png';

function slideComponent() {
  return (
    <div>
      <h1> Recents </h1>
      <hr />
      <Carousel>
        <Carousel.item>
          <img src={img1} height="300px" width="350px" alt="img1" />
        </Carousel.item>
        <Carousel.item>
          <img src={img2} height="300px" width="350px" alt="img2" />
        </Carousel.item>
        <Carousel.item>
          <img src={img3} height="300px" width="350px" alt="img3" />
        </Carousel.item>
      </Carousel>
    </div>

  );
}
export default slideComponent;