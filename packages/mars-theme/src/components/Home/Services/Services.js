import React from "react";
import Title from "../../constant/Title";
import Paragraph from "../../constant/Paragraph";
import Card from "../../constant/Card";
import Container from "../../constant/Container";
import { styled, connect, css } from "frontity";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

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
  const { isMobile } = state.theme;

  return (
    <section className="section">
      <Container>
        <Content>
          <Info>
            <Title color="blue" size="m" marginBottom={24}>
              Our Services
            </Title>
            <Paragraph maxWidth={isMobile ? "none" : "349px"}>
              We&nbsp;offer solutions that cover all major modes
              of&nbsp;transportation, and we&nbsp;can arrange any combination
              of&nbsp;shipping and logistics services to&nbsp;meet your needs.
            </Paragraph>
          </Info>
          {!isMobile &&
            services.map((service) => (
              <Card
                image={service.img}
                title={service.title}
                text={service.text}
                link={service.link}
                key={service.title}
              />
            ))}
          {isMobile && (
            <Swiper
              spaceBetween={24}
              modules={[Pagination]}
              loop={true}
              pagination={{ clickable: true }}
              onSwiper={(swiper) => console.log(swiper)}
            >
              {services.map((service) => {
                return (
                  <SwiperSlide key={service.title}>
                    <SwiperWrapper>
                      <Card
                        image={service.img}
                        title={service.title}
                        text={service.text}
                        link={service.link}
                      />
                    </SwiperWrapper>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          )}
        </Content>
      </Container>
    </section>
  );
};

const SwiperWrapper = styled.div``;

const Info = styled.div`
  display: grid;
  align-content: center;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr;
  & .swiper {
    max-width: 100%;
    padding-bottom: 56px;
    position: relative;
    &-wrapper {
      border-radius: 20px;
    }
    & .swiper-pagination {
      bottom: 0;
    }
    & .swiper-pagination-bullet {
      margin: 0;
      margin-right: 32px;
      width: 16px;
      height: 16px;
      background: transparent;
      border: 2px solid var(--blue-600);
      border-radius: 50%;
      position: relative;
      opacity: 1;
      &-active::before {
        content: "";
        position: absolute;
        border-radius: 50%;
        width: 6px;
        height: 6px;
        background: var(--blue-600);
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
      &:last-child {
        margin-right: 0;
      }
    }
    & a {
      max-width: none;
    }
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

export default connect(Services);
