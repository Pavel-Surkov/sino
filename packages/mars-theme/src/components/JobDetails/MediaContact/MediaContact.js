import React from "react";
import Container from "../../constant/Container";
import TextLink from "../../constant/TextLink";
import IconBlock from "../../constant/IconBlock";
import { styled } from "frontity";
import { font } from "../../base/functions";

import contact from "../../../assets/images/alex-starnes-PK_t0Lrh7MM.png";
import contact2x from "../../../assets/images/alex-starnes-PK_t0Lrh7MM@2x.png";
import phone from "../../../assets/images/svg/Phone.svg";

const MediaContact = () => {
  return (
    <Section>
      <Container>
        <Note>
          <p>For more information, please contact:</p>
        </Note>
        <Content>
          <ImageWrapper>
            <img
              src={contact}
              srcSet={`${contact} 1x, ${contact2x} 2x`}
              width="128"
              height="128"
              alt="media contact"
            />
          </ImageWrapper>
          <Info>
            <Name>Ms. Sudang C.</Name>
            <Position>HR Manager</Position>
            <IconBlock icon={phone}>
              <MediaTextLink link="tel:+66 2-687-0477">
                +66 2-687-0477
              </MediaTextLink>
              <Ext>Ext. 423</Ext>
            </IconBlock>
          </Info>
        </Content>
      </Container>
    </Section>
  );
};

const Ext = styled.p`
  margin: 0;
  ${font(18, 30)};
`;

const MediaTextLink = styled(TextLink)`
  display: block;
`;

const Position = styled.p`
  ${font(16, 24)}
  margin: 0;
  margin-bottom: 16px;
  color: var(--black);
  opacity: 0.5;
`;

const Name = styled.p`
  ${font(20, 30)}
  margin: 0;
`;

const Info = styled.div``;

const ImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 50%;
  max-width: 128px;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 128px 1fr;
  grid-column-gap: 32px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-row-gap: 16px;
  }
`;

const Note = styled.div`
  margin-bottom: 24px;
  & p {
    margin: 0;
    ${font(18, 30)};
  }
`;

const Section = styled.section`
  padding-top: 80px;
  padding-bottom: 192px;
  border-top: 1px solid var(--blue-600);
  @media screen and (max-width: 991px) {
    border: none;
    padding-top: 128px;
    padding-bottom: 144px;
  }
`;

export default MediaContact;
