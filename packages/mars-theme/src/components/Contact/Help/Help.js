import React from "react";
import Container from "../../constant/Container";
import Title from "../../constant/Title";
import HelpForm from "./HelpForm/HelpForm";
import PrimaryBtn from "../../constant/PrimaryButton";
import { font } from "../../base/functions";
import { styled, connect } from "frontity";

import contact from "../../../assets/images/Contact-us-02.png";
import contact2x from "../../../assets/images/Contact-us-02@2x.png";

const Help = ({ state }) => {
  const { isMobile } = state.theme;

  return (
    <Section>
      <Container>
        <Wrapper>
          <Content>
            <Title size="xs" color="blue" marginBottom={isMobile ? 16 : 32}>
              How can we help you?
            </Title>
            <Note>
              <p>
                If you have a question or need to get in touch with us for any
                reason, please complete our contact form, and we will aim to
                respond within two working days. For a faster response time,
                please give us a call.
              </p>
            </Note>
            <HelpForm />
            <Quote>
              <p>
                If you need us to provide you with estimation, please request a
                quote
              </p>
              <PrimaryBtn type="link" link="/quote" content="Get a Quote" />
            </Quote>
          </Content>
          <ImageBlock>
            <img
              src={contact}
              srcSet={`${contact} 1x, ${contact2x ? contact2x : contact} 2x`}
              alt=""
            />
          </ImageBlock>
        </Wrapper>
      </Container>
    </Section>
  );
};

const Quote = styled.div`
  & p {
    margin: 0;
    ${font(18, 30)};
    margin-bottom: 16px;
  }
  @media screen and (max-width: 991px) {
    & p {
      margin-bottom: 24px;
    }
  }
`;

const Note = styled.div`
  margin-bottom: 35px;
  & p {
    ${font(18, 30)};
    margin: 0;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 32px;
  }
`;

const Content = styled.div``;

const ImageBlock = styled.div`
  text-align: right;
  & img {
    border-radius: 20px;
    max-width: 558px;
  }
  @media screen and (max-width: 1440px) {
    & img {
      max-width: 100%;
    }
  }
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: calc(50% - 12px) calc(50% - 12px);
  grid-gap: 24px;
  align-items: center;
  @media screen and (max-width: 991px) {
    grid-template-columns: 100%;
  }
`;

const Section = styled.section`
  padding-top: 96px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
  }
`;

export default connect(Help);
