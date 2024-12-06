import React, { useState, useEffect } from "react";
import CompactCard from "../__ui_components__/CompactCard";

const Briefing = () => {
  const [weather, setWeather] = useState({});
  const [rates, setRates] = useState({});
  const [briefing, setBriefing] = useState([]);

  useEffect(() => {
    try {
      const urls = [
        `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/weather?q=Mexico&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`,
        `${process.env.REACT_APP_NYT_URL}/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      ];

      const promises = urls.map((url) => fetch(url).then((res) => res.json()));
      Promise.all(promises).then((data) => {
        if(data && data[0] && data[1] && data[1].results) {
          setWeather(data[0]);
          setBriefing([...data[1].results].slice(0,3));
        }
      });
    } catch (error) {
      console.log(error);
    }

    const requestOptions = {
      method: "GET",
      redirect: "follow",
      headers: { apikey: "q4S1EHOSKijVZoeRrtSUS8ILn1eoKfLw" },
    };

    const response = fetch(
      `https://api.apilayer.com/exchangerates_data/latest?symbols=MXN,CAD,GBP&base=USD`,
      requestOptions
    )
      .then((res) => res.json())
      .then((data) => setRates(data));
  }, []);

  const topRates = rates.rates ? (
    <span className="briefing__fx-rates" key={Math.random() * 0.33}>
      <span className="briefing__fx-rates--rate">
        <b>MXN</b>
        <span>{rates.rates["MXN"].toFixed(2)}</span>
      </span>
      <span className="briefing__fx-rates--rate">
        <b>CAD</b>
        <span>{rates.rates["CAD"].toFixed(2)}</span>
      </span>
      <span className="briefing__fx-rates--rate">
        <b>GBP</b>
        <span>{rates.rates["GBP"].toFixed(2)}</span>
      </span>
    </span>
  ) : null;

  const forecast = weather.name ? (
    <div className="briefing__forecast boder-right-none">
      <div className="briefing__forecast__temp">
        <img
          src={`http://openweathermap.org/img/wn/10d@2x.png`}
          className="briefing__forecast__temp--img"
          alt="forecast"
        />
        <div>
          <span className="briefing__forecast__temp__measure">
            {Math.round(weather.main.temp)}
          </span>
          <div className="d-flex">
            <span className="briefing__forecast__temp__measure--max">
              {Math.round(weather.main.temp_max)}
            </span>
            <span className="briefing__forecast__temp__measure--min">
              {Math.round(weather.main.temp_min)}
            </span>
          </div>
        </div>
      </div>
      <span className="briefing__forecast__temp--location">{weather.name}</span>
    </div>
  ) : null;

  const top3Briefing = briefing.length > 0
    ? briefing.map((item) => {
        return (
          <div className="briefing__briefing-list__item" key={item.title}>
            <CompactCard card={item} />
          </div>
        );
      })
    : null;

  return (
    <section className="briefing">
      <div className="briefing__briefing-list">{top3Briefing}</div>
      {topRates}
      {forecast}
    </section>
  );
};

export default Briefing;
