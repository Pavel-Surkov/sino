import React from "react";
import Hero from "../constant/HeroSection";
import MediaContact from "./MediaContact/MediaContact";
import NewsPost from "./NewsPost/NewsPost";
import OtherNews from "./OtherNews/OtherNews";
import { styled, connect } from "frontity";

import news from "../../assets/images/news-poster.png";

const NewsSingle = ({ state }) => {
  const options = state.source.get("acf-settings");
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  console.log('news post')
  console.log(post)
  return (
    <NewsSingleWrapper>
      <Hero title={options.acf.news_top_banner_title} image={options.acf.news_top_banner_image.url} />
      <NewsPost post={post} />
      <OtherNews />
      <MediaContact post={options} />
    </NewsSingleWrapper>
  );
};

const NewsSingleWrapper = styled.div``;

export default connect(NewsSingle);
