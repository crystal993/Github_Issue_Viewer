import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssuesService } from '../api/issues';
import { Main } from '../styles/issues';
import Header from '../components/Header';
import LoadingSpinner from '../components/LoadingSpinner';
import DetailItem from '../components/issueDetail/DetailItem';
import ErrorRenderer from '../components/issueDetail/ErrorRenderer';
import { useIssueContext } from '../contexts/IssueProvider';
import { useRepoContext } from '../contexts/RepoProvider';

const DetailsPage = () => {
  const { id } = useParams();

  const { issueDetail, setIssueDetail } = useIssueContext();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { ownerRepo } = useRepoContext();

  const getIssueData = async () => {
    try {
      const response = await IssuesService.getIssue(id, ownerRepo);
      setIssueDetail(response.data);
      setIsLoading(false);
    } catch (e) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    if (!Object.keys(issueDetail).length) {
      getIssueData();
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Header />
      <Main>{isLoading ? <LoadingSpinner /> : isError ? <ErrorRenderer /> : <DetailItem />}</Main>
    </>
  );
};

export default DetailsPage;
