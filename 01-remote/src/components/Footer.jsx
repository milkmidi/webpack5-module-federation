import React from 'react';
import './Footer.css';
import _ from 'lodash';
const Footer = () => {
  const name = _.add(1,1);
  return (
    <footer className="footer">
      Footer, {name}
    </footer>
  )
};

export default Footer;