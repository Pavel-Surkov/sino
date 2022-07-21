import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import { styled, connect } from "frontity";
import { font } from "../../base/functions";

import buisness from "../../../assets/images/buisness-scheme.svg";
import organization from "../../../assets/images/organization-scheme.svg";

const Organization = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <Title size="m" color="blue" marginBottom={isMobile ? 24 : 64}>
          Organization & Business Structure
        </Title>
        <Block>
          <Title size="xs" color="blue" marginBottom={32}>
            Organization Structure
          </Title>
          <Scheme>
            <img src={organization} alt="organization structure" />
          </Scheme>
        </Block>
        <Block>
          <Title size="xs" color="blue" marginBottom={32}>
            Business Structure
          </Title>
          <Scheme>
            <img src={buisness} alt="buisness structure" />
          </Scheme>
        </Block>
      </Container>
    </Section>
  );
};

const Scheme = styled.div`
  & img {
    max-width: 100%;
  }
`;

const Block = styled.div`
  margin-bottom: 64px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 48px;
    &:last-child {
      margin-bottom: 0;
    }
    & h4 {
      ${font(24, 32)};
      letter-spacing: 0.04em;
      font-weight: 400;
      margin-bottom: 24px;
    }
  }
`;

const Section = styled.div`
  position: relative;
  padding-top: 336px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
  }
`;

export default connect(Organization);
