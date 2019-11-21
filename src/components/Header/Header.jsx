import React, { Component } from 'react';
import './Header.css';
import LinkButton from '../Buttons/components/LinkButton';

class Header extends Component {
  
  render () {
    return (
      <div id="header-container">
      <LinkButton />
      </div>
    );
  }
}

export default Header;