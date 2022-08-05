import React, { useState, useEffect } from "react";

const Briefing = () => {
  const [weather, setWeather] = useState({});
  const [rates, setRates] = useState({});
  const [briefing, setBriefing] = useState([]);

  console.log(weather);

  useEffect(() => {
    try {
      const key = "qXeixuscPMPwQiAGAHHXhoSkt2zDb9O9";
      const urls = [
        "https://api.openweathermap.org/data/2.5/weather?q=Mexico&units=metric&APPID=8e468cee5f97361ef43dbce5d6159f29",
        `https://api.nytimes.com/svc/news/v3/content/all/all.json?api-key=${key}`,
      ];

      const promises = urls.map((url) => fetch(url).then((res) => res.json()));
      Promise.all(promises).then((data) => {
        console.log(data);
        setWeather(data[0]);
        setBriefing(data[1].results);
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

  const top3Briefing = briefing.length
    ? briefing.slice(0, 3).map((item) => {
        return (
          <div className="briefing__briefing-list__item" key={item.title}>
            <a href={item.url} target="_blank" className="compact-card anchor">
              {item.thumbnail_standard ? (
                <img
                  src={item.thumbnail_standard}
                  className="compact-card__thumbnail"
                  alt="multimedia"
                />
              ) : null}

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

  return (
    <section className="briefing">
      <div className="briefing__briefing-list">{top3Briefing}</div>
      {topRates}
      {forecast}
    </section>
  );
};

export default Briefing;
