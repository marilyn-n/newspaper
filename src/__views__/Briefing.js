import React, { Component } from 'react';
import CompactCard from '../__ui_components__/CompactCard';

class Briefing extends Component {
  state = {
    weather: []
  }
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=8e468cee5f97361ef43dbce5d6159f29')
    .then(res => res.json())
    .then(data => {
      this.setState({ weather: [data] })
    })
    .catch(err => err)
  }

  render() {
    const data = this.state.weather;
    const clima = data.length ?
    (data.map(item => {
      const location = item.name
      const temperature = item.main.temp
      const maxTemp = item.main.temp_max
      const minTemp = item.main.temp_min
      const icon = item.weather[0].icon
      const src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      
      return(
        <div className="briefing__forecast" key={item.id}>

          <div className="briefing__forecast__temp">
            <img src={src}/>
            <div className="">
              <span>{ temperature }</span>
              <span className="d-flex">
                <span className="briefing__forecast__temp--max mr-2">
                  { maxTemp }
                </span>
                <span className="briefing__forecast__temp--min">
                  { minTemp }
                </span>
              </span>
            </div>

          </div>
          
          <div>{ location }</div>
        </div>
        
      )
    })):(null)

    return(
      <section className="briefing">
          <div className="briefing__item">
            <CompactCard/>
          </div>
          <div className="briefing__item">
            <CompactCard/>
          </div>
          <div className="briefing__item">
            <CompactCard/>
          </div>
          <div className="briefing__item">
            <span>
              { clima }
            </span>
          </div>
      </section>
    );
  }

}

export default Briefing;
