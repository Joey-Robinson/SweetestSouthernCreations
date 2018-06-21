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
            </div>
          </Accordion>
          <Accordion
            className="Accordion"
            selectedIndex={this.state.selectedIndex}
            >
            <div
              data-header={<img 
              src="https://s3-us-west-2.amazonaws.com/sscstaticsitejr/icons/icons8-twitter.svg" />}
              className="Accordion-Item-Four"
            >
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, commodi mollitia nemo adipisci omnis incidunt voluptatum minima ex voluptas laudantium.</p>
            </div>
          </Accordion>
      </div>
    );
  }
}

export default App;
