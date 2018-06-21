import React, { Component } from 'react';
import Accordion from './Accordion/Accordion';

class App extends Component {
  state = {
    selectedIndex: 0
  }
  render() {
    return (
      <div className="AccordionContainer">
        <p>
          <button onClick={() => this.setState({ selectedIndex: -1 })}>
            Close
          </button>
        </p>
        <Accordion
          className="Accordion"
          selectedIndex={this.state.selectedIndex}
        >
          <div
            data-header="Facebook"
            className="Accordion-Item-One"
          >
          <p>Facebook</p>
          </div>
          <div data-header="Instagram" className="Accordion-Item-Two">
            <p>
              The Gram
            </p>
          </div>
          <div
            data-header="Email"
            className="Accordion-Item-Three"
          >
            <p>
              Email
            </p>
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
