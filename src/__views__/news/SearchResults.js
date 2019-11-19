import React, { Component } from 'react';
import SearchBar from '../../layout/SearchBar';

class SearchResults extends Component {
    
    render() {
      const searchResults = this.props.location.results
      console.log(searchResults);
      
      const resultsList = searchResults.length ? 
      (
        searchResults.map(item => {
          return(
            <a href={item.url} className="article-item anchor">
              <div className="pr-3 article-item__header">
                <h2 className="article-item__header--title">
                  { item.headline.main }
                </h2>
                <p className="article-item__header--paragraph"> 
                  { item.abstract }
                </p>
                <span className="article-item__header__tags">
                  <span>
                    { item.byline.original }
                  </span>
                  <span>
                    { item.created_date }
                  </span>
                </span>
              </div>
              <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2120,x_0,y_227/f_auto,q_auto,w_1100/v1554729678/shape/mentalfloss/58331-istock-479586616.jpg" alt="article-img"/>
            </a>
          )
        })
      ) : (null)
      
      return (
        <div className="search-results-wrapper">
          <div className="col-md-8 offset-md-2">
          <div className="search-results__header">
            <span>Showing 91,902 results for: </span>
            <SearchBar/>
          </div>
            { resultsList }
          </div>
        </div>
      );
    }
}

export default SearchResults;
