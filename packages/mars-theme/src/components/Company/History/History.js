import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import { connect, styled } from "frontity";
import { font } from "../../base/functions";

const History = () => {
  return (
    <HistoryWrapper>
      <Container>
        <Title size="m" color="blue" marginBottom={24}>
          History
        </Title>
        <Content>
          <TextColumn>
            <p>
              The company was established in&nbsp;2010, operating
              as&nbsp;a&nbsp;sea transportation freight forwarder, primarily
              on&nbsp;the Thailand-America trading route, by&nbsp;Nanmanus
              Witthayasakpant, Arachaporn Witthayasakpant, and Kavin Kritcharoen
              under the name Sino Connections Logistics.
            </p>
            <p>
              However, as&nbsp;the company expanded, it&nbsp;began introducing
              new personalized services to&nbsp;accommodate the ever-changing
              needs of&nbsp;its growing customer base. This culminated
              in&nbsp;a&nbsp;corporate rebranding in&nbsp;2021, and now the
              company operates as&nbsp;Sino Logistics Corporation (Sino
              Logistics).
            </p>
          </TextColumn>
          <TextColumn>
            <p>
              By&nbsp;utilizing its comprehensive network and years
              of&nbsp;accrued knowledge in&nbsp;a&nbsp;niche market, Sino
              Logistics can provide its customers and vendors with world-class
              transportation and contract logistics services that maintain
              a&nbsp;personal touch.
            </p>
          </TextColumn>
        </Content>
      </Container>
    </HistoryWrapper>
  );
};

const TextColumn = styled.div`
  & p {
    ${font(18, 30)}
    font-weight: 300;
    margin: 0;
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  @media screen and (max-width: 991px) {
    grid-gap: 0;
    grid-template-columns: 100%;
  }
`;

const HistoryWrapper = styled.section`
  padding-top: 152px;
  @media screen and (max-width: 991px) {
    padding-top: 32px;
  }
`;

export default connect(History);
