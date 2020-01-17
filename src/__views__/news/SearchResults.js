import React, { Component } from 'react';
import moment from 'moment';

class SearchResults extends Component {
  
    render() {
      const searchTerm = this.props.location.searchTerm
      const hits = this.props.location.results.response.meta.hits;
      
      const searchResults =   this.props.location.results.response.docs
      const resultsList = searchResults.length ? 
      (
        searchResults.map(item => {
          if(item.multimedia.length > 3) {
            const srcImg = item.multimedia[3].url;
            return(
              <div>
                <a href={item.web_url} target="_blank" className="article-item anchor" key={item._id}>
                  <div className="article-item__header">
                    <h2 className="article-item__header--title">
                      { item.headline.main }
                    </h2>
                    <p className="article-item__header--paragraph"> 
                      { item.abstract }
                    </p>
                    <div>
                      { item.byline.original ? 
                        <span className="tags--by">
                          { item.byline.original }
                        </span> : ''
                      }
                      <span className="tags--date">
                        { moment(item.created_date).fromNow() }
                      </span>
                    </div>
                  </div>
                  <img src={`https://static01.nyt.com/${srcImg}`} alt="article-img"/>
                </a>
                <div className="single-divider"></div>
              </div>
            )
          } else {
            return (
              <div key={item._id}>
                <a href={item.web_url} target="_blank" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg ellipsis-3">
                    { item.headline.main }
                  </h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph ellipsis-3 my-2">
                    { item.abstract }
                  </p>
                  <span className="block-article__body">
                    <span className="tags--topic">
                      { item.section }
                    </span>
                    <span className="tags--date">
                      { moment(item.pub_date).fromNow() }
                    </span>
                  </span>
                </div>
              </a>
              <div className="single-divider"/>
            </div>
            )
          }
          
        })
      ) : (null)
      
      return (
        <div className="search-results">
          <div className="search-results__wrapper col-md-8 offset-md-2">
            <div className="search-results__header">
              <span>Showing { hits } results for "{ searchTerm }"</span>
            </div>
              { resultsList }
          </div>
          {/* <button className="btn btn-dark d-block mx-auto"> Load more </button> */}
        </div>
      );
    }
}

export default SearchResults;
