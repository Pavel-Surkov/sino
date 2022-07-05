import React from "react";
import Title from "../../constant/Title";
import PrimaryButton from "../../constant/PrimaryButton";
import { font } from "../../base/functions";
import { styled, css } from "frontity";

import containers from "../../../assets/images/noel-broda-sigzPF1sT7k-unsplash.jpg";
import containers2x from "../../../assets/images/noel-broda-sigzPF1sT7k-unsplash@2x.jpg";

const Quote = () => {
  return (
    <div className="section">
      <div
        css={css`
          position: relative;
        `}
      >
        <ImageContainer>
          <img
            src={containers}
            srcSet={`${containers} 1x, ${containers2x || containers} 2x`}
            alt=""
          />
        </ImageContainer>
        <Content>
          <Title size="m" color="white" marginBottom={16}>
            Get a Quote
          </Title>
          <Subtitle maxWidth={791}>
            <p>
              Get in touch with one of our supply chain experts to who can
              provide you with the best international or domestic shipping
              rates.
            </p>
          </Subtitle>
          <PrimaryButton content="Request" type="link" link="/get-quote" />
        </Content>
      </div>
    </div>
  );
};

const Subtitle = styled.div`
  margin-bottom: 32px;
  ${({ maxWidth }) => (maxWidth ? `max-width: ${maxWidth}px` : "")};
  & p {
    margin: 0;
    ${font(24, 32)};
    color: var(--white);
    letter-spacing: 0.04em;
    font-weight: 400;
  }
  @media screen and (max-width: 991px) {
    & p {
      ${font(24, 32)};
    }
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  padding: 230px 0;
  padding-left: calc(var(--container-padding-xl) + 233px);
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Quote;
