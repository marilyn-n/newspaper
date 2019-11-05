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

class Home extends Component {

  state = {
    sections: ''
  }

  componentDidMount() {
    const key = 'PBgITfXgkBCpszcYJifHtpDtqoe18dqN';
    const URL = `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`;
    fetch(`${URL}`)
    .then(response => response.json())
    .then(data => {
      const results = data.results
      const allSections = results.map(item => item.section)
      const unicSections = new Set(allSections)

      this.setState({ 
        sections: [...unicSections]
      })
    })
  }

  render() {
    const sections = this.state.sections;    
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
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
            </section>
            <div className="double-divider"></div>
            <section className="w-100 d-flex flex-wrap justify-content-between">
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
