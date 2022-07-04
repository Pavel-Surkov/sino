import React from "react";
import Link from "./Link";
import { styled, connect } from "frontity";
import { font, flex } from "../base/functions";

const CardElement = ({ title, text, image, link }) => {
  return (
    <Card link={link}>
      <img width="440" height="502" src={image} alt="service image" />
      <BottomPanel>
        <CardTitle>{title}</CardTitle>
        {/* <LinkArrow></LinkArrow> */}
      </BottomPanel>
      {/* <HoverPanel></HoverPanel> */}
    </Card>
  );
};

const CardTitle = styled.h3``;

const BottomPanel = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 49px 24px 44px 24px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  ${flex("row", "center", "space-between")};
`;

const Card = styled(Link)`
  display: block;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  min-height: 502px;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`;

export default connect(CardElement, { injectProps: false });
