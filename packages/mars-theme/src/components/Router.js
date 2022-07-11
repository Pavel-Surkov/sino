import React from "react";
import { connect } from "frontity";
import Home from "./Home/Home";
import Company from "./Company/Company";

const Router = ({ state }) => {
  const currentRoute = state.router.link;

  return (
    <>
      {currentRoute === "/" && <Home />}
      {currentRoute === "/company/" && <Company />}
    </>
  );
};

export default connect(Router);
