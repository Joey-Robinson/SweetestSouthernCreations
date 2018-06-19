import React from 'react';
import BodyContent from '../Layout/BodyContent/BodyContent';
import Footer from '../Layout/Footer/Footer';
import Header from '../Layout/Header/Header';
import ImageGallery from '../Layout/ImageGallery/ImageGallery';
import RotatingCardContainer from '../Layout/RotatingCard/RotatingCardContainer/RotatingCardContainer';

const Home = () => (
  <div className="Home">
    <BodyContent />
    <Header />
    <ImageGallery />
    <RotatingCardContainer />
    <Footer />
  </div>
);

export default Home;