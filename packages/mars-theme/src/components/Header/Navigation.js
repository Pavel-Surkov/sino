import React from "react";
import { connect, styled, css } from "frontity";
import { flex, font } from "../base/functions";
import Button from "../constant/Button";
import drop from "../../assets/images/svg/drop.svg";
import Link from "../constant/Link";

const Navigation = ({ state }) => {
  const navLinks = state.theme.menu;

  return (
    <nav
      css={css`
        height: 100%;
        ${flex("row", "center")}
      `}
    >
      <List>
        {navLinks &&
          navLinks.map((link) => {
            if (link.isDropdown) {
              return (
                <ListItem key={link.text}>
                  <NavButton>
                    <span>{link.text}</span>
                    <img width="14" height="14" src={drop} alt="drop" />
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
    </nav>
  );
};

const NavLink = styled(Link)`
  ${font(18, 30)};
  font-weight: 400;
`;

const NavButton = styled(Button)`
  ${flex("row", "center")};
  ${font(18, 30)};
  font-weight: 400;
  & span {
    display: inline-block;
    margin-right: 8px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 44px;
  &:last-child {
    margin-right: 0;
  }

  @media screen and (max-width: 1400px) {
    margin-right: 24px;
  }
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  ${flex("row", "center")}
`;

export default connect(Navigation);
