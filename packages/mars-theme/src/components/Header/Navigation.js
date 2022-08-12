import React from "react";
import { connect, styled } from "frontity";
import { flex, font } from "../base/functions";
import drop from "../../assets/images/svg/drop.svg";
import Link from "../constant/Link";

const Navigation = ({ state, actions }) => {
  const navLinks = state.source.get(`/menu/main-menu/`).items; //state.theme.menu;
  const { selectedMenuItem, hoveredMenuItem } = state.theme;

  console.log(navLinks);

  const handleDropdownClick = (menuItem) => {
    if (!selectedMenuItem || selectedMenuItem.title !== menuItem.title) {
      actions.theme.setMenuItem(menuItem);
    } else {
      actions.theme.setMenuItem(null);
      actions.theme.setHoveredItem(menuItem);
    }
  };

  const handleDropdownHover = (menuItem) => {
    if (!hoveredMenuItem || hoveredMenuItem.title !== menuItem.title) {
      actions.theme.setHoveredItem(menuItem);
    }
  };

  const handleDropdownLeave = () => {
    actions.theme.setHoveredItem(null);
  };

  return (
    <Nav className="navigation">
      <List>
        {navLinks &&
          navLinks.map((link) => {
            if (link.child_items) {
              return (
                <ListItem key={link.title}>
                  <NavLink link={link.url}>
                    <span>{link.title}</span>
                    <Drop
                      onMouseLeave={() => handleDropdownLeave()}
                      onMouseEnter={() => handleDropdownHover(link)}
                      onClick={() => handleDropdownClick(link)}
                    >
                      <img width="14" height="14" src={drop} alt="drop" />
                    </Drop>
                  </NavLink>
                </ListItem>
              );
            }

            return (
              <ListItem key={link.title}>
                <NavLink link={link.url}>{link.title}</NavLink>
              </ListItem>
            );
          })}
      </List>
    </Nav>
  );
};

const Drop = styled.div`
  display: grid;
  place-items: center;
  padding: 2px 4px;
`;

const Nav = styled.nav`
  height: 100%;
  ${flex("row", "center")};

  @media screen and (max-width: 991px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  ${font(18, 30)};
  ${flex("row", "center")};
  font-weight: 400;
  & span {
    display: inline-block;
    margin-right: 4px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-right: 44px;
  &:last-child {
    margin-right: 0;
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
