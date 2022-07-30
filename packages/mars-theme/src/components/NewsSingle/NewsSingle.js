import React from "react";
import Hero from "../constant/HeroSection";
import MediaContact from "./MediaContact/MediaContact";
import NewsPost from "./NewsPost/NewsPost";
import OtherNews from "./OtherNews/OtherNews";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const NewsSingle = () => {
  return (
    <NewsSingleWrapper>
      <Hero image={news} title="Media" />
      <NewsPost />
      <OtherNews />
      <MediaContact />
    </NewsSingleWrapper>
  );
};

const NewsSingleWrapper = styled.div``;

export default connect(NewsSingle);
