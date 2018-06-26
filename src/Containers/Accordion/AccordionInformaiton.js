import React, { Component } from 'react';
import Accordion from './Accordion/Accordion';

class AccordionInformation extends Component {
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
          <p>Find us on Facebook. We have a Facebook group!</p>
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
          <p>Do it for the G. Do it for the instagram.</p>
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
            <p>Email us to comment or ask about requests!</p>
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
            <p>Something</p>
            </div>
          </Accordion>
      </div>
    );
  }
}

export default AccordionInformation;
