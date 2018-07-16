import React from 'react';
import Modal from '../../../Containers/Modal/ModalOne';

const BodyContent = () => (
  <div className="BodyContent">
    <Modal />
    <div className="BodyContent-One">
      <h1>Sweetest Southern Creations</h1>
      <div className="BodyContent-Two">
        <img
          id="NewImage"
          src="https://rawgit.com/elamahpla/5833c85b87182ef3fcafc07e4594616b/raw/85e2d582227a6b9716a3b50dc59d76710b7d5262/tdog.svg" 
          alt=""
        />
      </div>
    </div>
  </div>
);

export default BodyContent;