import React, { Component } from 'react';

class NotFound extends Component {
  render() {
    const searchTerm = this.props.location.searchTerm
    
    return (
      <div className="not-found">
        <h3>Not found results for "{searchTerm}"</h3>
      </div>
    )
  }
}

export default NotFound;
