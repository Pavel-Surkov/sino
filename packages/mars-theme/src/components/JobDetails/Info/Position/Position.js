import React from "react";
import IconBlock from "../../../constant/IconBlock";
import { font, flex } from "../../../base/functions";
import { styled } from "frontity";

import calendar from "../../../../assets/images/svg/dark-calendar.svg";
import marker from "../../../../assets/images/svg/dark-map-marker.svg";

const PositionElement = () => {
  return (
    <Position>
      <MainInfo>
        <PositionTitle>EDI Officer</PositionTitle>
        <Company>Sino Logistics</Company>
        <Category>Customer Service</Category>
      </MainInfo>
      <Additional>
        <IconWrapper mobileOrder={1}>
          <IconBlock icon={marker}>Laem Chabang, Thailand</IconBlock>
        </IconWrapper>
        <IconWrapper>
          <IconBlock icon={calendar}>4 March 2022</IconBlock>
        </IconWrapper>
      </Additional>
    </Position>
  );
};
const IconWrapper = styled.div`
  text-align: left;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (max-width: 1400px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 991px) {
    text-align: right;
  }
  @media screen and (max-width: 576px) {
    text-align: left;
    margin-bottom: 18px;
    ${({ mobileOrder }) => (mobileOrder ? `order: ${mobileOrder}` : "")};
    &:last-of-type {
      margin-bottom: 18px;
    }
    &:first-of-type {
      margin-bottom: 0;
    }
  }
`;

const Category = styled.p`
  margin: 0;
  font-style: italic;
  font-weight: 300;
  ${font(16, 30)};
`;

const Company = styled.p`
  margin: 0;
  margin-bottom: 8px;
  ${font(18, 30)};
  font-weight: 500;
  color: var(--gray-menu);
`;

const PositionTitle = styled.h3`
  color: var(--gray-menu);
  margin: 0;
  margin-bottom: 24px;
  ${font(24, 32)};
  font-weight: 500;
  letter-spacing: -0.02em;
`;

const Additional = styled.div`
  ${flex("column", "space-between")};
`;

const MainInfo = styled.div`
  @media screen and (max-width: 576px) {
    margin-bottom: 24px;
  }
`;

const Position = styled.li`
  color: var(--gray-menu);
  border-bottom: 1px solid var(--blue-600);
  padding: 30px 0;
  display: grid;
  grid-template-columns: 1fr 325px;
  &:first-of-type {
    border-top: 1px solid var(--blue-600);
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 100%;
    padding: 40px 0;
  }
`;

export default PositionElement;
