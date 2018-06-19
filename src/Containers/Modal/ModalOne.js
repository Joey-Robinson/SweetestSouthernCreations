import React, { Component } from 'react';
import ModalTwo from './ModalTwo';

class Modal extends Component {
  state = { 
    isModalOpen: false 
  }
  openModalHandler = () => {
    this.setState({isModalOpen: true});
  }
  closeModalHandler = () => {
    this.setState({isModalOpen: false});
  }
  render() {
    return (
      <div>
        <button
          className="ModalDiv-Button-Open" 
          onClick={this.openModalHandler}>
          Open modal
        </button>
        <ModalTwo
          isOpen={this.state.isModalOpen} 
          onClose={this.closeModalHandler}
        >
        <div className="ModalDiv">
          <h1>Test</h1>
          <p>test</p>
          <button
            className="ModalDiv-Button-Close"
            onClick={this.closeModalHandler}>
              Close
          </button>
        </div>
        </ModalTwo>
      </div>
    )
  }
}

export default Modal;