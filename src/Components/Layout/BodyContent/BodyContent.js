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
      {/* <Video src="https://i.imgur.com/35bDxLp.mp4" /> */}
    </div>
  </div>
);

export default BodyContent;