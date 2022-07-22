import React from "react";
import Hero from "../constant/HeroSection";
import Container from "../constant/Container";
import Title from "../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../base/functions";

import investor from "../../assets/images/johan-taljaard-investor-unsplash.png";

const Investor = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <InvestorWrapper>
      <Hero title={"Investor"} image={investor} />
      <Content>
        <Container>
          <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 40}>
            Watch this space for updates
          </Title>
          <Text>
            <p>
              Sino Logistics is preparing to list on The Stock Exchange
              of Thailand (SET) in the near future. SET is ASEAN’s 2nd largest
              stock exchange and the world’s 23rd by market capitalization
              at US$564 billion as of May 2022.
            </p>
            <p>
              Potential investors will be able to find all relevant information
              relating to investment opportunities in Sino Logistics on this
              page of our website.
            </p>
            <p>
              If you are interested in following our investor updates, please
              bookmark this page and check back regularly. More information will
              be added to soon.
            </p>
          </Text>
        </Container>
      </Content>
    </InvestorWrapper>
  );
};

const Text = styled.div`
  max-width: 993px;
  & p {
    margin: 0;
    ${font(18, 30)};
    font-weight: 300;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Content = styled.div`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 144px;
  }
`;

const InvestorWrapper = styled.div``;

export default connect(Investor);
