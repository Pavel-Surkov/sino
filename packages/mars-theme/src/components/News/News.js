import React from "react";
import Hero from "../constant/HeroSection";
import NewsList from "./NewsList/NewsList";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const News = () => {
  return (
    <NewsWrapper>
      <Hero image={news} title="Media" />
      <NewsList />
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div``;

export default connect(News);
