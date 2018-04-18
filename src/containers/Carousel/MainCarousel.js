import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/350x150" />
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/450x150" />
         </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="http://via.placeholder.com/550x150" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};

export default MainCarousel;