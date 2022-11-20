import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getCurDate } from '../../utils/date';

const Issue = ({ issue }) => {
  const navigate = useNavigate();
  return (
    <Wrapper onClick={() => navigate(`/issue/${issue.number}`)}>
      <ContentsWrapper>
        <TitleWrapper>
          # {issue.number} {issue.title}
        </TitleWrapper>
        <WriterInfoWrapper>
          작성자 : {issue.user.login}, 작성일 : {getCurDate(issue.created_at)}
        </WriterInfoWrapper>
      </ContentsWrapper>
      <CommentsWrapper>코멘트: {issue.comments}</CommentsWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  text-overflow: ellipsis;
  padding: 0.1rem;
  border-bottom: 1px solid ${({ theme }) => theme.gray};
  cursor: pointer;
  padding: 0.5rem 1rem;
`;

const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  padding-bottom: 0.6rem;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 50rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 38rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    /* Mobile */
    width: 23rem;
  }
  @media (max-width: 320px) {
    /* Mobile */
    width: 18rem;
  }
`;

const TitleWrapper = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const WriterInfoWrapper = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const CommentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export default Issue;
