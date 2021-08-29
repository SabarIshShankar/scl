import React from 'react';
import styled from 'styled-components/macro';
import LoadingIndicatorSpinner from './Spinner';

const Box = styled.div`
  position: relative;
  margin: 48px auto 0;
  width: 72px;
  height: 72px;
`;

const LoadingIndicatorBox = () => (
  <Box>
    <LoadingIndicatorSpinner />
  </Box>
);

export default LoadingIndicatorBox;
