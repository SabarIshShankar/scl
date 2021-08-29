import React from 'react';
import styled from 'styled-components/macro';
import SidebarCreatePostButton from './CreatePostButton';
import SidebarCategoryList from './CategoryList';

const Wrapper = styled.aside`
display: none;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Sidebar = ({ token }) => (
  <Wrapper>

  </Wrapper>
);

export default Sidebar;
//{token && <SidebarCreatePostButton />}
//<SidebarCategoryList />