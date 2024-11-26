import React from "react";
import moment from "moment";
import { NavLink } from "react-router-dom";

const MiniArticleCard = ({ card }) => {
  return (
    <NavLink
      to="/category:id/new:id"
      className="mini-article-card anchor"
      target="_blank"
      key={card.title}
    >
      <div className="mini-article-card__header">
        <span className="mini-article-card__header--label">{card.section}</span>
        <img
          src={card.multimedia[0] ? card.multimedia[0].url : ""}
          alt="mini-img"
        />
      </div>
      <div className="mini-article-card__body">
        <h2 className="mini-article-card__body--title">{card.title}</h2>
      </div>
      <div className="article-card__footer">
        <span className="tags--topic">{card.section}</span>
        <span className="tags--date">{moment(card.updated_date).fromNow()}</span>
      </div>
    </NavLink>
  );
};

export default MiniArticleCard;
