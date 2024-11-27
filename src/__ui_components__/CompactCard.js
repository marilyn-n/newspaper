import React from 'react';
import { Link } from 'react-router-dom';

const CompactCard = () => {
  return (
    <Link to={} className="compact-card anchor">
      <img src="https://picsum.photos/55" className="compact-card__thumbnail"/>
      <div className="compact-card__text">
        <span className="compact-card__text--title">Title</span>
        <span className="compact-card__text--subtitle">Subtitle lorem ipsum dolor</span>
      </div>
    </Link>
  );
}

export default CompactCard;
