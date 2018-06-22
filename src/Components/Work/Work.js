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
];

const Work = () => (
  <div className="Work">
    {images.map((image, index) => {
      return <ul 
        className={`Work-Images-${index}`}>
        <li>
        <a 
          href={image} 
          target="_blank">
        <img
          key={index} 
          src={image}
        />
        </a>
      </li>
    </ul>
    })}
  </div>
);

export default Work;