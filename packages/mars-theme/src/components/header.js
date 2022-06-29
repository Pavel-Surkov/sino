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

const HeaderContainer = styled(Container)`
  padding-top: 59px;
  padding-bottom: 32px;
  display: grid;
  grid-template-columns: calc((340 / 1372) * 100%) auto calc(
      (116 / 1372) * 100%
    );
`;
