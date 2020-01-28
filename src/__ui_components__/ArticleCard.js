import React from 'react';
import { NavLink } from 'react-router-dom';

const ArticleCard = () => {
  return (
    <NavLink to="/category:id/new:id" className="article-card anchor">
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
      </div>
      <div>
          <span className="tags--date">1w ago</span>
          <span className="tags--byline">By Ravi Kalia and Claudia Casas</span>
        </div>
    </NavLink>
  );
}

export default ArticleCard;
