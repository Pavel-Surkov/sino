import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";

import { connect } from "frontity";

const Hero = ({ image, title }) => {
  return (
    <HeroSection>
      <HeroContainer>
        <ImageContainer>
          <img height="582" src={image} alt="" />
        </ImageContainer>
        <TitleWrapper>
          <Title size="l" color="white">
            {title}
          </Title>
        </TitleWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

const HeroContainer = styled(Container)`
  position: relative;
`;

const HeroSection = styled.section`
  height: 100%;
  max-height: 582px;
`;

export default connect(Hero, { injectProps: false });
