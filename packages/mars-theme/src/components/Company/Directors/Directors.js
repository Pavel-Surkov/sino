import React from "react";
import DirectorsMain from "./DirectorsMain/DirectorsMain";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";

const Directors = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <DirectorsElement>
      <DirectorsMain />
    </DirectorsElement>
  );
};

const DirectorsElement = styled.div`
  & .section {
    padding-top: 192px;
    @media screen and (max-width: 991px) {
      padding-top: 128px;
    }
  }
`;

export default connect(Directors);
