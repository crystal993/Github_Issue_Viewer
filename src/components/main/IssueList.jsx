import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getIssues, useIssuesDispatch, useIssuesState } from '../../context/IssuesContext';
import Loading from '../elements/Loading';
import Issue from './Issue';

const IssueList = () => {
  const navigate = useNavigate();
  const state = useIssuesState();
  const dispatch = useIssuesDispatch();

  const { data: issues, loading, error } = state.issues;
  const [target, setTarget] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    if (page === 0 && !issues) getIssues(dispatch, page);
  }, []);

  useEffect(() => {
    if (page > 0) getIssues(dispatch, page);
  }, [dispatch, page]);

  useEffect(() => {
    let observer;
    if (target) {
      const handleObserver = ([entry], observer) => {
        const target = entry;
        if (target.isIntersecting) {
          setPage(prev => prev + 1);
        }
      };

      observer = new IntersectionObserver(handleObserver, { threshold: 1 });
      observer.observe(target);
    }
    return () => observer && observer.disconnect();
  }, [target]);

  if (error) return <div>에러가 발생했습니다</div>;
  return (
    <>
      {!loading && (
        <Wrapper>
          <ItemList>
            {issues?.map((issue, idx) => {
              if (idx + 1 !== 5) {
                return <>{issue && <Issue issue={issue} key={issue.id} />}</>;
              } else {
                return (
                  <>
                    {
                      <AdImg
                        src={
                          'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100'
                        }
                        onClick={() =>
                          navigate('/redirect', { state: { url: 'https://www.wanted.co.kr/ ' } })
                        }
                      />
                    }
                  </>
                );
              }
            })}
          </ItemList>
        </Wrapper>
      )}
      {loading && <Loading />}
      <div ref={setTarget}></div>
    </>
  );
};

const Wrapper = styled.div`
  background-color: rgb(255, 255, 255);
  display: flex;
  flex-direction: column;
  margin: auto;
  min-height: 0rem;
  height: 100%;
  @media (min-width: 1280px) {
    /* Desktop */
    width: 60rem;
  }
  @media (min-width: 768px) and (max-width: 1280px) {
    /* Tablet */
    width: 50rem;
  }
  @media (max-width: 767px) {
    /* Mobile */
    width: 40rem;
  }
`;

const ItemList = styled.div`
  width: 100%;
  min-height: 0rem;
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 255, 255);
  margin-top: 0.5rem;
  column-gap: 1rem;
  row-gap: 1rem;
  margin-bottom: 1rem;
`;

const AdImg = styled.img`
  margin: 0 auto;
  cursor: pointer;
  width: 90%;
  height: 5rem;
  object-fit: contain;
`;

export default IssueList;
