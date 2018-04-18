import React from 'react';

const images = [
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc001.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc002.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc003.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc004.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc005.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc006.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc007.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc008.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc009.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc010.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc011.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc012.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc013.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc014.png',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc015.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc016.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc017.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc018.jpeg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc019.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc020.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc021.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc022.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc023.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc024.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc025.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc026.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc027.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc028.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc029.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc030.jpg',
  'https://s3-us-west-2.amazonaws.com/sscstaticsitejr/ssc031.jpg'
];
const imageArray = images.map((image, index) => {
  return <a 
    target="_blank" 
    href={image}>
    <img 
    style={{
      width: '15rem', 
      height: '15rem'}} 
      key={index} 
      src={image} 
    />
  </a>
})

const Work = () => (
  <div className="Work">
    {imageArray}
  </div>
);

export default Work;