import React from 'react';
import { NavLink } from 'react-router-dom';

const GraphicCard = () => {
  return (
    <NavLink to="/category:id/new:id" className="graphic-card anchor">
      <div className="graphic-card__section pr-3">
        <div className="graphic-card__header">
          <span className="graphic-card__header--title">
            Stand by Trump Because They Like What He Does, Republicans.
          </span>
        </div>
        <span className="graphic-card__body">
          <span className="graphic-card__body__paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ip
            sa quae ab illo inventore veritatis et quasi architecto beatae 
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia vol
            uptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro.
          </span>
          <div className="graphic-card__body__paragraph--tags">
            <span>Top news</span>
            <span>1 week ago</span>          
          </div>
        </span>
      </div>
      <div className="graphic-card__section pl-3">
        <img src="https://www.wikihow.com/images/6/64/Stop-a-Dog-from-Jumping-Step-6-Version-2.jpg" alt="graphic"/>
        <span className="caption">iStock by Getty Images</span>
      </div>
    </NavLink>
  );
}

export default GraphicCard;
