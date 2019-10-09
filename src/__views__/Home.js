import React from 'react';
import CompactCard from '../__ui_components__/CompactCard';
import MediaCard from '../__ui_components__/MediaCard';
import GraphicCard from '../__ui_components__/GraphicCard';
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
        <div className="news-wrapper">
          <GraphicCard/>
          <MediaCard/>
          <MediaCard/>
          <MediaCard/>
        </div>
      </div>
    </div>
  );
}

export default Home;
