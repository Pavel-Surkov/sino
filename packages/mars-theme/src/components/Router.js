import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";
import Company from "./Company/Company";
import Careers from "./Careers/Careers";
import Contact from "./Contact/Contact";
import Investor from "./Investor/Investor";
import News from "./News/News";
import NewsSingle from "./NewsSingle/NewsSingle";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./TermsOfUse/TermsOfUse";
import RequestQuote from "./RequestQuote/RequestQuote";
import JobDetails from "./JobDetails/JobDetails";
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
    case "/news/":
      return <News post={post} />;
    case "/news-single/":
      return <NewsSingle post={post} />;
    case "/privacy-policy/":
      return <PrivacyPolicy post={post} />;
    case "/terms-of-use/":
      return <TermsOfUse post={post} />;
    case "/request-a-quote/":
      return <RequestQuote post={post} />;
    case "/job-details/":
      return <JobDetails post={post} />;
    default:
      return <PageError />;
  }
};

export default connect(Router);
