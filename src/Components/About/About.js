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
  </section>
);

export default About;