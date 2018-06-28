import React from 'react';

const Video = ({src}) => (
  <iframe
    repeat={true}
    allowFullScreen
    src={src} 
    frameBorder="0"
    width={'100%'}
    height={'100%'}
  />
);

export default Video;