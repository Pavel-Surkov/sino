import React from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import PrimaryBtn from "../../../constant/PrimaryButton";
import DecorativeLine from "../../../constant/DecorativeLine";
import { flex } from "../../../base/functions";
import { styled, connect } from "frontity";

import bg from "../../../../assets/images/ground-freight-offer-bg.jpg";

const Contact = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <BgWrapper>
        <BgImage src={bg} alt="" />
        <DarkLayer />
      </BgWrapper>
      <ContactContainer>
        <LineWrapper>
          <DecorativeLine
            heightInPercent={13.135068}
            rotation="bottom"
            color="white"
          />
        </LineWrapper>
        <Content>
          <TitleWrapper>
            <Title size="xs" color="white" marginBottom={isMobile ? 32 : 48}>
              Speak to Our Ground Freight Expert
            </Title>
          </TitleWrapper>
          <ButtonsWrapper>
            <PrimaryBtn
              type="link"
              link="/quote/"
              maxWidth={"325px"}
              content="Get a Quote"
            />
            <PrimaryBtn
              type="link"
              link="/contact/"
              maxWidth={"325px"}
              content="Contact Us"
            />
          </ButtonsWrapper>
        </Content>
      </ContactContainer>
    </Section>
  );
};

const TitleWrapper = styled.div``;

const LineWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
`;

const ButtonsWrapper = styled.div`
  ${flex()};
  gap: 24px;
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (max-width: 991px) {
    object-position: 75% 50%;
  }
  @media screen and (max-width: 576px) {
    height: 100%;
    object-position: 83% 0%;
  }
`;

const DarkLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #13131366;
`;

const BgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-position: right bottom;
`;

const Content = styled.div`
  padding-top: 366px;
  padding-bottom: 281px;
  @media screen and (max-width: 991px) {
    padding: 117px 0;
  }
`;

const ContactContainer = styled(Container)`
  position: relative;
`;

const Section = styled.section`
  margin-top: 192px;
  overflow: hidden;
  position: relative;
  @media screen and (max-width: 991px) {
    margin-top: 128px;
  }
`;

export default connect(Contact);