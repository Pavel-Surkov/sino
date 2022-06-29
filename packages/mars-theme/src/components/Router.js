import React from "react";
import { connect } from "frontity";
import Home from "./Home";

const Router = ({ state }) => {
  const currentPage = state.router.link;

  return <>{currentPage === "/" && <Home />}</>;
};

export default connect(Router);
