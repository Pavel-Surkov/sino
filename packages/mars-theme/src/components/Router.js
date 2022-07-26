import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";
import Company from "./Company/Company";
import Careers from "./Careers/Careers";
import Contact from "./Contact/Contact";
import Investor from "./Investor/Investor";
import AirFreight from "./Services/AirFreight/AirFreight";
import SeaFreight from "./Services/SeaFreight/SeaFreight";
import GroundFreight from "./Services/GroundFreight/GroundFreight";
import News from "./News/News";
import NewsSingle from "./News/NewsSingle/NewsSingle";
import PageError from "./PageError";

const Router = ({ state }) => {
  const currentRoute = state.router.link;
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  console.log("post");
  console.log(post);

  switch (currentRoute) {
    case "/":
      return <Home post={post} />;
    case "/careers/":
      return <Careers post={post} />;
    case "/contact/":
      return <Contact post={post} />;
    case "/investor/":
      return <Investor post={post} />;
    case "/company/":
      return <Company post={post} />;
    case "/services/air-freight/":
      return <AirFreight post={post} />;
    case "/services/sea-freight/":
      return <SeaFreight post={post} />;
    case "/services/ground-freight/":
      return <GroundFreight post={post} />;
    case "/news/":
      return <News post={post} />;
    case "/news-single/":
      return <NewsSingle post={post} />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
