import React, { Component } from 'react';

class MiniNav extends Component {
  
  render() {
    const sections = 
      [
        'world', 'u.s', 'business', 'opinion', 'technology', 'science', 'health',
        'sports', 'arts', 'books', 'style', 'food', 'travel', 'magazine', 'climate', 'fashion'
      ];
    
    const capitalizeStr = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

    const sectionsList = sections.length ?
    (
      sections.map(item => {
        return(
          <li key={Math.random() * .23}><a href={'/' + item }>{ capitalizeStr(item) }</a></li>
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
