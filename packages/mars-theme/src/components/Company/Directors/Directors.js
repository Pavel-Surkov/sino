import React from "react";
import DirectorsMain from "./DirectorsMain/DirectorsMain";
import DirectorsSliders from "./DirectorsSliders/DirectorsSliders";
import { connect, styled } from "frontity";

const Directors = () => {
  return (
    <DirectorsElement>
      <DirectorsMain />
      <DirectorsSliders />
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
