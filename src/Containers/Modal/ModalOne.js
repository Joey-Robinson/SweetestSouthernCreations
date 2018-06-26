import React, { Component } from 'react';
import ModalTwo from './ModalTwo';
import Button from '../../Components/Button/Button';

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
      <div className="ModalMover">
        <Button
          className="Button Button-Open" 
          onClick={this.openModalHandler}>
          Read More
        </Button>
        <ModalTwo
          isOpen={this.state.isModalOpen} 
          onClose={this.closeModalHandler}
        >
        <div className="ModalDiv">
          <h1>Test</h1>
          <p>test</p>
          <Button
            className="Button Button-Close"
            onClick={this.closeModalHandler}>
              Close
          </Button>
        </div>
        </ModalTwo>
      </div>
    )
  }
}

export default Modal;