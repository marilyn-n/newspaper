import React from 'react';
import { author } from '../Helpers.js';

const Opinion = ({ featuredOpinions }) => {
  const topTenOpinions = featuredOpinions.slice(0, 11);
  const opinionsColOne = topTenOpinions.slice(0, topTenOpinions.length/ 2);
  const opinionsColTwo = topTenOpinions.slice(Math.floor(topTenOpinions.length/ 2), topTenOpinions.length)
  
  const opinionsListOne = featuredOpinions.length > 0 ? 
  (
    opinionsColOne.map((item) => {
      return(
        <a href={item.url} target="_blank" className="quote-card anchor" key={item.title}>
          <div className={ item.byline ? "quote-card__quote": "d-none"}>
              <h2 className="tags--by">
                { author(item.byline) }
              </h2>
              <img src={ item.multimedia[0].url } className="quote-card__quote--author" alt="multimedia"/>      
          </div>
          <div>
            <p className="quote-card__quote--subtitle">
              { item.title }
            </p>
          </div>
        </a>
      )
    })
  ):(null)

  const opinionsListTwo = opinionsColTwo.length ?
  (
    opinionsColTwo.map(item => {
      return(
        <a href={item.url} target="_blank" className="quote-card anchor" key={item.title}>
          <div className={ item.byline ? "quote-card__quote": "d-none"}>
            <h2 className="tags--by">
              { author(item.byline) }
            </h2>
            <img src={ item.multimedia[0].url } className="quote-card__quote--author" alt="multimedia"/>      
          </div>
          <div>
            <p className="quote-card__quote--subtitle">
              { item.title }
            </p>
          </div>
        </a>
      )
    })
  ):(null)

  return (
    <div className="opinion-wrapper">
        <div className="opinion-wrapper--list-one">
          { opinionsListOne }
        </div>
        <div className="opinion-wrapper--list-two">
          { opinionsListTwo }
        </div>
      </div>
  )
}

export default Opinion;