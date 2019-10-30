import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Category extends Component {
  state = {
    articles: ''
  }
  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    let categoryId = this.props.match.params.category_name;
    fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${categoryId}.json/get?api-key=${key}`)
      .then(response => response.json())
      .then(data => {
        console.log(data, 'aquiii');
        
        this.setState({
          articles: data.results
        })
      })
  }

  render() {
    const articles = this.state.articles;   
    const articleList = articles.length ?
    (
      articles.map(article => {
        if(article.title) {
          // const imgSrc = article.multimedia[3].url; 
                             
          return(
            <Link to="/" className="article-item anchor" key={article.title}>
              <div className="pr-3 article-item__header">
                <h2 className="article-item__header--title">
                  { article.title }
                </h2>
                <p className="article-item__header--paragraph"> 
                  { article.abstract }
                </p>
                <span className="article-item__header__tags">
                  { article.byline ? 
                    <span className="mr-2">{ article.byline }</span> : ''
                  }
                  <span>
                    { article.published_date }
                  </span>
                </span>
              </div>
              { article.multimedia ? <img src={ article.multimedia[3].url } alt="article-img"/>: '' }
              
            </Link>
          )
        }
      })
    ):(null)

    return (
      <div className="category-wrapper">
        <div className="col-md-6 offset-md-3 news-list">
          <div className="news-list__header">
            <h2></h2>
          </div>
          <div className="news-list__body">
            { articleList }
          </div>
          <div className="text-center">
            <span>Load more</span>
          </div>
        </div>
      </div>
    );
  }
}


Category.propTypes = {
  
};


export default Category;
