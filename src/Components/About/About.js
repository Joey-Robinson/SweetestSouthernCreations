import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import InformationToggle from '../../Containers/InformationToggle/InformationToggle';

const About = () => (
  <section className="About">
    <Header />
    <div className="About-One">
      <h1>Who are we?</h1>
        <InformationToggle />
    </div>
    <div className="About-Two">
      <h1>What we do.</h1>
    </div>
    <div className="About-Three">
      <h1>What is this?</h1>
    </div>
  </section>
);

export default About;