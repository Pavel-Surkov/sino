import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";

import { connect, styled } from "frontity";

const Hero = ({ image, title }) => {
  return (
    <HeroSection>
      <ImageContainer>
        <img height="582" src={image} alt="" />
      </ImageContainer>
      <HeroContainer>
        <TitleWrapper>
          <Title size="l" color="white">
            {title}
          </Title>
        </TitleWrapper>
      </HeroContainer>
    </HeroSection>
  );
};

const ImageContainer = styled.div`
  height: 582px;
  background: var(--black);
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const TitleWrapper = styled.div`
  position: absolute;
  z-index: 1;
  left: 0;
  bottom: 32px;
`;

const HeroContainer = styled(Container)`
  position: relative;
`;

const HeroSection = styled.section`
  height: 100%;
  max-height: 582px;
`;

export default connect(Hero, { injectProps: false });
