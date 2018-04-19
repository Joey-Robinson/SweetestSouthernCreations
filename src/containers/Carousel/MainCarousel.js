import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

class MainCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          <Carousel.Item>
            <a href="https://github.com/elamahpla" target="_blank"><img src="http://via.placeholder.com/350x150" /></a>
          </Carousel.Item>
          <Carousel.Item>
            <img alt="shit" src="http://via.placeholder.com/350x150" />
         </Carousel.Item>
          <Carousel.Item>
            <img alt="fuck" src="http://via.placeholder.com/350x150" />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
};

export default MainCarousel;