import React from 'react';

const CompactCard = () => {
  return (
    <div className="compact-card">
      <img src="https://picsum.photos/55" className="compact-card__thumbnail"/>
      <div className="compact-card__text">
        <span className="compact-card__text--title">Title</span>
        <span className="compact-card__text--subtitle">Subtitle lorem ipsum dolor</span>
      </div>
    </div>
  );
}

export default CompactCard;
