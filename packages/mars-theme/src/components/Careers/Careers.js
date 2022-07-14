import Hero from "../constant/HeroSection";
import Join from "./Join/Join";
import Hr from "./Hr/Hr";
import { connect, styled } from "frontity";

import HeroImage from "../../assets/images/johan-taljaard-csrScXTXdug-unsplash.png";

const Careers = ({ state }) => {
  return (
    <PageWrapper>
      <Hero image={HeroImage} title="Careers" />
      <Join />
      <Hr />
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  position: relative;
`;

export default connect(Careers);
