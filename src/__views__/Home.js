import React from 'react';
import CompactCard from '../__ui_components__/CompactCard';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
import ArticleCard from '../__ui_components__/ArticleCard';
import MiniArticleCard from '../__ui_components__/MiniArticleCard';
import QuoteCard from '../__ui_components__/QuoteCard';
import Header from '../__views__/layout/Header';
import MiniNav from '../__views__/layout/MiniNav';

const Home = () => {
  return (
    <div className="">
      <Header/>
      <MiniNav/>
      <div className="home-wrapper">
        <div className="briefing">
          <div className="briefing__item">
            <CompactCard/>
          </div>
          <div className="briefing__item">
            <CompactCard/>
          </div>
          <div className="briefing__item">
            <CompactCard/>
          </div>
        </div>
        <div className="news-wrapper py-3">
          <div className="top-stories col-8">
            <GraphicCard/>
            <GraphicCard/>
            <div className="w-100 d-flex justify-content-between my-3">
              <MiniArticleCard/>
              <MiniArticleCard/>
              <MiniArticleCard/>
            </div>
          </div>
          <div className="opinion col-4">
            <MediaCard/>
            <div className="d-flex py-2">
              <div className="pr-3 border-right d-flex flex-column justify-content-between">
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
              </div>
            </div>
            <MediaCard/>
            <MediaCard/>
            <ArticleCard/>
          </div>
          <div className="w-100 d-flex flex-wrap justify-content-between my-3">
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
          </div>
          <div className="w-100 d-flex flex-wrap justify-content-between my-3">
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
            <MiniArticleCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
