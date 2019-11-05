import React, { Component } from 'react';
import Briefing from '../__views__/Briefing';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
import ArticleCard from '../__ui_components__/ArticleCard';
import MiniArticleCard from '../__ui_components__/MiniArticleCard';
import QuoteCard from '../__ui_components__/QuoteCard';
import BlockArticle from '../__ui_components__/BlockArticle';
import Header from '../layout/Header';
import MiniNav from '../layout/MiniNav';
import { Link } from 'react-router-dom';

class Home extends Component {

  state = {
    home: []
  }

  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${key}`)
    .then(response => response.json())
    .then(data => {
      this.setState({
        home: data.results
      })
    })
  }

  render() {
    console.log(this.state.home);

    const homeArticles = this.state.home
    const homeArticleList = homeArticles.length ?
    (
      homeArticles.map(article => {        
        return(
          <a className="mini-article-card anchor">
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
              <p className="mini-article-card__body__paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
              </p>
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
              <GraphicCard/>
              <div className="single-divider"></div>
              <BlockArticle/>
              <div className="single-divider"></div>
              <BlockArticle/>
              <div className="single-divider"></div>
              <div className="w-100 d-flex justify-content-between mb-3">
                <MiniArticleCard/>
                <MiniArticleCard/>
                <MiniArticleCard/>
              </div>
              <div className="single-divider"></div>
              <GraphicCard/>
              <div className="single-divider"></div>
              <BlockArticle/>
            </section>
            <section className="opinion col-4">
              <MediaCard/>
              <div className="single-light-divider"></div>
              <div className="d-flex py-2">
                <div className="pr-3 border-right d-flex flex-column justify-content-between">
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                </div>
                <div className="pl-3 d-flex flex-column justify-content-between">
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                  <QuoteCard/>
                </div>
              </div>
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
