import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import IconBlock from "../../constant/IconBlock";
import TextLink from "../../constant/TextLink";
import { connect, styled } from "frontity";
import { flex, font } from "../../base/functions";

import headOffice from "../../../assets/images/head-office-map.png";
import headOffice2x from "../../../assets/images/head-office-map@2x.png";
import laemOffice from "../../../assets/images/laem-chabang-office-map.png";
import laemOffice2x from "../../../assets/images/laem-chabang-office-map@2x.png";

import mark from "../../../assets/images/svg/Map-marker.svg";
import message from "../../../assets/images/svg/Message.svg";
import phone from "../../../assets/images/svg/Phone.svg";

const Location = () => {
  return (
    <Section>
      <Container>
        <Title size="xs" color="blue" marginBottom={32}>
          Thailand
        </Title>
        <LocationBlock>
          <LocationContent>
            <Office>Corporate Head Office</Office>
            <Corporation>
              <p>Sino Logistics Corporation</p>
            </Corporation>
            <IconBlock icon={mark} marginBottom={16}>
              1011 Supalai Grand Tower, <br />
              7th Floor, Unit No. 05, <br />
              Rama 3 Road, <br />
              Chongnonsee, Yannawa, <br />
              Bangkok, 10120, Thailand
            </IconBlock>
            <IconBlock icon={message} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={"mailto:info@sinologistics.co.th"}
              >
                info@sinologistics.co.th
              </TextLink>
            </IconBlock>
            <IconBlock icon={phone} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={"tel:+6626870477"}
              >
                +6626870477
              </TextLink>
            </IconBlock>
          </LocationContent>
          <Map>
            <img
              width="558"
              height="340"
              src={headOffice}
              srcSet={`${headOffice} 1x, ${headOffice2x} 2x`}
              alt=""
            />
          </Map>
        </LocationBlock>
        <LocationBlock>
          <LocationContent>
            <Office>Laem Chabang Office and Warehouse</Office>
            <Corporation>
              <p>Sino Logistics Corporation</p>
            </Corporation>
            <IconBlock icon={mark} marginBottom={16}>
              6/2 Moo.10 <br />
              Thungsukla, Sriracha, <br />
              Chonburi, 20230, Thailand
            </IconBlock>
            <IconBlock icon={message} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={"mailto:warehouse@sinologistics.co.th"}
              >
                warehouse@sinologistics.co.th
              </TextLink>
            </IconBlock>
            <IconBlock icon={phone} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={"tel:+6633004465"}
              >
                +6633004465
              </TextLink>
            </IconBlock>
          </LocationContent>
          <Map>
            <img
              width="558"
              height="340"
              src={laemOffice}
              srcSet={`${laemOffice} 1x, ${laemOffice2x} 2x`}
              alt=""
            />
          </Map>
        </LocationBlock>
      </Container>
    </Section>
  );
};

const Corporation = styled.div`
  margin-bottom: 16px;
  & p {
    ${font(18, 30)};
    margin: 0;
  }
`;

const Office = styled.h5`
  ${font(24, 32)};
  letter-spacing: -0.02em;
  margin: 0;
  margin-bottom: 12px;
  color: var(--gray-900);
  font-weight: 500;
`;

const LocationContent = styled.div`
  ${flex("column")};
`;

const Map = styled.div`
  & img {
    max-width: 100%;
    height: auto;
  }
`;

const LocationBlock = styled.div`
  display: grid;
  grid-template-columns: 432px 1fr;
  grid-gap: 24px;
  margin-bottom: 96px;
  align-items: center;
  &:last-of-type {
    margin-bottom: 0;
  }
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
    margin-bottom: 56px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Section = styled.section`
  padding-top: 144px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
    padding-bottom: 144px;
  }
`;

export default connect(Location);
