import React from "react";
import Title from "../../constant/Title";
import Paragraph from "../../constant/Paragraph";
import Card from "../../constant/Card";
import Container from "../../constant/Container";
import { styled, connect, css } from "frontity";

import airFreight from "../../../assets/images/air-freight-service.jpg";
import seaFreight from "../../../assets/images/sea-freight-service.jpg";
import groundFreight from "../../../assets/images/ground-freight-service.jpg";
import warehouse from "../../../assets/images/warehousing-service.jpg";
import valueAdded from "../../../assets/images/value-added-service.jpg";

const services = [
  {
    title: "Air Freight",
    img: airFreight,
    link: "/services/air-freight",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Sea Freight",
    img: seaFreight,
    link: "/services/sea-freight",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Ground Freight",
    img: groundFreight,
    link: "/services/ground-freight",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Warehousing & Distribution",
    img: warehouse,
    link: "/services/warehousing&distribution",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
  {
    title: "Value-Added Services",
    img: valueAdded,
    link: "/services/value-added",
    text: [
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ],
  },
];

const Services = ({ state, actions }) => {
  return (
    <section className="section">
      <Container>
        <Content>
          <Info>
            <Title color="blue" size="m" marginBottom={24}>
              Our Services
            </Title>
            <Paragraph
              css={css`
                max-width: 349px;
              `}
            >
              We&nbsp;offer solutions that cover all major modes
              of&nbsp;transportation, and we&nbsp;can arrange any combination
              of&nbsp;shipping and logistics services to&nbsp;meet your needs.
            </Paragraph>
          </Info>
          {services.map((service) => (
            <Card
              image={service.img}
              title={service.title}
              text={service.text}
              link={service.link}
              key={service.title}
            />
          ))}
        </Content>
      </Container>
    </section>
  );
};

const Info = styled.div`
  display: grid;
  align-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
`;

export default connect(Services);
