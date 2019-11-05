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
        if(article.title && article.multimedia) {
          return(
            <a href={ article.url } className="article-item anchor" key={article.title}>
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
                  <span>{ article.published_date.slice(0,10) }</span>
                </span>
              </div>
              <img src={ article.multimedia[3].url } alt="article-img"/>
            </a>
          )
        } else if(article.title){
          return(
            <div key={article.title}>
            <div className="single-divider"/>
              <Link to="/category:id/new:id" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ article.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">{ article.abstract }</p>
                  <span className="block-article__body__tags">
                    { article.byline ? <span>{ article.byline}</span> : '' }
                    <span>{ article.published_date.slice(0,10) }</span>
                  </span>
                </div>
              </Link>
              <div className="single-divider"/>
            </div>
          )
        }
      })
    ):(null)

    return (
      <div className="category-wrapper">
        <div className="col-md-8 offset-md-2 news-list">
          <div className="news-list__header">
            <h2></h2>
          </div>
          <div className="news-list__body">
            { articleList }
          </div>
          <div className="text-center">
            <button>Load more</button>
          </div>
        </div>
      </div>
    );
  }
}


Category.propTypes = {
  
};


export default Category;
