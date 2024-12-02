import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const ArticleCard = ({ card }) => {
  
  return (
    <Link
      to={card.url}
      target="_blank"
      className="article-card anchor"
      key={card.title}
    >
      <div className="article-card__header">
        <img
          className={!card.multimedia[0].copyright ? "mb-1" : ""}
          src={card.multimedia[0].url}
          alt="multimedia"
        />
        {card.multimedia[0].copyright ? (
          <span className="caption my-1">{card.multimedia[0].copyright}</span>
        ) : (
          ""
        )}
      </div>
      <div className="article-card__body">
        <h2 className="article-card__body--title">{card.title}</h2>
        <p className="article-card__body--paragraph">{card.abstract}</p>
      </div>
      <div className="article-card__footer">
        <span className="tags--topic">{card.section}</span>
        <span className="tags--date">
          {moment(card.created_date).fromNow()}
        </span>
      </div>
    </Link>
  );
};

export default ArticleCard;
