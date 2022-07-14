import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import InfoBlock from "./InfoBlock";
import DecorativeLine from "../../constant/DecorativeLine";
import { connect, styled } from "frontity";

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import bg from "../../../assets/images/tangchi-lee-C4agU0uKw08-unsplash.jpg";

const VisionAndMission = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Background>
        <VisionContainer>
          <LineWrapper>
            <DecorativeLine
              heightInPercent={10.29126}
              color="white"
              rotation="bottom"
            />
          </LineWrapper>
          {isMobile ? (
            <ContentWrapper>
              <Title size="m" color="white" marginBottom={24}>
                Our Vision & Mission
              </Title>
              <Swiper
                modules={[Pagination]}
                spaceBetween={24}
                pagination={{ clickable: true }}
              >
                <SwiperSlide>
                  <InfoBlock title="Our Vision">
                    <p>
                      Sustainable growth is at the core of our business ethos,
                      and we aim to develop Sino Logistics Corporation to help
                      our customers on both a local and international level.
                    </p>
                    <p>
                      Whether it be supply chain consultancy, cargo
                      consolidation, or any of our first-class logistics
                      services, we want to ensure that your logistics needs are
                      met with satisfaction.
                    </p>
                  </InfoBlock>
                </SwiperSlide>
                <SwiperSlide>
                  <InfoBlock title="Our Mission">
                    <p>
                      At Sino Logistics Corporation, we believe
                      in professionalism, efficiency, and equality. Our passion
                      for providing high-quality logistics services for our
                      customers is paralleled by our willingness to cater to our
                      staff’s development.
                    </p>
                    <p>
                      Furthermore, by continuously responding to the
                      ever-evolving market, we aspire to add value for our
                      investors and bring about positive changes in the
                      logistics industry.
                    </p>
                  </InfoBlock>
                </SwiperSlide>
              </Swiper>
            </ContentWrapper>
          ) : (
            <ContentWrapper>
              <Title size="m" color="white" marginBottom={32}>
                Our Vision & Mission
              </Title>
              <Content>
                <InfoBlock title="Our Vision">
                  <p>
                    Sustainable growth is at the core of our business ethos, and
                    we aim to develop Sino Logistics Corporation to help our
                    customers on both a local and international level.
                  </p>
                  <p>
                    Whether it be supply chain consultancy, cargo consolidation,
                    or any of our first-class logistics services, we want
                    to ensure that your logistics needs are met with
                    satisfaction.
                  </p>
                </InfoBlock>
                <InfoBlock title="Our Mission">
                  <p>
                    At Sino Logistics Corporation, we believe
                    in professionalism, efficiency, and equality. Our passion
                    for providing high-quality logistics services for our
                    customers is paralleled by our willingness to cater to our
                    staff’s development.
                  </p>
                  <p>
                    Furthermore, by continuously responding to the ever-evolving
                    market, we aspire to add value for our investors and bring
                    about positive changes in the logistics industry.
                  </p>
                </InfoBlock>
              </Content>
            </ContentWrapper>
          )}
        </VisionContainer>
      </Background>
    </Section>
  );
};

const VisionContainer = styled(Container)`
  position: relative;
`;

const LineWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
`;

const ContentWrapper = styled.div`
  position: relative;
  padding-top: 205px;
  padding-bottom: 243px;
  @media screen and (max-width: 991px) {
    padding: 48px 0;
    & .swiper {
      border-radius: 20px;
      &-slide {
        height: auto;
      }
    }
    & div.swiper-pagination {
      bottom: 40px;
      & .swiper-pagination-bullet {
        margin: 0;
        margin-right: 32px;
        width: 16px;
        height: 16px;
        background: transparent;
        border: 2px solid var(--white);
        border-radius: 50%;
        position: relative;
        opacity: 1;
        &-active::before {
          content: "";
          position: absolute;
          border-radius: 50%;
          width: 6px;
          height: 6px;
          background: var(--white);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        &:last-child {
          margin-right: 0;
        }
      }
    }
    & h3 {
      letter-spacing: 0.04em;
    }
    & div[data-element="block"] {
      padding-bottom: 80px;
    }
  }
`;

const Background = styled.div`
  position: relative;
  background: url(${bg}) no-repeat 50% / cover;
  @media screen and (max-width: 576px) {
    background-position: 55% 45%;
  }
`;

const Section = styled.section`
  padding-top: 192px;
  position: relative;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
  }
`;

export default connect(VisionAndMission);
