import React from "react";
import Container from "./Container";
import { styled } from "frontity";
import { flex } from "../base/functions";

const ImageSection = ({ image, image2x, imagePosition, children }) => {
  return (
    <div className="section">
      <Container>
        <ContentWrapper>
          <ImageWrapper position={imagePosition}>
            <img
              src={image}
              srcSet={`${image} 1x, ${image2x ? image2x : image} 2x`}
              alt=""
            />
          </ImageWrapper>
          <ChildrenWrapper>{children}</ChildrenWrapper>
        </ContentWrapper>
      </Container>
    </div>
  );
};

const ChildrenWrapper = styled.div`
  max-width: calc(100% - (((790 / 1372) * 100%) + 64px));
`;

const ImageWrapper = styled.div`
  order: ${({ position }) => (position === "right" ? "1" : "0")};
  max-width: calc((790 / 1372) * 100%);
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
`;

const ContentWrapper = styled.div`
  ${flex("row", "center", "space-between")};
  @media creen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default ImageSection;
