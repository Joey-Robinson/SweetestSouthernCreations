import React, { Component } from 'react';
import Modal from 'react-modal';

class HomeFourModal extends Component {
  state = {
    showModal: false
  }
  handleOpenModal = () => {
    this.setState({showModal: true});
  }
  handleCloseModal = () => {
    this.setState({showModal: false});
  }
  render() {
    return (
      <div>
        <button 
          className="ButtonModalOpen" 
          onClick={this.handleOpenModal}
        >
          Read More
        </button>
        <Modal 
          isOpen={this.state.showModal} 
          contentLabel="About Us" 
          onRequestClose={this.handleCloseModal}
          className="AboutModal" 
          overlayClassName="Overlay"
        >
        <div className="ModalText">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit accusantium voluptates expedita consectetur libero excepturi assumenda sint, esse debitis eum ipsum hic suscipit sapiente magnam, corporis facere! Labore hic et facere maxime distinctio quidem quibusdam ipsum itaque cumque quisquam, velit adipisci harum magnam omnis. Suscipit animi recusandae voluptate odio?</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt inventore culpa molestias illum quos nostrum, unde, tempora, nulla temporibus accusamus eaque dolorem vitae soluta assumenda sapiente facilis alias debitis nemo hic. Quia a voluptates sunt dolor aliquam laboriosam ipsum est.</h1>
        </div>
          <button
            className="ButtonModalClose"
            onClick={this.handleCloseModal}>
            Close
          </button>
        </Modal>
      </div>
    );
  }
};

export default HomeFourModal;