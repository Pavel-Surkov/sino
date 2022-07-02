import React from "react";
import { connect, styled, css } from "frontity";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

import hero1 from "../../assets/images/aerial-view-container-cargo-ship-sea.jpg";
import hero1_2x from "../../assets/images/aerial-view-container-cargo-ship-sea@2x.jpg";
import hero3 from "../../assets/images/aerial-view-container-cargo-ship.jpg";
import hero3_2x from "../../assets/images/aerial-view-container-cargo-ship@2x.jpg";
import hero2 from "../../assets/images/hero-image-2.jpg";
import hero2_2x from "../../assets/images/hero-image-2@2x.jpg";

const heroImages = [
  [hero1, hero1_2x],
  [hero2, hero2_2x],
  [hero3, hero3_2x],
];

const Hero = () => {
  return (
    <Wrapper>
      <Swiper
        modules={[Pagination]}
        loop={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {heroImages.map(([img1x, img2x]) => {
          return (
            <SwiperSlide key={img1x}>
              <ImageWrapper>
                <img
                  src={img1x}
                  srcSet={img2x ? `${img1x} 1x, ${img2x} 2x` : ""}
                  alt=""
                />
              </ImageWrapper>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Wrapper>
  );
};

const ImageWrapper = styled.div``;

const Wrapper = styled.div`
  position: relative;
  max-width: 100vw;
`;

export default connect(Hero);
