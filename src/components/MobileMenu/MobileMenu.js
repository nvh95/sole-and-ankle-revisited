/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import { DialogOverlay, DialogContent } from "@reach/dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Mobile Menu">
        <VisuallyHidden>Dismiss menu</VisuallyHidden>
        <CloseButton>
          <Icon id="close" strokeWidth={1} onClick={onDismiss} />
        </CloseButton>

        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.8);
`;

const Content = styled(DialogContent)`
  background-color: var(--color-white);
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  position: fixed;
  right: 0px;
  width: 300px;
`;

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
  padding: 16px;
  margin: -16px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

const NavLink = styled.a`
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);
  font-size: ${18 / 16}rem;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

const FooterLink = styled.a`
  color: var(--color-gray-700);
  font-size: ${14 / 16}rem;
  text-decoration: none;
`;

export default MobileMenu;
