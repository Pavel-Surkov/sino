import React from "react";
import { styled } from "frontity";
import { font } from "../../../../base/functions";

import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Navigation } from "swiper";

const DirectorsSlider = ({ marginBottom, title, slides, btnPrev, btnNext }) => {
  return (
    <Wrapper mb={marginBottom}>
      {title && (
        <TitleWrapper>
          <h3>{title}</h3>
        </TitleWrapper>
      )}
      <Swiper
        modules={[Navigation]}
        slidesPerView={"auto"}
        spaceBetween={16}
        navigation={
          btnPrev && btnNext
            ? { prevEl: `.${btnPrev}`, nextEl: `.${btnNext}` }
            : false
        }
      >
        {slides.map((slide) => {
          return (
            <SwiperSlide key={slide.id}>
              <img
                src={slide.image}
                srcSet={`${slide.image} 1x, ${
                  slide.image2x ? slide.image2x : slide.image
                } 2x`}
                width="233"
                height="274"
                alt=""
              />
              <Info>
                <Name>{slide.name}</Name>
                <Position>{slide.position}</Position>
              </Info>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const Name = styled.p`
  font-weight: 300;
  ${font(14, 22)};
  letter-spacing: -0.04em;
  color: var(--white);
  margin: 0;
`;

const Position = styled.p`
  color: var(--gray-900);
  ${font(14, 16)};
  font-weight: 300;
  letter-spacing: -0.04em;
  margin: 0;
`;

const Info = styled.div`
  position: absolute;
  min-height: 72px;
  width: 100%;
  bottom: 0;
  left: 0;
  padding: 6px 16px;
  padding-bottom: 12px;
  background: rgba(30, 30, 30, 0.7);
`;

const TitleWrapper = styled.div`
  margin: 0;
  margin-bottom: 24px;
  & h3 {
    ${font(24, 32)};
    font-weight: 400;
    letter-spacing: 0.04em;
    color: var(--blue-600);
  }
`;

const Wrapper = styled.div`
  margin-bottom: ${({ mb }) => (mb ? `${mb}px` : "0")};
  & .swiper {
  }
  & div.swiper-slide {
    max-width: 233px;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
  }
`;

export default DirectorsSlider;
