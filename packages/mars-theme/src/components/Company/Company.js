import React from "react";
import { connect } from "frontity";

const Company = ({ state }) => {
  return (
    <CompanyWrapper>
      <Hero />
    </CompanyWrapper>
  );
};

export default connect(Company);
