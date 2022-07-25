import React from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../../base/functions";

import offerImage from "../../../../assets/images/ground-offer-img.jpg";
import offerImage2x from "../../../../assets/images/ground-offer-img@2x.jpg";
import roadImg from "../../../../assets/images/services-road-transport-hero.jpg";
import roadImg2x from "../../../../assets/images/services-road-transport-hero@2x.jpg";

const offerInfo = {
  title: "What We Offer",
  paragraphs: [
    `In our fast-moving world, the best solution today might not be appropriate for tomorrow, but thanks to our extensive international network and experienced teams of ground freight specialists, Sino Logistics can react swiftly to market fluctuations and tailor our solutions to your particular needs, helping you gain a competitive advantage.`,
    `By combining our expertise in cargo management with our global road and rail network, you can rest assured that your goods are on route to their destination safely and on time, every time. Whether you have multiple full loads every week, a single shipment, or a few pallets, we can handle your cargo and provide the best solution for your ground freight needs.`,
    `We utilize state-of-the-art tracking technology to monitor and safeguard your shipments as we transport them via road or rail to their destination, ensuring that you always know the whereabouts of your goods.`,
  ],
  image: offerImage,
  image2x: offerImage2x,
};

const roadInfo = {
  title: "Road & Rail",
  paragraphs: [
    `While road transportation grants you access to fast, efficient, and reliable services with advanced digital tools, rail is secure, stable, and punctual – and has amongst the lowest environmental impact of any mode of transport.`,
    `No matter the frequency, size, or type of your shipments, we will ensure you get the transport solution that matches your needs precisely, and with traffic and rail hubs centered in key locations and offices located worldwide, we make sure your cargo is delivered safely and efficiently wherever it needs to go.`,
    `All of our customer service agents are highly experienced freight forwarders who know your market and local transport conditions. In addition, our ground freight specialists apply global knowledge to their local know-how, so whether you need to send fridges or flowers, you can rest assured that your cargo will arrive safely and on time, allowing you to focus more on your core business.`,
  ],
  image: roadImg,
  image2x: roadImg2x,
};

const Advantages = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <ContentBlock>
          <TitleWrapper className="title-wrapper">
            <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 24}>
              {offerInfo.title}
            </Title>
          </TitleWrapper>
          <Text className="text">
            {offerInfo.paragraphs.map((p) => (
              <p key={p.slice(0, 10)}>{p}</p>
            ))}
          </Text>
          <ImageWrapper>
            <img
              src={offerInfo.image}
              srcSet={`${offerInfo.image} 1x, ${offerInfo.image2x} 2x`}
              alt=""
            />
          </ImageWrapper>
        </ContentBlock>
        <ContentBlock data-image="left">
          <TitleWrapper className="title-wrapper">
            <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 24}>
              {roadInfo.title}
            </Title>
          </TitleWrapper>
          <Text className="text">
            {roadInfo.paragraphs.map((p) => (
              <p key={p.slice(0, 10)}>{p}</p>
            ))}
          </Text>
          <ImageWrapper>
            <img
              src={roadInfo.image}
              srcSet={`${roadInfo.image} 1x, ${roadInfo.image2x} 2x`}
              alt=""
            />
          </ImageWrapper>
        </ContentBlock>
      </Container>
    </Section>
  );
};

const ImageWrapper = styled.div`
  & img {
    border-radius: 20px;
    max-width: 100%;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 24px;
    & img {
      width: 100%;
    }
  }
`;

const Text = styled.div`
  max-width: 634px;
  & p {
    ${font(18, 30)};
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    order: 1;
    max-width: none;
  }
`;

const TitleWrapper = styled.div`
  grid-column: 1 / 3;
  @media screen and (max-width: 991px) {
    grid-column: 1 / 2;
  }
`;

const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 52px) calc(50% - 12px);
  grid-column-gap: 64px;
  margin-bottom: 192px;
  &:last-of-type {
    margin-bottom: 0;
  }
  &[data-image="left"] {
    & .text {
      order: 1;
    }
    & .title-wrapper {
      grid-column: 2 / 3;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    margin-bottom: 96px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &[data-image="left"] {
      & .title-wrapper {
        grid-column: 1 / 2;
      }
    }
  }
`;

const Section = styled.section`
  padding-top: 152px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(Advantages);
