import React from "react";
import Hero from "../constant/HeroSection";
import NewsList from "./NewsList/NewsList";
import MediaContact from "./MediaContact/MediaContact";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const News = ({ state, post }) => {
  return (
    <NewsWrapper>
      <Hero image={post.acf.news_top_banner_image.url} title={post.acf.news_top_banner_title} />
      <NewsList post={post} />
      <MediaContact post={post} />
    </NewsWrapper>
  );
};

const NewsWrapper = styled.div``;

export default connect(News);
