import React, { useState, useEffect } from "react";
import CompactCard from "../__ui_components__/CompactCard";
import useFetch from "../hooks/useFetch";

const Briefing = () => {
  const requestOptions = {
    method: "GET",
    redirect: "follow",
    headers: { apikey: "q4S1EHOSKijVZoeRrtSUS8ILn1eoKfLw" },
  };

  const theWeather = useFetch(
    `${process.env.REACT_APP_WEATHER_API_URL}/data/2.5/weather?q=Mexico&units=metric&APPID=${process.env.REACT_APP_WEATHER_API_KEY}`,
    "theWeather"
  );
  const rates = useFetch(
    `https://api.apilayer.com/exchangerates_data/latest?symbols=MXN,CAD,GBP&base=USD`,
    "theLatestRates",
    requestOptions
  );
  const theLatestNYTContent = useFetch(
    `${process.env.REACT_APP_NYT_URL}/svc/news/v3/content/all/all.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
    "theLatestNYTContent"
  );

  const topRates = rates ? (
    <span className="briefing__fx-rates" key={Math.random() * 0.33}>
      <span className="briefing__fx-rates--rate">
        <b>MXN</b>
        <span>{rates["MXN"]}</span>
      </span>
      <span className="briefing__fx-rates--rate">
        <b>CAD</b>
        <span>{rates["CAD"]}</span>
      </span>
      <span className="briefing__fx-rates--rate">
        <b>GBP</b>
        <span>{rates["GBP"]}</span>
      </span>
    </span>
  ) : null;

  const forecast = theWeather.name ? (
    <div className="briefing__forecast boder-right-none">
      <div className="briefing__forecast__temp">
        <img
          src={`http://openweathermap.org/img/wn/10d@2x.png`}
          className="briefing__forecast__temp--img"
          alt="forecast"
        />
        <div>
          <span className="briefing__forecast__temp__measure">
            {Math.round(theWeather.main.temp)}
          </span>
          <div className="d-flex">
            <span className="briefing__forecast__temp__measure--max">
              {Math.round(theWeather.main.temp_max)}
            </span>
            <span className="briefing__forecast__temp__measure--min">
              {Math.round(theWeather.main.temp_min)}
            </span>
          </div>
        </div>
      </div>
      <span className="briefing__forecast__temp--location">
        {theWeather.name}
      </span>
    </div>
  ) : null;

  const top3Briefing = theLatestNYTContent.results?.slice(0, 3).map((item) => {
    return (
      <div className="briefing__briefing-list__item" key={item.title}>
        <CompactCard card={item} />
      </div>
    );
  });

  return (
    <section className="briefing">
      <div className="briefing__briefing-list">{top3Briefing}</div>
      {topRates}
      {forecast}
    </section>
  );
};

export default Briefing;
