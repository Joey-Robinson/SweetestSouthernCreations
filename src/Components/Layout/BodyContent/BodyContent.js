import React from 'react';
import Modal from '../../../Containers/Modal/ModalOne';
import Video from './Video/Video';

const BodyContent = () => (
  <div className="BodyContent">
    <Modal />
    <div className="BodyContent-One">
      <h1>Sweetest Southern Creations</h1> 
    </div>
    <div className="BodyContent-Two">
      {/* <img src="https://i.imgur.com/h3kd1CF.gifv" alt=""/> */}
      {/* <Video src="https://i.imgur.com/h3kd1CF.mp4" /> */}
      <Video className="BodyContent-Video" src="https://i.imgur.com/h3kd1CF.gifv" />
    </div>
  </div>
);

export default BodyContent;