import React, { useState } from "react";
import Link from "./Link";
import { styled, connect } from "frontity";
import { font, flex } from "../base/functions";

const CardElement = ({ title, image, link, size }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      link={link}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img width="440" height="502" src={image} alt="service image" />
      <BottomPanel isDark={!hovered}>
        <CardTitle size={size}>{title}</CardTitle>
        <LinkArrow>
          {size === "m" ? (
            <svg
              width="112"
              height="48"
              viewBox="0 0 112 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M91.9973 24.0125C91.9978 24.2791 91.9049 24.5374 91.7346 24.7427L86.0232 31.5879C85.8294 31.8208 85.5507 31.9674 85.2487 31.9952C84.9467 32.023 84.6459 31.9298 84.4126 31.7362C84.1794 31.5425 84.0327 31.2643 84.0048 30.9626C83.977 30.6609 84.0703 30.3605 84.2642 30.1276L89.3815 24.0125L84.4469 17.8975C84.352 17.7808 84.2812 17.6466 84.2384 17.5024C84.1957 17.3583 84.1818 17.2071 84.1978 17.0577C84.2137 16.9082 84.259 16.7633 84.3312 16.6314C84.4034 16.4995 84.5009 16.3831 84.6183 16.2889C84.7357 16.1844 84.8735 16.1053 85.023 16.0565C85.1725 16.0077 85.3305 15.9902 85.487 16.0052C85.6436 16.0202 85.7954 16.0673 85.9328 16.1436C86.0703 16.2199 86.1905 16.3238 86.286 16.4486L91.8031 23.2938C91.9465 23.505 92.0149 23.758 91.9973 24.0125Z"
                fill="#FDFDFD"
              />
              <circle cx="88" cy="24" r="23" stroke="#FDFDFD" strokeWidth="2" />
              <line
                x1="8.74228e-08"
                y1="24"
                x2="64"
                y2="24"
                stroke="#FDFDFD"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              width="148"
              height="48"
              viewBox="0 0 148 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M128.895 24.0125C128.895 24.2791 128.802 24.5374 128.632 24.7427L122.909 31.5879C122.715 31.8208 122.436 31.9674 122.133 31.9952C121.831 32.023 121.529 31.9298 121.296 31.7362C121.062 31.5425 120.915 31.2643 120.887 30.9626C120.859 30.6609 120.953 30.3605 121.147 30.1276L126.274 24.0125L121.33 17.8975C121.235 17.7808 121.164 17.6466 121.121 17.5024C121.078 17.3583 121.065 17.2071 121.08 17.0577C121.096 16.9082 121.142 16.7633 121.214 16.6314C121.286 16.4995 121.384 16.3831 121.502 16.2889C121.619 16.1844 121.757 16.1053 121.907 16.0565C122.057 16.0077 122.215 15.9902 122.372 16.0052C122.529 16.0202 122.681 16.0673 122.819 16.1436C122.957 16.2199 123.077 16.3238 123.173 16.4486L128.7 23.2938C128.844 23.505 128.913 23.758 128.895 24.0125Z"
                fill="#FDFDFD"
              />

              <path
                d="M147 24C147 36.7007 136.684 47 123.954 47C111.224 47 100.908 36.7007 100.908 24C100.908 11.2993 111.224 1 123.954 1C136.684 1 147 11.2993 147 24Z"
                stroke="#FDFDFD"
                strokeWidth="2"
              />

              <line
                x1="8.74228e-08"
                y1="25"
                x2="100.192"
                y2="25"
                stroke="#FDFDFD"
                strokeWidth="2"
              />
            </svg>
          )}
        </LinkArrow>
      </BottomPanel>
      <HoverPanel hovered={hovered} />
    </Card>
  );
};

const HoverPanel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.3);
  display: ${({ hovered }) => (hovered ? "block" : "none")};
  backdrop-filter: ${({ hovered }) => (hovered ? "blur(5px)" : "none")};
`;

const LinkArrow = styled.div`
  position: relative;
  z-index: 4;
  @media screen and (max-width: 1400px) {
    & svg {
      max-width: 100px;
    }
  }
  @media screen and (max-width: 991px) {
    & svg {
      max-width: 112px;
    }
  }
`;

const CardTitle = styled.h3`
  margin: 0;
  color: var(--white);
  ${({ size }) => (size === "m" ? `${font(24, 32)}` : `${font(34, 42)}`)};
  font-weight: 500;
  letter-spacing: -0.02em;
  max-width: 55%;
  position: relative;
  z-index: 4;
  @media screen and (max-width: 1400px) {
    ${font(24, 32)};
  }
`;

const BottomPanel = styled.div`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  padding: 49px 24px 44px 24px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  background: ${({ isDark }) =>
    isDark ? "rgba(0, 0, 0, 0.3)" : "transparent"};
  backdrop-filter: ${({ isDark }) => (isDark ? "blur(5px)" : "none")};
  max-height: 135px;
  ${flex("row", "center", "space-between")};
  @media screen and (max-width: 768px) {
    padding: 18px 16px;
  }
`;

const Card = styled(Link)`
  display: block;
  border-radius: 20px;
  width: 100%;
  max-width: 440px;
  position: relative;
  overflow: hidden;
  &:active {
    & svg path:nth-of-type(2),
    & svg circle {
      fill: white;
      fill-opacity: 0.5;
    }
  }
  & img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    object-fit: cover;
  }
`;

export default connect(CardElement, { injectProps: false });
