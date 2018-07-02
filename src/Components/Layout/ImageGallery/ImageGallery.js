import React from 'react';
import LazyLoad from 'react-lazy-load';

const ImageGallery = () => (
  <section className="ImageGallery">
      <img 
        className="ImageGallery-Image-One" 
        src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc041.jpg"
        alt="Sweetest Southern Creations Image Gallery Image Four"
      />
      <img 
        className="ImageGallery-Image-Two" 
        src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc042.jpg" 
        alt="Sweetest Southern Creations Image Gallery Image Five"
      />
  </section>
);

export default ImageGallery;