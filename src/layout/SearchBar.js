import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'

class SearchBar extends Component {
  state = {
    searchResults: []
  }
  concatStr = (str) => {
    const words = str.split(' ');
    return words.join('+');
  }

  articleSearch = (e) => {
    e.preventDefault();
    const query = e.target.firstChild.value;
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.concatStr(query)}&fq=headline:("${this.concatStr(query)}")&facet=true&sort=newest&&api-key=${key}`;
    
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => this.setState({ searchResults: data.response.docs }))
  }

  render() {
    if (this.state.searchResults.length > 1) {
      return (
        <Redirect to={ { pathname: '/search-results', results: this.state.searchResults } }/>
      )
    }

    return (
      <div className="search-bar">
        <form onSubmit={ this.articleSearch}>
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

export default SearchBar;