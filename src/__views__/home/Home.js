import React, { useState, useEffect } from "react";
import Briefing from "../Briefing";
import MainNews from "../news/MainNews.js";
import Opinion from "../Opinion";
import Header from "../../layout/Header";
import ArticleCard from "../../__ui_components__/ArticleCard.js";
import MiniArticleCard from "../../__ui_components__/MiniArticleCard.js";
import MediaCard from "../../__ui_components__/MediaCard.js";

const Home = () => {
  const [content, setContent] = useState({
    primaryNews: [],
    secondaryNews: [],
    opinion: [],
  });
  
  useEffect(() => {
    const urls = [
      `${process.env.REACT_APP_NYT_URL}/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
      `${process.env.REACT_APP_NYT_URL}/svc/topstories/v2/opinion.json?api-key=${process.env.REACT_APP_NYT_API_KEY}`,
    ];
    const promises = urls.map((url) => fetch(url).then((res) => res.json()));
    Promise.all(promises).then((data) => {
      if (data[0].status === "OK" && data[1].status === "OK") {
        const allNews = data;
        const opinionNews = allNews[1].results.filter(
          (item) => item.multimedia
        );
        const newsAssortment = allNews[0].results.filter(
          (item) => item.multimedia
        );
        setContent({
          ...content,
          primaryNews: newsAssortment.slice(
            0,
            newsAssortment.length / 2
          ),
          secondaryNews: newsAssortment.slice(
            newsAssortment.length / 2,
            newsAssortment.length
          ),
          opinion: opinionNews,
        });
      } else {
        console.log("Error with service in Home page");
      }
    });
  }, []);

  const firstOpinion = content.opinion.slice(0, 1);
  const featuredOpinions = content.opinion.slice(1, content.opinion.length);
  const otherNews = content.primaryNews.slice(11, 14);

  const blockOtherNews = otherNews.length
    ? otherNews.map((item) => <ArticleCard card={item} />)
    : null;

  const topEditorsPicks = content.primaryNews.slice(
    content.primaryNews.length - 3,
    content.primaryNews.length
  );

  const editorsPicks =
    topEditorsPicks.length > 0
      ? topEditorsPicks.map((item) => {
          return <MediaCard details={item} />;
        })
      : null;

  const opinionItem = (
    <div>
      <span className="label">Opinion</span>
      <div className="border-partial"></div>
      {firstOpinion[0] ? <MediaCard details={firstOpinion[0]} /> : null}
    </div>
  );

  const bottomNews =
    content.secondaryNews.length > 0
      ? content.secondaryNews.map((article) => (
          <MiniArticleCard card={article} />
        ))
      : null;

  return (
    <div className="home-wrapper">
      <Header />
      <div className="single-divider mt-0" />
      <Briefing />
      <div className="double-divider" />
      <div className="news-wrapper">
        <section className="top-home-news col-lg-8 col-md-8 col-xs-12">
          <MainNews news={content.primaryNews} />
        </section>
        <section className="opinion col-lg-4 col-md-4">
          {opinionItem}
          <Opinion featuredOpinions={featuredOpinions} />
          <div className="double-divider"></div>
          <div>
            <span className="label">Editors' Picks</span>
            <div className="border-partial"></div>
          </div>
          {editorsPicks}
        </section>

        <div className="double-divider"></div>

        {blockOtherNews ? (
          <section className="block-other-news">
            {blockOtherNews}
            <div className="double-divider"></div>
          </section>
        ) : (
          ""
        )}

        <section className="bottom-container">
          <div>
            <span className="label">News</span>
            <div className="border-partial"></div>
          </div>
          <div className="bottom-news">{bottomNews}</div>
        </section>
      </div>
    </div>
  );
};

export default Home;
