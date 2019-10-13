import React, { Component } from 'react';
import NewsList from '../news/NewsList';

class Category extends Component {
  render() {
    return (
      <div className="">
        <div className="category-wrapper">
          <div className="category__title">
            <NewsList/>
          </div>
        </div>
      </div>
    );
  }
}


Category.propTypes = {
  
};


export default Category;
