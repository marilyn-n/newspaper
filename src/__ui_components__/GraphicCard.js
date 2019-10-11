import React from 'react';

const GraphicCard = () => {
  return (
    <div className="graphic-card">
      <div className="item pr-3">
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
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, cons
            ectetur, adipisci velit, sed quia non numquam eius modi tempora
            incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
            Ut enim ad minima veniam, quis nostrum exercitationem ullam co
            rporis suscipit laboriosam, nisi ut aliquid ex ea commodi cons
            equatur? 
            <div className="graphic-card__body__paragraph--tags">
              <span>Top news</span>
              <span>1 week ago</span>          
            </div>
          </div>
        </div>
      </div>
      <div className="item pl-3">
        <img src="https://www.wikihow.com/images/6/64/Stop-a-Dog-from-Jumping-Step-6-Version-2.jpg"/>
      </div>
    </div>
  );
}

export default GraphicCard;
