import React, { Component } from 'react';
import { Author, StrToUpperCase } from '../../Helpers.js';
import moment from 'moment';
import Briefing from '../Briefing';
import MainNews from '../news/MainNews.js';
import Opinion from '../Opinion';
import Header from '../../layout/Header';
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

        const articlesAssortment = data[0].results
          .filter(item => item.multimedia.length >= 4)

        const half = Math.ceil(filteredOpinions.length / 2);
  
        this.setState({
          home: articlesAssortment,
          topHomeNews: articlesAssortment.slice(0, half),
          bottomHomeNews: articlesAssortment.slice(half, articlesAssortment.length),
          opinion: filteredOpinions
        })
      })
  }

  render() {
    const opinions = this.state.opinion
    const topHomeNews = this.state.topHomeNews

    const firstOpinion = opinions.slice(0,1);
    const popularOpinionions = opinions.slice(1, opinions.length)
    
    const otherNews = topHomeNews.slice(11, 14);
    
    const blockOtherNews = otherNews.length ? 
    (
      otherNews.map((item) => {
        return(
          <a href={item.url} target="_blank" className="article-card anchor" key={item.title}>
            <div className="article-card__header">
              <img className={!item.multimedia[0].copyright ? 'mb-1' : ''} src={ item.multimedia[0].url } alt="multimedia"/>
              { 
                item.multimedia[0].copyright ? 
                <span className="caption my-1">{ item.multimedia[0].copyright }</span> : 
                ''
              }
            </div>
            <div className="article-card__body">
              <h2 className="article-card__body--title">
                { item.title }
              </h2>
              <p className="article-card__body--paragraph">
                { item.abstract }
              </p>
            </div>
            <div className="article-card__footer">
              <span className="tags--topic">
                { item.section }
              </span>
              <span className="tags--date">
                { moment(item.created_date).fromNow() }
              </span>
            </div>
          </a>
        )
      })
    ):(null)

    const topEditorsPicks = topHomeNews.slice((topHomeNews.length -3), (topHomeNews.length));
    const editorsPicks = topEditorsPicks.length ?
    (
      topEditorsPicks.map(item => {
        return(
          <div key={ item.title }>
            <a href={item.url} target="_blank" className="media-card anchor">
              <div className="item pr-3">
                <div className="media-card__header">
                  <h2 className="media-card__header--title">
                    {item.title}
                  </h2>
                </div>
                <div className="media-card__body">
                    <span className="media-card__body--byline">{ StrToUpperCase(Author(item.byline)) }</span>
                    <p className="media-card__body__paragraph">
                      { item.abstract }
                    </p>
                    <div>
                      <span className="tags--topic">{ item.section }</span>
                      <span className="tags--date">{ moment(item.created_date).fromNow() } </span>
                    </div>
                </div>
              </div>
              <div className="item">
                <img src={ item.multimedia[0].url } alt="media"/>
              </div>
            </a>
            <div className="single-light-divider"></div>
          </div>
        )
      })
    ):(null)

    const opinionItem = opinions.length ?
    (
      firstOpinion.map((item) => {
        return(
          <div key={item.title}>
            <Link to={'/opinion'} className="label text-dark">
              Opinion
            </Link>
            <div className="border-partial"></div>
            <a href={item.url} target="_blank" className="media-card anchor">
              <div className="item pr-3">
                <div className="media-card__header">
                  <h2 className="media-card__header--title">
                    {item.title}
                  </h2>
                </div>
                <div className="media-card__body">
                    <span className="media-card__body--byline">{ StrToUpperCase(Author(item.byline)) }</span>
                    <p className="media-card__body__paragraph">
                      { item.abstract }
                    </p>
                    <div>
                      <span className="tags--topic">{ item.section }</span>
                      <span className="tags--date">{ moment(item.created_date).fromNow() }</span>
                    </div>
                </div>
              </div>
              <div className="item">
                <img src={ item.multimedia[0].url } alt="media"/>
              </div>
            </a>
            <div className="single-light-divider"></div>
          </div>
        )
      })
    ):(null)

    const homeBottomArticles = this.state.bottomHomeNews
    const bottomNews = homeBottomArticles.length ?
    (
      homeBottomArticles.map((article) => {        
        return(
          <a href={ article.url } className="mini-article-card anchor" target="_blank" key={article.title}>
            <div className="mini-article-card__header">
              <span className="mini-article-card__header--label">
                { article.section }
              </span>
              <img src={article.multimedia[0] ? article.multimedia[0].url: '' } alt="mini-img"/>
            </div>
            <div className="mini-article-card__body">
              <h2 className="mini-article-card__body--title">
                { article.title }
              </h2>
            </div>
            <div className="article-card__footer">
              <span className="tags--topic">{ article.section }</span>
              <span className="tags--date">7m ago</span>
            </div>
          </a>
        )
      })
    ):(null)
    
    return(
      <div className="home-wrapper">
        <Header/>
        <div className="single-divider mt-0"/>
          <Briefing/>
        <div className="double-divider"/>
          <div className="news-wrapper">

            <section className="top-home-news col-lg-8 col-md-8 col-xs-12">
              <MainNews topHomeNews={this.state.topHomeNews}/>
            </section>

            <section className="opinion col-lg-4 col-md-4">
              { opinionItem }
              <Opinion opinion={ popularOpinionions }/>
              <div className="double-divider"></div>
              <div>
                <span className="label">Editors' Picks</span>
                <div className="border-partial"></div>
              </div>
              { editorsPicks }
            </section>

            <div className="double-divider"></div>

            { blockOtherNews? 
              <section className="block-other-news">
                { blockOtherNews }
                <div className="double-divider"></div>
              </section>
              : ' ' 
            }

            <section className="bottom-container">
              <div>
                <span className="label">News</span>
                <div className="border-partial"></div>
              </div>
              <div className="bottom-news">
                { bottomNews }
              </div>
            </section>

          </div>
      </div>
    );
  }
}

export default Home;