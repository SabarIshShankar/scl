import React from 'react';
import styled from 'styled-components/macro';
import Markdown from '../../shared/Markdown';
import '../../../style.css';

const Wrapper = styled.div`
  margin: 8px -8px;
  border: 1px solid ${props => props.theme.border};
  border-left: none;
  border-right: none;
  padding: 8px;
  background-color: ${props => props.theme.inputBackground};
  font-family: 'Space Grotesk';
`;

const PostContentFullText = props => (
  <Wrapper>
    <Markdown>{props.children}</Markdown>
  </Wrapper>
);

export default PostContentFullText;
