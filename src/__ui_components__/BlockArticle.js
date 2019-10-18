import React from 'react';

const BlockArticle = () => {
  return (
    <div className="block-article">
      <div className="block-article__header">
        <h3 className="block-article__header--label-lg">Johnson & Johnson Recalls Asbestos-Tainted Baby Powder</h3>
      </div>
      <div className="block-article__body">
        <p className="block-article__body--paragraph">
          Eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <span className="block-article__body__tags">
          <span>
            T-Magazine
          </span>
          <span>
            28m ago
          </span>
        </span>
      </div>
    </div>
  );
}

export default BlockArticle;
