import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

class Category extends Component {
  state = {
    articles: []
  }
  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    let categoryId = this.props.match.params.category_name;
    fetch(`https://api.nytimes.com/svc/news/v3/content/nyt/${categoryId}.json/get?api-key=${key}`)
      .then(response => response.json())
      .then(data => {
        const hasPhotoAndTitle = data.results
          .filter(item => item.title && item.multimedia != undefined)
          .filter(item => item.multimedia.length >= 3)

        this.setState({
          articles: hasPhotoAndTitle
        })
      })
  }

  render() {
    const sectionName = this.props.match.params.category_name;
    const articles = this.state.articles;  
    const articleList = articles.length ?
    (
      articles.map((article, index) => {
        if(index === 0) {
          return(
            <div>
              <a href={ article.url } target="_blank" className="graphic-card anchor" key={article.title}>
                <div className="graphic-card__section pr-3">
                  <div className="graphic-card__header">
                    <span className="graphic-card__header--title">
                      { article.title }
                    </span>
                  </div>
                  <div className="graphic-card__body">
                    <div className="graphic-card__body__paragraph">
                      { article.abstract }
                      <div className="graphic-card__body__paragraph--tags">
                        <span>{ article.section }</span>
                        <span>{ moment(article.created_date).fromNow() }</span>          
                      </div>
                    </div>
                  </div>
                </div>
                <div className="graphic-card__section pl-3">
                  <img src={ article.multimedia[2].url } alt="graphic"/>
                  <span className="caption">
                    { article.multimedia[2].copyright }
                  </span>
                </div>
              </a>
              <div className="double-divider"/>
            </div>
          )
        }    
        if(index % 4) {
          return(
            <a href={article.url} target="_blank" className="article-item anchor" key={article.title}>
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
                  <span>{ moment(article.published_date).fromNow() }</span>
                </span>
              </div>
              <img src={ article.multimedia[2].url } alt="article-img"/>
            </a>
          )
        } else if(index % 3) {
          return(
            <div key={article.title}>
            <div className="single-divider"/>
              <a href={article.url} target="_blank" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ article.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">{ article.abstract }</p>
                  <span className="block-article__body__tags">
                    { article.byline ? <span>{ article.byline}</span> : '' }
                    <span>{ moment(article.published_date).fromNow() }</span>
                  </span>
                </div>
              </a>
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
          <h2 className="label text-capitalize">{ sectionName }</h2>
          </div>
          <div className="news-list__body">
            { articleList }
          </div>
          <div className="text-center">
          <button className="btn btn-dark d-block mx-auto"> Load more </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
