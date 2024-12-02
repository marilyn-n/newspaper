import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const GraphicCard = ({ card }) => {
  return (
    <Link to={card.uri} className="graphic-card anchor">
      <div className="graphic-card__section">
        <div className="graphic-card__header">
          <span className="graphic-card__header--title">{card.title}</span>
        </div>
        <div className="graphic-card__body">
          <div className="graphic-card__body__paragraph">{card.abstract}</div>
          <div>
            <span className="tags--topic">{card.section}</span>
            <span className="tags--date">
              {moment(card.created_date).fromNow()}
            </span>
          </div>
        </div>
      </div>
      <div className="graphic-card__section">
        <img src={card.multimedia[0].url} alt="graphic" />
        <span className="caption my-1">{card.multimedia[0].copyright}</span>
      </div>
    </Link>
  );
};

export default GraphicCard;
