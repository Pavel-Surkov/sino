import React from "react";
import Title from "../../../constant/Title";
import ImageSection from "../../../constant/ImageSection";
import { styled, connect } from "frontity";
import { font } from "../../../base/functions";

import directors from "../../../../assets/images/directors/directors.png";
import directors2x from "../../../../assets/images/directors/directors@2x.png";

const DirectorsMain = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <ImageSection image={directors} image2x={directors2x} imagePosition="right">
      {isMobile ? (
        <>
          <Title size="m" color="blue" marginBottom={24}>
            Board of Directors & Executives
          </Title>
          <Text>
            <p>
              Our management team has a collective wealth of experience in the
              logistics industry, allowing Sino Logistics to offer best-in-class
              services that match our customers’ ever-changing needs.
            </p>
          </Text>
        </>
      ) : (
        <ContentWrapper>
          <Title size="m" color="blue" marginBottom={24}>
            Board of Directors & Executives
          </Title>
          <Text>
            <p>
              Our management team has a collective wealth of experience in the
              logistics industry, allowing Sino Logistics to offer best-in-class
              services that match our customers’ ever-changing needs.
            </p>
          </Text>
        </ContentWrapper>
      )}
    </ImageSection>
  );
};

const ContentWrapper = styled.div`
  max-width: 440px;
`;

const Text = styled.div`
  & p {
    margin: 0;
    font-weight: 300;
    ${font(18, 30)};
  }
  @media screen and (max-width: 991px) {
    order: 1;
    margin-top: 24px;
  }
`;

export default connect(DirectorsMain);
