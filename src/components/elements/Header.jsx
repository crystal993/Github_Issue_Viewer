import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = ({ organName, repoName }) => {
  return (
    <Wrapper>
      <Title to="/">
        <h1>
          {organName} / {repoName}
        </h1>
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${({ theme }) => theme.subColor};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 100%;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    /* Mobile */
    width: 105%;
  }
  @media (max-width: 320px) {
    /* Mobile */
    width: 105%;
  }
`;

const Title = styled(Link)`
  margin: 1rem 2rem;
  text-decoration: none;
  font-size: 1.6rem;
  font-weight: 900;
  color: ${({ theme }) => theme.white};
`;

export default Header;
