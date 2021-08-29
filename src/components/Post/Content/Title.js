import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import { overflow, link } from '../../shared/helpers';
import './style.css'
const Wrapper = styled.div`
  display: flex;

  * {
    ${overflow};

    display: block;
    font-size: 19px;
    line-height: 21px;
    text-decoration: none;
    color: ${props => props.theme.normalText};
    ${props => props.full && 'white-space: unset'};
  }

  a {
    ${link({ underline: true })};
  }
`;

const renderTitle = props => {
  switch (props.type) {
    case 'link':
      return <p>{props.title}<a href={props.url} className="link">Visit link</a></p>;

    case 'text':
      if (props.full) return <span>{props.title}</span>;
      return <Link to={`/a/${props.category}/${props.id}`}>{props.title}</Link>;

    default:
      break;
  }
};

const PostContentTitle = props => (
  <Wrapper full={props.full}>{renderTitle(props)}</Wrapper>
);

export default PostContentTitle;
