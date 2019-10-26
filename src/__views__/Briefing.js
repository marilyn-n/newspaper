import React, { Component } from 'react';
import CompactCard from '../__ui_components__/CompactCard';

class Briefing extends Component {
  state = {
    weather: [],
    rates: []
  }

  
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=8e468cee5f97361ef43dbce5d6159f29')
    .then(res => res.json())
    .then(data => {
      this.setState({ weather: [data] })
    })
    .catch(err => err)

  }

  componentWillMount() {
    fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,GBP,MXN&base=CAD`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            weather: [], 
            rates: [data]
          })
        })
  }

  render() {
    let fxRates = this.state.rates;
    const topRates = fxRates.length ?
    (
      fxRates.map(item => {
        const MXN = Number(item.rates['MXN'] ).toFixed(2);
        const USD = Number(item.rates['USD'] ).toFixed(2);
        const GBP = Number(item.rates['GBP'] ).toFixed(2);
        return(
          <span key={Math.random() * .33 }>
            <span className="fx-rates--rate">
              <b>MXN</b>
              <span>
                { MXN }
              </span>
            </span>
            <span className="fx-rates--rate">
              <b>USD</b>
              <span>
                { USD }
              </span>
            </span>
            <span className="fx-rates--rate">
              <b>GBP</b>
              <span>
                { GBP }
              </span>
            </span>
          </span>
        )
      })
    ):(null)
    

    const weather = this.state.weather;
    const forecast = weather.length ?
    (
      weather.map(item => {
      const location = item.name
      const temperature = Math.round(item.main.temp)
      const maxTemp = Math.round(item.main.temp_max)
      const minTemp = Math.round(item.main.temp_min)
      const icon = item.weather[0].icon
      const src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      
      return(
        <div className="briefing__forecast" key={item.id}>
          <div className="briefing__forecast__temp">
            <img src={src} className="briefing__forecast__temp--img" alt="forecast"/>
            <div>
              <span className="briefing__forecast__temp__measure">{ temperature } °C</span>
              <div className="d-flex">
                <span className="briefing__forecast__temp__measure--max">{ maxTemp }°</span>
                <span className="briefing__forecast__temp__measure--min">{ minTemp }°</span>
              </div>
            </div>
          </div>
          <span className="briefing__forecast__temp--location">{ location }</span>
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
          <div className="briefing__item fx-rates">
            { topRates }
          </div>
          <div className="briefing__item forecast">
              { forecast }
          </div>
      </section>
    );
  }

}

export default Briefing;
