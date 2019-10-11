import React from 'react';

const MiniArticleCard = () => {
  return (
    <div className="mini-article-card">
      <div className="mini-article-card__header">
        <img src="https://www.gannett-cdn.com/-mm-/d45a1bc902cb3f4367b332e27f859c7252d4b7fa/c=0-109-2119-1306/local/-/media/2017/03/02/USATODAY/USATODAY/636240538720039138-GettyImages-509934328.jpg?width=3200&height=1680&fit=crop"/>
      </div>
      <div className="mini-article-card__body">
        <h2 className="mini-article-card__body--title">
          You Know Someone Who’s Had a Miscarriage
        </h2>
      </div>
    </div>
  );
}

export default MiniArticleCard;
