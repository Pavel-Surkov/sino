import { connect, styled, css } from "frontity";
import Button from "../constant/Button";
import close from "../../assets/images/svg/Close.svg";
import { flex } from "../base/functions";

const MenuIcon = ({ state, actions }) => {
  const mobileMenuOpened = state.theme.isMobileMenuOpen;

  return mobileMenuOpened ? (
    <div
      css={css`
        ${flex("row", "center", "flex-end")}
      `}
    >
      <Button>
        <img src={close} alt="close" />
      </Button>
    </div>
  ) : (
    <div
      css={css`
        ${flex("row", "center", "flex-end")}
      `}
    >
      <Hamburger aria-label="Open menu">
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
    </div>
  );
};

const Hamburger = styled(Button)`
  position: relative;
  width: 40px;
  height: 40px;
  & span {
    position: absolute;
    border-radius: 2px;
    background: var(--blue-600);
    height: 2px;
    width: 23px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:first-of-type {
      transform: translate(-50%, -50%) translateY(-8px);
    }
    &:last-child {
      transform: translate(-50%, -50%) translateY(8px);
    }
  }
`;

export default connect(MenuIcon);
