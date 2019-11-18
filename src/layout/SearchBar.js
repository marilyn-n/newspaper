import React, { Component } from 'react';

class SearchBar extends Component {

  concatStr = (str) => {
    const words = str.split(' ');
    return words.join('+');
  }

  articleSearch = (e) => {
    e.preventDefault();
    const query = e.target.firstChild.value;
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';

    const url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.concatStr(query)}&page=2&sort=oldest&api-key=${key}`;
    
    fetch(`${url}`)
      .then(response => response.json())
      .then(data => console.log(data, 'form search request'))
  }

  render() {
    return (
      <div className="search-bar">
        <form onSubmit={ this.articleSearch}>
          <input 
            type="text" 
            name="search" 
            className="form-control" 
            placeholder="Recipient's username"
            />
        </form>
      </div>
    );
  }
  
}

export default SearchBar;
