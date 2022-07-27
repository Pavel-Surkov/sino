import React from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../../base/functions";

import offerImage from "../../../../assets/images/sea-offer-image.jpg";
import offerImage2x from "../../../../assets/images/sea-offer-image@2x.jpg";
import containerImg from "../../../../assets/images/Sea-08.jpg";
import containerImg2x from "../../../../assets/images/Sea-08@2x.jpg";
import lcl from "../../../../assets/images/LCL-01.jpg";
import lcl2x from "../../../../assets/images/LCL-01@2x.jpg";
import consolidation from "../../../../assets/images/Consolidation-01.jpg";
import consolidation2x from "../../../../assets/images/Consolidation-01@2x.jpg";
import reefer from "../../../../assets/images/Reefer-05.jpg";
import reefer2x from "../../../../assets/images/Reefer-05@2x.jpg";

const offerInfo = {
  title: "What We Offer",
  paragraphs: [
    "Sino Corporation Logistics is the #1 Thailand-based Non-Vessel Operating Common Carrier (NVOCC), and our ocean freight service also ranks 1st in Thailand in terms of volume for the Transpacific Eastbound/North America Trade Lane.",
    "We are proud to offer customized solutions for your specific ocean freight needs, and we can provide a flexible range of Less-Than-Container Load (LCL) and Full-Container Load (FCL) shipments for both global and local transportation.",
    "All our ocean freight options are backed by EDI systems with Destination Customs AMS (Automated Manifest System) Filing and are FMC Licensed and Bonded (AMS/AFR/ACI/ENS). Furthermore, our professional customer service team are also happy to advise on the best solutions to meet your requirements.",
    "We also offer door-to-door services to all destinations worldwide through our network of logistics partners, helping to keep your supply chain flexible and globally connected.",
  ],
  image: offerImage,
  image2x: offerImage2x,
};

const optionsList = [
  {
    title: "Full-Container Load (FCL)",
    paragraphs: [
      "When you need to move large cargo volumes, our reliable and efficient FCL ocean freight services allow you to effortlessly transport an entire container of goods through our global network of carriers and logistics partners.",
      "Our sea freight specialists can find the best shipping options to suit your requirements and make ocean transportation as effortless as possible. With their local knowledge and expertise, they work tirelessly to ensure our international network of carriers provides our customers with the ultimate tailored FCL shipping solutions.",
      "So, whatever cargo you want to ship, and wherever it needs to go, we can ensure safe and punctual delivery with a team of customer service agents on hand to assist you along the way.",
    ],
    image: containerImg,
    image2x: containerImg2x,
  },
  {
    title: "Less-Than-Container Load (LCL)",
    paragraphs: [
      `If you don't require a full container, then our LCL solutions may suit your needs better. Sino Logistics offers weekly LCL services across all major trade routes that provide you with the most cost-effective solutions and connect you with our worldwide network of sea freight carriers.`,
      `Using our strategic gateways and port pairs, we can provide direct door-to-door solutions, and our team of experts are ready to handle your shipment end-to-end through our reliable global network, giving you a transit time you can rely on.`,
      `Moreover, you have the flexibility to move your cargo, whatever the size, from its origin to its destination, wherever the location, with the peace of mind that your shipment is safe, fully visible, and on the best possible routes.`,
    ],
    image: lcl,
    image2x: lcl2x,
  },
  {
    title: "ISO Tanks",
    paragraphs: [
      "We offer the highest service, quality, and safety standards. With our fleet of ISO Tanks, Sino Logistics can confidently take care of your liquid logistics requirements. We can efficiently and safely manage your cargo, be it a door-to-door or pier-to-pier shipment.",
      "Our local knowledge of the areas we operate in allows us to provide all our customers with an efficient, personalized service and cost-effective haulage. In addition, we are continually investing in new tanks and operational software to underpin our growth strategy, together with our most important asset, our people.",
      "Already operating for many world-class chemical companies, we have a tremendous amount of experience in moving chemicals, and we are committed to providing safe, environmentally- friendly transportation of bulk liquids.",
    ],
    image: consolidation,
    image2x: consolidation2x,
  },
  {
    title: "Reefer Logistics",
    paragraphs: [
      "The worldwide demand for temperature-sensitive commodities is growing annually, and therefore, so is the necessity for more advanced refrigerated cargo containers (reefers).",
      "Thanks to our global network of ocean carriers that operate fleets of technologically advanced reefers, as well as our partnerships with last-mile delivery operators who use refrigerated vehicles, we can transport your temperature-controlled goods from door to door without breaking the cold chain.",
      "Whether you need to transport perishables such as fruit, vegetables, meat, or dairy products, or high-end goods such as pharmaceuticals and computer chips, our reefer solutions can guarantee your product makes it to its destination on time and intact.",
    ],
    image: reefer,
    image2x: reefer2x,
  },
];

const Advantages = ({ state, post }) => {
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
        <OptionsBlock>
          <Title size="xs" color="blue" marginBottom={isMobile ? 32 : 64}>
            Sea Freight Shipping Options
          </Title>
          {optionsList.map((option, idx) => {
            return (
              <ContentBlock
                content="options"
                key={option.title}
                data-image={idx % 2 ? "left" : "right"}
              >
                {!isMobile && (
                  <Content>
                    <TitleWrapper className="title-wrapper">
                      <Title
                        size="xs"
                        color="blue"
                        marginBottom={isMobile ? 16 : 24}
                      >
                        {option.title}
                      </Title>
                    </TitleWrapper>
                    <Text className="text">
                      {option.paragraphs.map((p) => (
                        <p key={p.slice(0, 10)}>{p}</p>
                      ))}
                    </Text>
                  </Content>
                )}
                {isMobile && (
                  <>
                    <TitleWrapper className="title-wrapper">
                      <Title
                        size="xs"
                        color="blue"
                        marginBottom={isMobile ? 16 : 24}
                      >
                        {option.title}
                      </Title>
                    </TitleWrapper>
                    <Text className="text">
                      {option.paragraphs.map((p) => (
                        <p key={p.slice(0, 10)}>{p}</p>
                      ))}
                    </Text>
                  </>
                )}
                <ImageWrapper className="img-wrapper">
                  <img
                    src={option.image}
                    srcSet={`${option.image} 1x, ${option.image2x} 2x`}
                    alt=""
                  />
                </ImageWrapper>
              </ContentBlock>
            );
          })}
        </OptionsBlock>
      </Container>
    </Section>
  );
};

const Content = styled.div``;

const OptionsBlock = styled.div``;

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
  & h4 {
    font-weight: 400;
    ${font(32, 40)};
    letter-spacing: -0.02em;
  }
  @media screen and (max-width: 991px) {
    grid-column: 1 / 2;
    order: -1;
    & h4 {
      font-weight: 400;
      ${font(24, 32)};
      letter-spacing: 0.04em;
    }
  }
`;

const ContentBlock = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 52px) calc(50% - 12px);
  grid-column-gap: 64px;
  margin-bottom: ${({ content }) =>
    content === "options" ? "144px" : "192px"};
  &:last-of-type {
    margin-bottom: 0;
  }
  &[data-image="left"] {
    grid-template-columns: calc(50% - 12px) calc(50% - 52px);
    & .img-wrapper {
      order: -1;
    }
  }
  @media screen and (max-width: 1400px) {
    align-items: center;
    grid-template-columns: calc(50% - 12px) calc(50% - 12px);
    grid-column-gap: 24px;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    margin-bottom: 96px;
    &:last-of-type {
      margin-bottom: 0;
    }
    &[data-image="left"] {
      grid-template-columns: 100%;
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
