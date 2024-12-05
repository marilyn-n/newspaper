import React from "react";
import { Link } from "react-router-dom";

const CompactCard = ({ card }) => {
  return (
    <Link to={card.url} className="compact-card anchor">
      {card.thumbnail_standard ? (
        <img
          src={card.thumbnail_standard}
          className="compact-card__thumbnail"
          alt="multimedia"
        />
      ) : null}

      <div className="compact-card__text">
        <span className="compact-card__text--title">{card.title}</span>
        <span className="compact-card__text--subtitle">{card.abstract}</span>
      </div>
    </Link>
  );
};

export default CompactCard;
