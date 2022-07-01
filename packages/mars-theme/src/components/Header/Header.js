import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Logo from "../constant/Logo";
import MobileMenu from "./Menu";
import Container from "../constant/Container";
import SearchBlock from "./SearchBlock";
import Navigation from "./Navigation";
import MenuIcon from "./MenuIcon";

const Header = ({ state, actions }) => {
  const isMobile = state.theme.isMobile;
  console.log(state.theme.isMobile);

  useEffect(() => {
    actions.theme.checkIsMobile();

    window.addEventListener("resize", () => actions.theme.checkIsMobile());

    return () => {
      window.removeEventListener("resize", () => actions.theme.checkIsMobile());
    };
  }, []);

  return (
    <>
      <HeaderContainer>
        <Logo />
        <Navigation />
        <SearchBlock />
        <MenuIcon />
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

  @media screen and (max-width: 991px) {
    grid-template-columns: 50% 50%;
    padding: 16px 0;
  }
`;
