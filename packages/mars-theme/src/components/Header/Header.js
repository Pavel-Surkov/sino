import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Logo from "../constant/Logo";
import MobileMenu from "../Menu";
import Container from "../constant/Container";
import SearchBlock from "./SearchBlock";
import Navigation from "./Navigation";

const Header = ({ state, actions }) => {
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
        <Navigation></Navigation>
        <SearchBlock />
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
