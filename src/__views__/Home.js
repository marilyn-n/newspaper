import React from 'react';
import CompactCard from '../__ui_components__/CompactCard';

const Home = () => {
  return (
    <div className="container">
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

        </div>
      </div>
    </div>
  );
}

export default Home;
