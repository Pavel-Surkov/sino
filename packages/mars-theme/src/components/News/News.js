import React from "react";
import Hero from "../constant/HeroSection";
import NewsList from "./NewsList/NewsList";
import MediaContact from "./MediaContact/MediaContact";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const News = ({ state, post }) => {
  const options = state.source.get("acf-settings");
  console.log('options page');
  console.log(options);
  return (
    <NewsWrapper>
      <Hero title={options.acf.news_top_banner_title} image={options.acf.news_top_banner_image.url} />
      <NewsList post={post} />
      <MediaContact post={options} />
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div``;

export default connect(News);
