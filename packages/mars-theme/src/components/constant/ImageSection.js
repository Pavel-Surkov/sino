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
  max-width: calc(100% - (((790px / 1372px) * 100%) - 64px));
`;

const ImageWrapper = styled.div`
  order: ${({ position }) => (position === "left" ? "0" : "1")};
  max-width: calc((790px / 1372px) * 100%);
`;

const ContentWrapper = styled.div`
  ${flex("row", "center", "space-between")};
`;

export default ImageSection;
