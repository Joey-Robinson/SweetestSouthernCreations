import React, { Component } from 'react';
import Footer from '../../Components/Layout/Footer/Footer';
import ImageGallery from 'react-image-gallery';
import LazyLoad from 'react-lazy-load';

class Work extends Component {
  render() {
    const images = [
      { 
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc001.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc002.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc003.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc004.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc005.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc006.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc007.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc008.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc009.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc010.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc011.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc012.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc013.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc014.png'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc015.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc016.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc017.jpg'
      },
      {
        original: 'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc018.jpeg'
      },
    ]
    return (
      <div className="Work">
        <ImageGallery
          showThumbnails={false}
          items={images} 
        />
        <Footer />
      </div>
    );
  }
};

export default Work