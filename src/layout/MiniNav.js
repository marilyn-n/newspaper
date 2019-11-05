import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MiniNav extends Component {
  
  render() {
    const sections = 
      [
        'world', 'u.s', 'politics', 'business', 'opinion', 'tech', 'science', 'health',
        'sports', 'arts', 'books', 'style', 'food', 'travel', 'magazine', 'climate', 'fashion'
      ];
    
    const capitalizeStr = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    const sectionsList = sections.length ?
    (
      sections.map(item => {
        return(
          <li key={Math.random() * .23}><Link to={'/' + item }>{ capitalizeStr(item) }</Link></li>
        )
      })
    ): null

    return (
      <div className="mini-nav-wrapper">
        <ul className="unordered-list">
          { sectionsList }
        </ul>
      </div>
    );
  }
  
}

export default MiniNav;
