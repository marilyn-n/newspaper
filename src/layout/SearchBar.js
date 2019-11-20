import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

class SearchBar extends Component {

  concatStr = (str) => {
    const words = str.split(' ');
    return words.join('+');
  }

  search = (e) => {
    e.preventDefault();
    const query = e.target.firstChild.value;
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.concatStr(query)}&fq=headline:("${this.concatStr(query)}")&facet=true&sort=newest&&api-key=${key}`;
    
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => {
        if(data.response.docs.length) {
          this.props.history.push({
            pathname: '/search-results', 
            results: data.response.docs,
            searchTerm: query
          })
        } else {
          this.props.history.push({
            pathname: '/not-found', 
            searchTerm: query
          })
        }
      })
      .catch(err => err)      
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={ this.search}>
          <input 
            type="text" 
            name="search" 
            className="form-control" 
            placeholder="search"
            />
        </form>
      </div>
      
    );
  }
}

export default withRouter(SearchBar);
