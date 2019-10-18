import React from 'react';

const GraphicCard = () => {
  return (
    <div className="graphic-card">
      <div className="graphic-card__section pr-3">
        <div className="graphic-card__header">
          <span className="graphic-card__header--title">
            Stand by Trump Because They Like What He Does, Republicans.
          </span>
        </div>
        <div className="graphic-card__body">
          <div className="graphic-card__body__paragraph">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
            accusantium doloremque laudantium, totam rem aperiam, eaque ip
            sa quae ab illo inventore veritatis et quasi architecto beatae 
            vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia vol
            uptas sit aspernatur aut odit aut fugit, sed quia consequuntur 
            magni dolores eos qui ratione voluptatem sequi nesciunt. Neque 
            porro.
            <div className="graphic-card__body__paragraph--tags">
              <span>Top news</span>
              <span>1 week ago</span>          
            </div>
          </div>
        </div>
      </div>
      <div className="graphic-card__section pl-3">
        <img src="https://www.wikihow.com/images/6/64/Stop-a-Dog-from-Jumping-Step-6-Version-2.jpg"/>
        <span className="graphic-card__section--caption">iStock by Getty Images</span>
      </div>
    </div>
  );
}

export default GraphicCard;
