import React, { Component } from 'react';
import Briefing from '../__views__/Briefing';
import Opinion from '../__views__/Opinion';
import MediaCard from '../__ui_components__/MediaCard';
import ArticleCard from '../__ui_components__/ArticleCard';
import Header from '../layout/Header';
import MiniNav from '../layout/MiniNav';
import { Link } from 'react-router-dom';

class Home extends Component {

  state = {
    home: [],
    topHomeNews: [],
    bottomHomeNews: [],
    opinion: []
  }

  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    Promise.all([
      fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`),
      fetch(`https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=${key}`)
    ])
    .then(responses => Promise.all(responses.map(res => res.json() )))    
    .then(data => {  
        const articleResults = data[1].results
        const filteredOpinions = articleResults
          .filter(item => item.multimedia.length >= 4)

        const half = Math.ceil(filteredOpinions.length / 2);
  
        this.setState({
          home: filteredOpinions,
          topHomeNews: filteredOpinions.slice(0, half),
          bottomHomeNews: filteredOpinions.slice(half, filteredOpinions.length),
          opinion: filteredOpinions
        })
      })
  }

  render() {
    const createdDate = (str) => str.slice(0,10);
    const topHomeNews = this.state.topHomeNews;
    const opinionHeadArticle = this.state.opinion.slice(0,1);

    const opinionItem = opinionHeadArticle.length ?
    (
      opinionHeadArticle.map((item) => {
        return(
          <div>
            <span>{ item.section }</span>
            <Link to="/category:id/new:id" className="media-card anchor">
              <div className="item">
                <div className="media-card__header">
                  <h2 className="media-card__header--title">
                    {item.title}
                  </h2>
                </div>
                <div className="media-card__body">
                    <p className="media-card__body__paragraph">
                    </p>
                    <div className="media-card__body__paragraph--tags">
                      <span>{ item.section }</span>
                      <span>{ createdDate(item.created_date) }</span>
                    </div>
                </div>
              </div>
              <div className="item">
                <img src={ item.multimedia[4].url } alt="media"/>
              </div>
            </Link>
            <div className="single-light-divider"></div>
          </div>
        )
      })
    ):(null)

    const mainNewscolumn = topHomeNews.slice(0, Math.floor(topHomeNews.length / 2));    
    const mainColumnList = mainNewscolumn.length ?
    (
      mainNewscolumn.map((item, index) => {
        console.log(item, 'amer')
        if(index === 0) {
          return(
            <Link to="/category:id/new:id" className="graphic-card anchor">
              <div className="graphic-card__section pr-3">
                <div className="graphic-card__header">
                  <span className="graphic-card__header--title">
                    { item.title }
                  </span>
                </div>
                <div className="graphic-card__body">
                  <div className="graphic-card__body__paragraph">
                    { item.abstract }
                    <div className="graphic-card__body__paragraph--tags">
                      <span>{ item.section }</span>
                      <span>{ createdDate(item.created_date) }</span>          
                    </div>
                  </div>
                </div>
              </div>
              <div className="graphic-card__section pl-3">
                <img src={ item.multimedia[4].url } alt="graphic"/>
                <span className="graphic-card__section--caption">{ item.multimedia[4].copyright }</span>
              </div>
            </Link>
          )
        }

        if(index === 1) {
          return(
            <div>
              <div className="single-divider"></div>
              <Link to="/category:id/new:id" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ item.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">
                    { item.abstract }
                  </p>
                  <span className="block-article__body__tags">
                    <span>
                      { item.section}
                    </span>
                    <span>
                      { createdDate(item.created_date) }
                    </span>
                  </span>
                </div>
              </Link>
              <div className="single-divider"></div>
            </div>
          )
        } 
        
        else {
          return(
            <div>
              <Link to="/category:id/new:id" className="block-article anchor">
                <div className="block-article__header">
                  <h3 className="block-article__header--label-lg">{ item.title }</h3>
                </div>
                <div className="block-article__body">
                  <p className="block-article__body--paragraph">
                    { item.abstract }
                  </p>
                  <span className="block-article__body__tags">
                    <span>
                      { item.section}
                    </span>
                    <span>
                      { createdDate(item.created_date) }
                    </span>
                  </span>
                </div>
              </Link>
              <div className="single-divider"></div>
            </div>
          )
        } 
      })
    ):null


    const homeArticles = this.state.bottomHomeNews
    const homeArticleList = homeArticles.length ?
    (
      homeArticles.map((article) => {        
        return(
          <a className="mini-article-card anchor" key={article.title}>
            <div className="mini-article-card__header">
              <span className="mini-article-card__header--label">
                { article.section }
              </span>
              <img src={article.multimedia[3] ? article.multimedia[3].url: '' } alt="mini-img"/>
            </div>
            <div className="mini-article-card__body">
              <h2 className="mini-article-card__body--title">
                { article.title }
              </h2>
              <div className="mini-article-card__body__paragraph--tags">
                <span>{ article.section }</span>
                <span>7m ago</span>
              </div>
            </div>
          </a>
        )
      })
    ):(null)
    
    return(
      <div className="">
        <Header/>
        <MiniNav/>
        <div className="single-divider mt-0"/>
          <Briefing/>
        <div className="double-divider"/>
        <div className="home-wrapper">
          <div className="news-wrapper py-3">
            <section className="top-stories col-8">
              { mainColumnList }
            </section>
            <section className="opinion col-4">
              { opinionItem }
              <Opinion opinion={this.state.opinion}/>
              <div className="double-divider"></div>
                <MediaCard/>
              <div className="single-light-divider mb-3"></div>
                <ArticleCard/>
            </section>
            <div className="double-divider"></div>
            <section className="w-100 d-flex flex-wrap justify-content-between">
              <ArticleCard/>
              <ArticleCard/>
              <ArticleCard/>
            </section>
            <div className="double-divider"></div>
            <section className="w-100 d-flex flex-wrap justify-content-between">
              { homeArticleList }
            </section>
            <div className="double-divider"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;