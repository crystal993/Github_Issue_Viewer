import { useEffect, useCallback } from 'react';
import { IssuesService } from '../api/issues';
import { useIssueContext } from '../contexts/IssueProvider';
import { useRepoContext } from '../contexts/RepoProvider';

const useAxios = () => {
  const { ownerRepo } = useRepoContext();
  const { page, setIssueList, setIsLoading, setIsError } = useIssueContext();

  const getIssues = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await IssuesService.getIssueList(page, ownerRepo);
      setIssueList({ list: response.data, hasMore: response.data.length > 0, isLoading: false, isError: false });
    } catch (err) {
      setIsLoading(false);
      setIsError(true);
    }
  }, [page]);

  useEffect(() => {
    getIssues();
  }, [getIssues, page]);
};

export default useAxios;
