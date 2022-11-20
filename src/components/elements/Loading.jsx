// Loading.js
import React from 'react';
import styled from 'styled-components';
import Spinner from '../../assets/spinner.gif';

export default () => {
  return (
    <Background>
      <LoadingText>잠시만 기다려 주세요.</LoadingText>
      <SpinnerImg src={Spinner} alt="로딩중" width="5%" />
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.4rem;
  margin: 1rem auto;
`;
const LoadingText = styled.div`
  color: white;
  margin: 1rem;
`;
const SpinnerImg = styled.img`
  width: 3rem;
`;
