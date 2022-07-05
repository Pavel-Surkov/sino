import React from "react";
import Container from "./Container";
import { styled, connect, useConnect } from "frontity";
import { flex } from "../base/functions";

const ImageSection = ({
  hideImageInMobile,
  image,
  image2x,
  imagePosition,
  children,
}) => {
  const { state, actions } = useConnect();

  const { isMobile } = state.theme;

  return (
    <div className="section">
      <Container>
        <ContentWrapper>
          <ImageWrapper
            position={imagePosition}
            hideImageInMobile={hideImageInMobile}
          >
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
  max-width: 100%;
`;

const ImageWrapper = styled.div`
  order: ${({ position }) => (position === "right" ? "1" : "0")};
  max-width: calc((790 / 1372) * 100%);
  & img {
    width: 100%;
    height: auto;
    border-radius: 20px;
  }
  @media screen and (max-width: 991px) {
    ${({ hideImageInMobile }) => (hideImageInMobile ? "display: none;" : "")};
  }
`;

const ContentWrapper = styled.div`
  ${flex("row", "center", "space-between")};
  @media screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export default connect(ImageSection, { injectProps: false });
