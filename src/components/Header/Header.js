import React from "react";
import styled from "styled-components/macro";

import { QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";

import UnstyledButton from "components/UnstyledButton";
import Icon from "components/Icon";
import VisuallyHidden from "components/VisuallyHidden";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <DesktopSide />
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="menu" onClick={() => setShowMobileMenu(true)} />
            <VisuallyHidden>Open menu</VisuallyHidden>
          </UnstyledButton>
        </MobileNav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletAndDown} {
    justify-content: space-between;
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4vw;
  margin: 0px 48px;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndDown} {
    display: flex;
    gap: 24px;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndDown} {
    flex: revert;
  }
`;

const DesktopSide = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndDown} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

export default Header;
