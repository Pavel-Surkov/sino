import React from "react";
import Container from "../../constant/Container";
import Position from "./Position/Position";
import { styled } from "frontity";

import company from "../../../assets/images/company-image.jpg";
import company2x from "../../../assets/images/company-image@2x.jpg";

const Info = () => {
  return (
    <Section>
      <Container>
        <Position />
        <InfoBlock>
          <Content></Content>
          <ImageWrapper>
            <img
              src={company}
              srcSet={`${company} 1x, ${company2x} 2x`}
              alt="company"
            />
          </ImageWrapper>
        </InfoBlock>
      </Container>
    </Section>
  );
};

const Content = styled.div``;

const ImageWrapper = styled.div``;

const InfoBlock = styled.div`
  padding-top: 96px;
  padding-bottom: 31px;
  border-bottom: 1px solid var(--blue-600);
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 0;
    border: none;
  }
`;

const Section = styled.section`
  padding-top: 72px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default Info;
