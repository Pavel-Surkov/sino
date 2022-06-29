import { styled, connect, Global, Head } from "frontity";
import { CloseIcon, HamburgerIcon } from "./MenuIcon";
import MenuModal from "./MenuModal";

/**
 * The menu that should be displayed on mobile devices displaying links to
 * various categories and pages. This component contains mostly logic and
 * renders the {@link MenuModal} component.
 *
 * @param props - The state and actions injected by Frontity.
 * @returns A React component.
 */

function MobileMenu({ state, actions }) {
  const { menu, isMobileMenuOpen } = state.theme;
  if (menu?.length === 0) return null;

  return (
    <>
      <MenuToggle onClick={actions.theme.toggleMobileMenu}>
        {isMobileMenuOpen ? (
          <>
            {/* Add some style to the body when menu is open,
            to prevent body scroll */}
            <Global styles={{ body: { overflowY: "hidden" } }} />
            <CloseIcon color="white" size="20px" />
          </>
        ) : (
          <HamburgerIcon color="white" size="24px" />
        )}
      </MenuToggle>
      {/* If the menu is open, render the menu modal */}
      {isMobileMenuOpen && <MenuModal />}
    </>
  );
}

const MenuToggle = styled.button`
  position: absolute;
  right: 24px;
  top: 24px;
  background: transparent;
  border: 0;
  color: white;
  z-index: 5;
  height: 40px;
  width: 40px;
  display: none;

  @media (max-width: 560px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default connect(MobileMenu);
