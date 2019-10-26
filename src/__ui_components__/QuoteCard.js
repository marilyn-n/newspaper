import React from 'react';
import { NavLink } from 'react-router-dom';

const QuoteCard = () => {
  return (
    <NavLink to="/category:id/new:id" className="quote-card anchor">
      <div className="quote-card__quote">
          <h2 className="quote-card__quote--title">Michelle Goldberg</h2>
          <img src="https://www.hd-wallpapersdownload.com/script/bulk-upload/lion-running-images.jpg" className="quote-card__quote--author"/>      
      </div>
      <div>
        <p className="quote-card__quote--subtitle">What if the Supreme Court Had an L.G.B.T. Justice?</p>
      </div>
    </NavLink>
  );
}

export default QuoteCard;
