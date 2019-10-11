import React from 'react';
import CompactCard from '../__ui_components__/CompactCard';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
import ArticleCard from '../__ui_components__/ArticleCard';
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
          <div className="d-flex justify-content-betwee">
            <ArticleCard/>
            <ArticleCard/>
            <ArticleCard/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
