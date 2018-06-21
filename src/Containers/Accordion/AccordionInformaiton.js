import React, { Component } from 'react';
import Accordion from './Accordion/Accordion';

class App extends Component {
  state = {
    selectedIndex: 0
  }
  render() {
    return (
      <div className="AccordionContainer">
        <Accordion
          className="Accordion"
          selectedIndex={this.state.selectedIndex}
        >
          <div
            data-header={<img 
            src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/icons/icons8-facebook(2).svg" />}
            className="Accordion-Item-One"
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, commodi mollitia nemo adipisci omnis incidunt voluptatum minima ex voluptas laudantium.</p>
          </div>
        </Accordion>
        <Accordion
          className="Accordion"
          selectedIndex={this.state.selectedIndex}
        >
        <div
          data-header={<img 
          src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/icons/icons8-instagram(1).svg" />}
          className="Accordion-Item-Two"
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, commodi mollitia nemo adipisci omnis incidunt voluptatum minima ex voluptas laudantium.</p>
          </div>
          </Accordion>
          <Accordion
          className="Accordion"
          selectedIndex={this.state.selectedIndex}
          >
          <div
            data-header={<img 
            src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/icons/icons8-gmail.svg" />}
            className="Accordion-Item-Three"
          >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, commodi mollitia nemo adipisci omnis incidunt voluptatum minima ex voluptas laudantium.</p>
            {/* <Accordion className="accordion">
              <div data-header="Well" className="Accordion-Item">
                Mauris nec scelerisque ligula. Sed aliquam blandit metus, sed
                semper lectus placerat nec. Nam lobortis faucibus sem at
                rhoncus. Mauris id pellentesque ex. Praesent ornare nunc at
                ultricies bibendum. Maecenas nec ultricies libero. Aenean ac
                hendrerit massa. Class aptent taciti sociosqu ad litora torquent
                per conubia nostra, per inceptos himenaeos. Vivamus non erat
                bibendum leo ultrices bibendum vitae non risus.
              </div>
              <img
                data-header="Your accordion can contain any component really"
                className="Accordion-Item"
                src="http://www.emilpalsson.com/react-tiny-accordion-demo2.jpg"
                alt="Demo"
              />
            </Accordion> */}
          </div>
          </Accordion>
      </div>
    );
  }
}

export default App;
