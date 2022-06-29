import { connect, styled } from "frontity";
import Logo from "./constant/Logo";
import MobileMenu from "./Menu";
import Container from "./constant/Container";

const Header = ({ state }) => {
  return (
    <>
      <HeaderContainer>
        <Logo />
        <MobileMenu />
      </HeaderContainer>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Title = styled.h2`
  margin: 0;
  margin-bottom: 16px;
`;

const HeaderContainer = styled(Container)`
  padding-top: 59px;
  padding-bottom: 32px;
`;

// const StyledLink = styled(Link)`
//   text-decoration: none;
// `;
