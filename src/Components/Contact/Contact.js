import React from 'react';

const Contact = () => (
  <div className="Contact">
    <a className="" href="https://www.google.com" target="_blank">
      <button className="FacebookLink">Facebook</button>
      <button className="FacebookLink"></button>
    </a>&nbsp;&nbsp;
    <a href="https://www.reddit.com" target="_blank">
      <button className="EmailLink">Email</button>
      <button className="EmailLink" style={{color: '#fe584c'}}></button>
    </a>&nbsp;&nbsp;    
    <a href="https://www.reddit.com" target="_blank">
      <button className="FacebookLink">Email</button>
      <button className="FacebookLink" style={{color: '#fe584c'}}></button>
    </a>
  </div>
);

export default Contact;