import React from 'react';
import CompactCard from '../__ui_components__/CompactCard';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
import ArticleCard from '../__ui_components__/ArticleCard';
import MiniArticleCard from '../__ui_components__/MiniArticleCard';
import Header from '../__views__/layout/Header';
import MiniNav from '../__views__/layout/MiniNav';

const Home = () => {
  return (
    <div className="container">
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
          <div className="col-8">
            <GraphicCard/>
          </div>
          <div className="col-4">
            <MediaCard/>
            <MediaCard/>
            <MediaCard/>
          </div>
          <div className="w-100 d-flex justify-content-between my-3">
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
          </div>
          <div className="w-100 d-flex justify-content-between my-3">
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
