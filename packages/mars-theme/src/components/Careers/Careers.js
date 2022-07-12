import Hero from "../constant/HeroSection";
import { connect, styled } from "frontity";

import HeroImage from "../../assets/images/johan-taljaard-csrScXTXdug-unsplash.png";

const Careers = ({ state }) => {
  return (
    <PageWrapper>
      <Hero image={HeroImage} title="Careers" />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
`;

export default connect(Careers);
