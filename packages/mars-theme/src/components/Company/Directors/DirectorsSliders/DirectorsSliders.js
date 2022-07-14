import React from "react";
import SwiperButtons from "../../../constant/SwiperButtons";
import DirectorsSlider from "./DirectorsSlider/DirectorsSlider";
import Title from "../../../constant/Title";
import { styled, connect } from "frontity";
import { font, flex } from "../../../base/functions";

import { boardSlides } from "./slides";

const DirectorsSliders = () => {
  return (
    <Wrapper>
      <SlidersContainer>
        <SliderRow>
          <SliderTop>
            <Title size="xs" color="blue">
              Board of Directors
            </Title>
            <SwiperButtons
              prevClassName={"directors-prev"}
              nextClassName={"directores-next"}
              spaceBetween={24}
            />
          </SliderTop>
          <DirectorsSlider
            slides={boardSlides}
            btnPrev={"directors-prev"}
            btnNext={"directores-next"}
          />
        </SliderRow>
      </SlidersContainer>
    </Wrapper>
  );
};

const SliderTop = styled.div`
  ${flex("row", "center", "space-between")};
  padding-right: var(--container-padding-xl);
  margin-bottom: 24px;
  @media screen and (max-width: 1400px) {
    padding-right: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-right: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-right: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-right: 24px;
  }
`;

const SliderRow = styled.div``;

const SlidersContainer = styled.div`
  padding-left: var(--container-padding-xl);
  @media screen and (max-width: 1400px) {
    padding-left: var(--container-padding-lg);
  }
  @media screen and (max-width: 991px) {
    padding-left: var(--container-padding-md);
  }
  @media screen and (max-width: 768px) {
    padding-left: var(--container-padding-xs);
  }
  @media screen and (max-width: 576px) {
    padding-left: 24px;
  }
`;

const Wrapper = styled.div`
  padding-top: 128px;
  @media screen and (max-width: 991px) {
    padding-top: 48px;
  }
`;

export default DirectorsSliders;
