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
    console.log(articles, 'estooo');
    
    const articleList = articles.length ?
    (
      articles.map(article => {
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
                <span>
                  By VANESSA FRIEDMAN
                </span>
                <span>
                  Oct. 21, 2019
                </span>
              </span>
            </div>
            <img src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1188,w_2120,x_0,y_227/f_auto,q_auto,w_1100/v1554729678/shape/mentalfloss/58331-istock-479586616.jpg" alt="article-img"/>
          </Link>
        )
      })
    ):(null)

    return (
      <div className="category-wrapper">
        <div className="news-list">
          <div className="news-list__header">
            <h2></h2>
          </div>
          <div className="news-list__body">
            { articleList }
          </div>
        </div>
      </div>
    );
  }
}


Category.propTypes = {
  
};


export default Category;
