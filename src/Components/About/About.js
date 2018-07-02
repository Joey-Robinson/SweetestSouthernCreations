import React from 'react';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

const About = () => (
  <section className="About">
    <Header />
      <div className="About-Dummy">
        <div className="About-Dummy-Two">
          <h1>Who are we?</h1>
            <p>Sweetest Southern Creations is a company focused on bringing joy and happiness to people. We relish the opportunity to take your ideas 
              and make them into reality. 
            </p>
        </div>
        <div className="About-Dummy-Seven">
          <h1>What's around the corner?</h1>
            <p>Lorem ipsum dolor sit amet.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, maxime!
            </p>
        </div>
      </div>
    <Footer />
  </section>
);

export default About;