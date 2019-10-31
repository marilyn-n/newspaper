import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class MiniNav extends Component {
  
  render() {
    const sections = this.props.sections;
    const sectionsList = sections.length ?
    (
      sections.map(item => {
        return(
          <li key={Math.random() * .23}><NavLink to="/category:id">{ item }</NavLink></li>
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
