import React, { useState, useEffect } from "react";

const Briefing = () => {
  const [weather, setWeather] = useState([]);
  const [rates, setRates] = useState([]);
  const [briefing, setBriefing] = useState([]);

  const topRates = rates.length
    ? rates.map((item) => {
        const MXN = Number(item.rates["MXN"]).toFixed(2);
        const USD = Number(item.rates["USD"]).toFixed(2);
        const GBP = Number(item.rates["GBP"]).toFixed(2);
        return (
          <span className="briefing__fx-rates" key={Math.random() * 0.33}>
            <span className="briefing__fx-rates--rate">
              <b>MXN</b>
              <span>{MXN}</span>
            </span>
            <span className="briefing__fx-rates--rate">
              <b>USD</b>
              <span>{USD}</span>
            </span>
            <span className="briefing__fx-rates--rate">
              <b>GBP</b>
              <span>{GBP}</span>
            </span>
          </span>
        );
      })
    : null;

  const forecast = weather.length
    ? weather.map((item) => {
        const location = item.name;
        const temperature = Math.round(item.main.temp);
        const maxTemp = Math.round(item.main.temp_max);
        const minTemp = Math.round(item.main.temp_min);
        const icon = item.weather[0].icon;
        const src = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        return (
          <div className="briefing__forecast boder-right-none" key={item.id}>
            <div className="briefing__forecast__temp">
              <img
                src={src}
                className="briefing__forecast__temp--img"
                alt="forecast"
              />
              <div>
                <span className="briefing__forecast__temp__measure">
                  {temperature} °C
                </span>
                <div className="d-flex">
                  <span className="briefing__forecast__temp__measure--max">
                    {maxTemp}°
                  </span>
                  <span className="briefing__forecast__temp__measure--min">
                    {minTemp}°
                  </span>
                </div>
              </div>
            </div>
            <span className="briefing__forecast__temp--location">
              {location}
            </span>
          </div>
        );
      })
    : null;

  const top3Briefing = briefing.length
    ? briefing.slice(0, 3).map((item) => {
        return (
          <div className="briefing__briefing-list__item" key={item.title}>
            <a href={item.url} target="_blank" className="compact-card anchor">
              <img
                src={item.thumbnail_standard}
                className="compact-card__thumbnail"
                alt="multimedia"
              />
              <div className="compact-card__text">
                <span className="compact-card__text--title">{item.title}</span>
                <span className="compact-card__text--subtitle">
                  {item.abstract}
                </span>
              </div>
            </a>
          </div>
        );
      })
    : null;

  useEffect(() => {
    try {
      const key = "PBgITfXgkBCpszcYJifHtpDtqoe18dqN";
      Promise.all([
        fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=Toronto&units=metric&APPID=8e468cee5f97361ef43dbce5d6159f29"
        ),
        fetch(
          `https://api.exchangeratesapi.io/latest?symbols=USD,GBP,MXN&base=CAD`
        ),
        fetch(
          `https://api.nytimes.com/svc/news/v3/content/nyt/briefing.json/get?api-key=${key}`
        ),
      ])
        .then((responses) =>
          Promise.all(responses.map((response) => response.json()))
        )
        .then((data) => {
          console.log(data);
          console.log("ko");
          setWeather([data[0]]);
          setRates([data[1]]);
          setBriefing(data[2].results);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <section className="briefing">
      <div className="briefing__briefing-list">{top3Briefing}</div>
      {topRates}
      {forecast}
    </section>
  );
};

export default Briefing;
