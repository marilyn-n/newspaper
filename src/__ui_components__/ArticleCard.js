import React from 'react';

const ArticleCard = () => {
  return (
    <div className="article-card">
      <div className="article-card__header">
        <img src="https://www.hdwallpapersfreedownload.com/uploads/large/animals/rabbit-background.jpg"/>
      </div>
      <div className="article-card__body">
        <h2 className="article-card__body--title">
          You Know Someone Who’s Had a Miscarriage
        </h2>
        <p className="article-card__body--paragraph">
          Losing a pregnancy might be the loneliest experience that millions of women have faced.
        </p>
        <div className="article-card__body__details">
          <span className="article-card__body__details--date">1w ago</span>
          <span className="article-card__body__details--author">By Ravi Kalia and Claudia Casas</span>
        </div>
      </div>
    </div>
  );
}

export default ArticleCard;
