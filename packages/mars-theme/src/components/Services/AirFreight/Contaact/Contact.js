import React from "react";
import Container from "../../../constant/Container";
import Title from "../../../constant/Title";
import { font } from "../../../base/functions";
import { styled } from "frontity";

const Contact = () => {
  return (
    <Section>
      <ContactContainer></ContactContainer>
    </Section>
  );
};

const ContactContainer = styled(Container)`
  position: relative;
`;

const Section = styled.section`
  padding-top: 192px;
  @media screen and (max-width: 991px) {
    padding-top: 128px;
  }
`;

export default Contact;
