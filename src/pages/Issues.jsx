import React, { useCallback, useRef } from 'react';
import styled from 'styled-components';
import useAxios from '../hooks/useAxios';
import { Main } from '../styles/issues';
import Header from '../components/Header';
import AdvertItem from '../components/issues/AdvertItem';
import IssueItem from '../components/issues/IssueItem';
import LoadingSpinner from '../components/LoadingSpinner';
import { useIssueContext } from '../contexts/IssueProvider';
import ErrorRenderer from '../components/issueDetail/ErrorRenderer';

const IssuesPage = () => {
  const { issueList, isLoading, hasMore, page, isError, setPage } = useIssueContext();

  useAxios();

  const observer = useRef();
  const lastRef = useCallback(
    node => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasMore) {
          setPage(page + 1);
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [isLoading, hasMore]
  );
  return (
    <>
      <Header />
      {isError ? (
        <ErrorRenderer />
      ) : (
        <>
          <Main>
            <Section>
              {issueList.map((issue, index) => (
                <div key={index}>
                  {index === 4 && <AdvertItem />}
                  <IssueItem key={index} issue={issue} />
                </div>
              ))}
            </Section>
          </Main>
          {isLoading && <LoadingSpinner />}
          <div ref={lastRef}></div>
        </>
      )}
    </>
  );
};

const Section = styled.section`
  height: 100%;
  width: 100%;
  padding: 0.5em;
`;

export default IssuesPage;
