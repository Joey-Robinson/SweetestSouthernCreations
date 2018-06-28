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
          <p>
        Sweetest Southern Creations is an up and coming small business started by a stay at home mom that loves to do crafts. We are located in South West Louisiana.  We specialize in all types of vinyl work as well as custom made skirts, dresses, bows and bowties. Having a party? We can also make custom invitations, banners, table decorations and much more. We have this amazing thing called PixScan. With PixScan we can take a special drawing or letter from yourself or a loved one and turn it into a special piece for you. We will soon be offering embroidery options as well. We do local pick up and shipping  options. All shipped items come with insurance and tracking. Our turn around time is 4 days. Rush orders are available with a small fee. To place an order it’s really simple. All you have to do is send us an email or message us on Facebook.  You can check out some of the orders we’ve made on either our Facebook page or Instagram. From the bottom of our hearts thank you so much for taking time to check out our business and for the previous and future orders. We lookforward to working with y’all.
          </p>
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