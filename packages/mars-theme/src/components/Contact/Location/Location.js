import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import IconBlock from "../../constant/IconBlock";
import TextLink from "../../constant/TextLink";
import Link from "../../constant/Link";
import { connect, styled } from "frontity";
import { flex, font } from "../../base/functions";

import headOffice from "../../../assets/images/head-office-map.png";
import headOffice2x from "../../../assets/images/head-office-map@2x.png";
import laemOffice from "../../../assets/images/laem-chabang-office-map.png";
import laemOffice2x from "../../../assets/images/laem-chabang-office-map@2x.png";

import mark from "../../../assets/images/svg/Map-marker.svg";
import message from "../../../assets/images/svg/Message.svg";
import phone from "../../../assets/images/svg/Phone.svg";
import parse from "html-react-parser";

const Location = ({post}) => {
  return (
    <Section>
      <Container>
        <Title size="xs" color="blue" marginBottom={32}>
          {post.acf.contact_location_title ? parse(post.acf.contact_location_title) : ''}
        </Title>
        <LocationBlock>
          <LocationContent>
            <Office>{post.acf.contact_location_1_name ? parse(post.acf.contact_location_1_name) : ''}</Office>
            <Corporation>
              <p>{post.acf.contact_location_1_text ? parse(post.acf.contact_location_1_text) : ''}</p>
            </Corporation>
            <IconBlock icon={mark} marginBottom={16}>
              {post.acf.contact_location_1_locations ? parse(post.acf.contact_location_1_locations) : ''}
            </IconBlock>
            <IconBlock icon={message} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={`mailto:${post.acf.contact_location_1_mail}`}
              >
                {post.acf.contact_location_1_mail}
              </TextLink>
            </IconBlock>
            <IconBlock icon={phone} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={`tel:${post.acf.contact_location_1_phone}`}
              >
                {post.acf.contact_location_1_phone}
              </TextLink>
            </IconBlock>
          </LocationContent>
          <MapWrapper>
            <Map
              target="_blank"
              rel="noopener noreferrer"
              link="https://www.google.ru/maps/place/Sino+Logistics+Corporation+PLC./@13.6830774,100.5463951,19z/data=!4m9!1m2!2m1!1s1011+Supalai+Grand+Tower,+7th+Floor,+Unit+No.+05,+Rama+3+Road,+Chongnonsee,+Yannawa,+Bangkok,+10120,+Thailand!3m5!1s0x30e2a203b42ea30d:0xdecfdad1623f259c!8m2!3d13.6830778!4d100.5473342!15sCm0xMDExIFN1cGFsYWkgR3JhbmQgVG93ZXIsIDd0aCBGbG9vciwgVW5pdCBOby4gMDUsIFJhbWEgMyBSb2FkLCBDaG9uZ25vbnNlZSwgWWFubmF3YSwgQmFuZ2tvaywgMTAxMjAsIFRoYWlsYW5kIgOIAQGSARFsb2dpc3RpY3Nfc2VydmljZQ"
            >
              <img
                width="558"
                height="340"
                src={post.acf.contact_location_1_map_1x.url}
                srcSet={`${post.acf.contact_location_1_map_1x.url} 1x, ${post.acf.contact_location_1_map_2x.url} 2x`}
                alt=""
              />
            </Map>
          </MapWrapper>
        </LocationBlock>
        <LocationBlock>
          <LocationContent>
            <Office>{post.acf.contact_location_2_name ? parse(post.acf.contact_location_2_name) : ''}</Office>
            <Corporation>
              <p>{post.acf.contact_location_2_text ? parse(post.acf.contact_location_2_text) : ''}</p>
            </Corporation>
            <IconBlock icon={mark} marginBottom={16}>
              {post.acf.contact_location_2_locations ? parse(post.acf.contact_location_2_locations) : ''}
            </IconBlock>
            <IconBlock icon={message} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={`mailto:${post.acf.contact_location_2_mail}`}
              >
                {post.acf.contact_location_2_mail}
              </TextLink>
            </IconBlock>
            <IconBlock icon={phone} marginBottom={16}>
              <TextLink
                target="_blank"
                rel="noopener noreferrer"
                link={`tel:${post.acf.contact_location_2_phone}`}
              >
                {post.acf.contact_location_2_phone}
              </TextLink>
            </IconBlock>
          </LocationContent>
          <MapWrapper>
            <Map
              target="_blank"
              rel="noopener noreferrer"
              link="https://www.google.ru/maps/place/SINO+Logistics+Corporation+PLC.+(Laem+Chabang+Branch)/@13.0870548,100.8774911,13z/data=!4m9!1m2!2m1!1ssino!3m5!1s0x3102b9d60807c5b7:0x94d15546f0664539!8m2!3d13.0870548!4d100.9294331!15sCgRzaW5vkgEQY29ycG9yYXRlX29mZmljZQ"
            >
              <img
                width="558"
                height="340"
                src={post.acf.contact_location_2_map_1x.url}
                srcSet={`${post.acf.contact_location_2_map_1x.url} 1x, ${post.acf.contact_location_2_map_2x.url} 2x`}
                alt=""
              />
            </Map>
          </MapWrapper>
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

const MapWrapper = styled.div``;

const Map = styled(Link)`
  display: inline-block;
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
