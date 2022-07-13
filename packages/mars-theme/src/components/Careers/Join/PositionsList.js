import React from "react";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";

const positions = [
  {
    id: 1,
    position: "EDI Officer",
    company: "Sino Logistics",
    category: "Customer Service",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "06 Jan 2022",
    location: "Laem Chabang",
  },
  {
    id: 2,
    position: "Recruitment Specialist",
    company: "Sino Logistics",
    category: "Human Resources",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "03 Jan 2022",
    location: "Bangkok",
  },
  {
    id: 3,
    position: "Class 1 Driver",
    company: "Inter Connections Logistics",
    category: "Operations",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "01 Jan 2022",
    location: "Rayong",
  },
  {
    id: 4,
    position: "Class 2 Driver",
    company: "Inter Connections Logistics",
    category: "Operations",
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    date: "01 Jan 2022",
    location: "Rayong",
  },
];

const PositionsList = () => {
  return (
    <List>
      {positions.map((position) => (
        <Position key={position.id}>
          <MainInfo>
            <PositionTitle>{position.position}</PositionTitle>
            <Company>{position.company}</Company>
            <Category>{position.category}</Category>
          </MainInfo>
          <Description>
            <Text>
              <p>{position.description}</p>
            </Text>
          </Description>
          <Additional></Additional>
        </Position>
      ))}
    </List>
  );
};

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

const Text = styled.div`
  max-width: 560px;
  & p {
    color: var(--gray-menu);
    margin: 0;
    ${font(14, 24)};
    font-weight: 300;
  }
`;

const Additional = styled.div``;

const Description = styled.div``;

const MainInfo = styled.div``;

const Position = styled.li`
  color: var(--gray-menu);
  border-bottom: 1px solid var(--blue-600);
  padding: 32px 0;
  display: grid;
  grid-template-columns: 25.437% 45% 29.563%;
  &:first-of-type {
    border-top: 1px solid var(--blue-600);
  }
`;

const List = styled.ul`
  padding: 0;
  margin: 0;
`;

export default connect(PositionsList);
