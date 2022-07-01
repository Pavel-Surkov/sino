import React from "react";
import { styled } from "frontity";
import { font } from "../base/functions";

const Title = ({ size, color, children }) => {
  return size === l ? (
    <H1 color={color}>{children}</H1>
  ) : (
    <H2 color={color}>{children}</H2>
  );
};

const H1 = styled.h1`
  margin: 0;
  font-weight: 500;
  color: ${({ color }) =>
    color === "white" ? "var(--white)" : "var(--black)"};
  ${font(64, 72)};
`;

const H2 = styled.h2`
  margin: 0;
  font-weight: 500;
  color: ${({ color }) =>
    color === "white" ? "var(--white)" : "var(--black)"};
  ${font(48, 56)};
`;

export default Title;
