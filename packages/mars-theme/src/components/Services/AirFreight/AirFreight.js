import React from "react";
import Hero from "../../constant/HeroSection";
import Advantages from "./Advantages/Advantages";
import Contact from "./Contaact/Contact";
import { styled, connect } from "frontity";

import airFreight from "../../../assets/images/Air-Freight-08.png";

const AirFreight = () => {
  return (
    <AirFreightWrapper>
      <Hero title="Air Freight" image={airFreight} />
      <Advantages />
      <Contact />
    </AirFreightWrapper>
  );
};

const AirFreightWrapper = styled.div``;

export default connect(AirFreight);
