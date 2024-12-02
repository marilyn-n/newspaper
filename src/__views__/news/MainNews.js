import React from 'react';
import GraphicCard from '../../__ui_components__/GraphicCard';
import BlockArticle from '../../__ui_components__/BlockArticle';

const MainNews = ({ news }) => {
    const mainNewscolumn = news.slice(0, Math.floor(news.length / 2));    
    const mainColumnList = mainNewscolumn.length ?
    (
      mainNewscolumn.map((item, index) => {
        if(index === 0) {
          return(
            <div key={item.title}>
              <GraphicCard card={item} />
              <div className="double-divider"></div>
            </div>
          )
        } else if (index % 3 === 0){
          return (
          <div key={item.title}>
            <BlockArticle data={item} />
            <div className="single-divider"></div>
          </div>
          )
        }else {
          return (
            <div key={item.title}>
              <GraphicCard card={item} />
              <div className="single-divider"></div>
            </div>
          )
        }
      })
    ): null;

  return (
    <div className="main-column">
      { mainColumnList }
    </div>
  )
}

export default MainNews;
