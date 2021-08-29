import React from 'react';
import styled from 'styled-components/macro';
import HeaderLogo from './Logo';
import HeaderDarkButtonContainer from './DarkButton/Container';
import HeaderUsername from './Username';
import HeaderNavLink from './NavLink';
import SidebarCreatePostButton from '../Sidebar/CreatePostButton';

const Wrapper = styled.header`
  position: sticky;
  z-index: 10;
  top: 0;
  display: flex;
  align-items: stretch;
  margin-bottom: 24px;
  height: 48px;
  padding: 0 10vw;
  background-color: linear-gradient(90deg, rgba(41,0,184,1) 0%, rgba(151,0,255,1) 100%);
  user-select: none;

  @media (max-width: 425px) {
    margin-bottom: 16px;
    height: 40px;
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const Header = ({ user, logout, token }) => (
  <Wrapper>
    <HeaderLogo />
    {token && <SidebarCreatePostButton />}
    <HeaderDarkButtonContainer />
    {user ? (
      <>
        <HeaderUsername username={user.username} />
        <HeaderNavLink as='span' onClick={logout}>
          log out
        </HeaderNavLink>
      </>
    ) : (
      <>
        <HeaderNavLink to='/login'>log in</HeaderNavLink>
        <HeaderNavLink to='/signup'>sign up</HeaderNavLink>
      </>
    )}
  </Wrapper>
);

export default Header;
