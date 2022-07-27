import React from "react";
import Container from "../constant/Container";
import Title from "../constant/Title";
import TextBlock from "./TextBlock/TextBlock";
import { styled } from "frontity";
import { font } from "../base/functions";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <Section>
        <Container>
          <Title size="xs" color="blue">
            Privacy Policy
          </Title>
          <Content>
            <TextBlock title="Information we collect">
              <p>
                The personal information that you are asked to provide, and the
                reasons why you are asked to provide it, will be made clear
                to you at the point we ask you to provide your personal
                information.
              </p>
              <p>
                If you contact us directly, we may receive additional
                information about you such as your name, email address, phone
                number, the contents of the message and/or attachments you may
                send us, and any other information you may choose to provide.
              </p>
              <p>
                When you register for an Account, we may ask for your contact
                information, including items such as name, company name,
                address, email address, IP address and telephone number.
              </p>
            </TextBlock>
            <TextBlock title="How we use your information">
              <p>
                We use the information we collect in various ways, including to:
              </p>
              <List>
                <ListItem>Provide, operate, and maintain our website</ListItem>
                <ListItem>
                  Improve, personalize, and expand our website
                </ListItem>
                <ListItem>
                  Understand and analyse how you use our website
                </ListItem>
                <ListItem>
                  Develop new products, services, features, and functionality
                </ListItem>
              </List>
            </TextBlock>
            <TextBlock title="Third-Party Privacy Policies">
              <p>
                Sino Logistics will not disclose your personal information that
                has been recorded or other information that can be identified as
                yours to a third party unless Sino Logistics has your
                consent.Providing such information is to help you perform the
                transaction you wish.Disclosure of such information is legal or
                come from government agency’s requestSino Logistics will not
                disclose your personal information to third parties for their
                marketing purpose such as telesales or postal sales etc.
              </p>
            </TextBlock>
            <TextBlock title="Third-Party Privacy Policies">
              <p>
                Sino Logistics has implemented encryption and physical security
                methods to prevent unauthorized access or alteration of
                information without permission, including checking who had
                accessed to information.
              </p>
            </TextBlock>
          </Content>
        </Container>
      </Section>
    </PageWrapper>
  );
};

const ListItem = styled.li`
  padding-left: 24px;
  position: relative;
  font-weight: 300;
  ${font(18, 30)};
  color: var(--black);
  margin: 0;
  margin-bottom: 8px;
  &:last-child {
    margin-bottom: 0;
  }
  &::before {
    position: absolute;
    content: "";
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: var(--black);
    left: 10px;
    top: 14px;
  }
  @media screen and (max-width: 991px) {
    margin-bottom: 0;
  }
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  padding-left: 36px;
  margin-top: 16px;
  @media screen and (max-width: 991px) {
    padding-left: 0;
    margin-top: 8px;
  }
`;

const Content = styled.div`
  margin-top: 40px;
  max-width: 1020px;
  @media screen and (max-width: 991px) {
    margin-top: 32px;
  }
`;

const Section = styled.section`
  padding-top: 96px;
  padding-bottom: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 56px;
    padding-bottom: 145px;
  }
`;

const PageWrapper = styled.div``;

export default PrivacyPolicy;
