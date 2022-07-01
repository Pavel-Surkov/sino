import React from "react";
import { connect, styled } from "frontity";
import { flex, font } from "../base/functions";
import Button from "../constant/Button";
import drop from "../../assets/images/svg/drop.svg";
import Link from "../constant/Link";

const Navigation = ({ state }) => {
  const navLinks = state.theme.menu;

  return (
    <Nav className="navigation">
      <List>
        {navLinks &&
          navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <ListItem key={link.text}>
                  <NavButton>
                    <span>{link.text}</span>
                    <img
                      style={
                        link.isDropdownOpened
                          ? { transform: "rotate(180deg)" }
                          : { transform: "none" }
                      }
                      width="14"
                      height="14"
                      src={drop}
                      alt="drop"
                    />
                  </NavButton>
                </ListItem>
              );
            }

            return (
              <ListItem key={link.text}>
                <NavLink link={link.route}>{link.text}</NavLink>
              </ListItem>
            );
          })}
      </List>
    </Nav>
  );
};

const Nav = styled.nav`
  height: 100%;
  margin-top: 37px;
  margin-bottom: 72px;
`;

const NavLink = styled(Link)`
  ${font(24, 32)};
  font-weight: 400;
`;

const NavButton = styled(Button)`
  ${flex("row", "center")};
  ${font(24, 32)};
  font-weight: 400;
  & span {
    display: inline-block;
    margin-right: 8px;
  }
  & img {
    transform: translateY(2px);
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 24px;
  display: inline-block;
  &:last-child {
    margin-bottom: 0;
  }
  &:hover {
    & button,
    & a {
      color: var(--blue-600);
    }
  }
  &:active {
    & button,
    & a {
      color: var(--gray-menu);
    }
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  ${flex("column")};
`;

export default connect(Navigation);
