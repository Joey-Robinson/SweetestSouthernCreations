import React, { Component } from 'react';
import Modal from 'react-modal';

class HomeFiveModal extends Component {
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
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident saepe quibusdam quod vel harum. Accusantium eos modi dolorem atque dignissimos voluptatibus dicta natus sed qui blanditiis velit voluptas incidunt ut harum, officia consectetur est error veniam iusto beatae facere! Nihil numquam impedit ipsa pariatur animi aperiam doloremque? Exercitationem, itaque!</h1>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem delectus inventore laudantium voluptates itaque dolor porro! Dolor atque odio voluptates, recusandae adipisci non omnis maxime! Doloremque fugit quos veritatis maiores, adipisci ipsa dolores quas voluptatum laudantium qui, at officiis ut consequatur deleniti earum molestias. Alias praesentium dolore impedit totam quae.</h1>
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

export default HomeFiveModal;