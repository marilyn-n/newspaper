import React from 'react';
import { NavLink } from 'react-router-dom';

const MiniArticleCard = () => {
  return (
    <div>
      <span className="mini-article-card__header--label">
        Politics
      </span>
      <NavLink to="/category:id/new:id" className="mini-article-card anchor">
        <div className="mini-article-card__header">
          <img src="https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2017/03/02/USATODAY/USATODAY/636240538720039138-GettyImages-509934328.jpg?width=3200&height=1680&fit=crop" alt="mini-img"/>
        </div>
        <div className="mini-article-card__body">
          <h2 className="mini-article-card__body--title">
            You Know Someone Who’s Had a Miscarriage
          </h2>
          <p className="mini-article-card__body__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>
          <div className="mini-article-card__body__paragraph--tags">
            <span>Style</span>
            <span>7m ago</span>
          </div>
        </div>
      </NavLink>
    </div>
  );
}

export default MiniArticleCard;
