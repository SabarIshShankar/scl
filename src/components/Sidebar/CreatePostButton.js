import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const CreatePostButton = styled(Button)`
  border-radius: 4px;
  padding: 12px;
  text-decoration: none;
  text-align: center;
  margin: 5px;
  background-color: linear-gradient(90deg, rgba(41,0,184,1) 0%, rgba(151,0,255,1) 100%);
`;

const SidebarCreatePostButton = () => (
  <CreatePostButton className="btn-grad" as={Link} to='/createpost'>new post</CreatePostButton>
);

export default SidebarCreatePostButton;


         
         