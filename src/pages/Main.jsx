import React from 'react';
import styled from 'styled-components';
import IssueList from '../components/main/IssueList';

const Main = () => {
  return (
    <Wrapper>
      <IssueList />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  min-height: 50rem;
  margin: 1rem 0rem 1rem -1rem;
  background-color: ${({ theme }) => theme.mainColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem auto;
`;

export default Main;
