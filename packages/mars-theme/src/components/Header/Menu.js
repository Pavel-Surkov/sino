import { styled, connect } from "frontity";
import Container from "../constant/Container";
import Input from "../constant/Input";
import Navigation from "./Navigation";

const MobileMenu = ({ state, actions }) => {
  const { searchValue } = state.theme;

  return (
    <Menu>
      <MenuContainer>
        <Input
          placeholder="Search Here"
          minWidth="100%"
          value={searchValue}
          onChange={(evt) => actions.theme.handleSearchChange(evt.target.value)}
        />
        <MenuNavigation />
      </MenuContainer>
    </Menu>
  );
};

const MenuNavigation = styled(Navigation)`
  display: block;
`;

const MenuContainer = styled(Container)`
  padding: 24px 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const Menu = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background: var(--white);
  width: 100vw;
  height: calc(100vh - 72px);
`;

export default connect(MobileMenu);
