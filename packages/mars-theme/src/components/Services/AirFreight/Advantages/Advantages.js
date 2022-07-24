import React from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../../base/functions";

import offerImage from "../../../../assets/images/offer-img.jpg";
import offerImage2x from "../../../../assets/images/offer-img@2x.jpg";
import benefitsImg from "../../../../assets/images/benefits-img.jpg";
import benefitsImg2x from "../../../../assets/images/benefits-img@2x.jpg";

const offerInfo = {
  title: "What We Offer",
  paragraphs: [
    "Sino Logistics work around the clock to deliver tailored air freight services for when speed and time matter most. With daily worldwide departures, you can rely on Sino Logistics for air freight of all types and sizes.",
    "Thanks to our international agreements with all major airlines, our reliable air freight services allow your cargo to reach its destination swiftly and safely. In addition, we work in close partnership with our affiliated airlines to ensure all our customers receive the best prices and services.",
    "Our network stretches around the globe to keep your cargo safe on its journey from door to door. Plus, here at Sino Logistics, we go the extra mile to identify your specific needs and tailor our services to suit your air freight requirements, giving you complete control over your supply chain.",
  ],
  image: offerImage,
  image2x: offerImage2x,
};

const benefitsInfo = {
  title: "Benefits of Air Freight",
  paragraphs: [
    `In the fast-moving, challenging, and constantly changing world of air freight, our team of creative and flexible advisors can provide the best services for you. Changes in global capacity and shipping demands can happen in the blink of an eye, so we always remain vigilant of market fluctuations to provide stability for your high-value cargo.`,
    `Regardless of whether your shipments need large freighter aircraft to carry them or if they fly in commercial aircrafts' bellies, Sino Logistics' team of air freight specialists can deliver tailor-made options that fulfil your supply chain requirements. If you're shipping commodities that need fast delivery, such as perishables, hazardous cargo, or any other goods that require expeditious transport, we can find the best solution for your needs.`,
    `Air freight can be especially beneficial when transporting time and temperature-sensitive shipments, so we make sure to find the optimal solutions to preserve the integrity of your supply chain by ensuring your cargo reaches its destination safely, quickly, and in perfect condition.`,
  ],
  image: benefitsImg,
  image2x: benefitsImg2x,
};

const Advantages = () => {
  return (
    <Section>
      <Container>
        <ContentBlock>
          <TitleWrapper className="title-wrapper">
            <Title size="xs" color="blue" marginBottom={24}>
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
            <Title size="xs" color="blue" marginBottom={24}>
              {benefitsInfo.title}
            </Title>
          </TitleWrapper>
          <Text className="text">
            {benefitsInfo.paragraphs.map((p) => (
              <p key={p.slice(0, 10)}>{p}</p>
            ))}
          </Text>
          <ImageWrapper>
            <img
              src={benefitsInfo.image}
              srcSet={`${benefitsInfo.image} 1x, ${benefitsInfo.image2x} 2x`}
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
`;

const TitleWrapper = styled.div`
  grid-column: 1 / 3;
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
`;

const Section = styled.section`
  padding-top: 152px;
`;

export default connect(Advantages);
