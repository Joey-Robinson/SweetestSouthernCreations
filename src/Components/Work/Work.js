import React from 'react';

// const images = ['http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150', 'http://via.placeholder.com/350x150'];

const images = [
  'https://placeimg.com/250/250/any',
  'https://placeimg.com/250/250/any',
  'https://placeimg.com/250/250/any'
];

const Work = () => (
  <div className="Work">
    From Work
      <ul className="Work-UL">
        {images.map((image, index) => {
          return <li>
            <img
              id="Work-Test"
              className="Work-Images" 
              key={index} 
              src={image} 
            />
          </li>
        })}
      </ul>
  </div>
);

export default Work;