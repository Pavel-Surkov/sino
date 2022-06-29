import { connect, styled } from "frontity";
import Link from "./constant/Link";
import MobileMenu from "./Menu";
import Container from "./constant/Container";

const Header = ({ state }) => {
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>{state.frontity.title}</Title>
        </StyledLink>
        <Description>{state.frontity.description}</Description>
        <MobileMenu />
      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
