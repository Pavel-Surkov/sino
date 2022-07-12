import Hero from "../constant/HeroSection";
import Join from "./Join/Join";
import { connect, styled } from "frontity";

import HeroImage from "../../assets/images/johan-taljaard-csrScXTXdug-unsplash.png";

const Careers = ({ state }) => {
  return (
    <PageWrapper>
      <Hero image={HeroImage} title="Careers" />
      <Join />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
`;

export default connect(Careers);
