import React from "react";
import Hero from "../constant/HeroSection";
import Help from "./Help/Help";
import { connect, styled } from "frontity";

import contact from "../../assets/images/johan-taljaard-contact-unsplash.png";

const Contact = () => {
  return (
    <ContactWrapper>
      <Hero title="Contact Us" image={contact} />
      <Help />
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div``;

export default connect(Contact);
