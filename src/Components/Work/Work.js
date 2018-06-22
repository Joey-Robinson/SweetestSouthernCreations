import React from 'react';

const images = [
  'https://placeimg.com/250/250/any',
  'https://placeimg.com/250/250/any',
  'https://placeimg.com/250/250/any'
];

const Work = (props) => (
  <div className="Work">
    From Work
        {images.map((image, index) => {
          return <li className="Work-List">
            <img
              className={index}
              key={index} 
              src={image} 
            />
          </li>
        })}
  </div>
);

export default Work;