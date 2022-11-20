import React from 'react';
import styled from 'styled-components';
import error_page_img from '../assets/error_page_img.png';

const NotFound = () => {
  return (
    <Wrapper>
      <ErrorImg src={error_page_img}></ErrorImg>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 0 auto;
`;

const ErrorImg = styled.img`
  height: 20rem;
  width: 100%;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 40rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    height: 30rem;
  }
`;

export default NotFound;

