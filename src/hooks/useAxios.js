import { useEffect, useCallback } from 'react';
import { IssuesService } from '../api/issues';
import { useIssueContext } from '../contexts/IssueProvider';
import { useRepoContext } from '../contexts/RepoProvider';

const useAxios = () => {
  const { ownerRepo } = useRepoContext();
  const { page, setIssueList, setIsLoading } = useIssueContext();

  const getIssues = useCallback(async () => {
    try {
      setIsLoading(true);
      // console.log('get issue');
      const response = await IssuesService.getIssueList(page, ownerRepo);
      setIssueList({list: response.data, hasMore: response.data.length > 0, isLoading: false})
    } catch (err) {
      setIsLoading(false);
    }
  }, [page]);

  // useEffect(() => {
  //   console.log('change owner');
  //   setIssueList({list: [], hasMore: false, isLoading: false});
  //   setPage(1);
  // }, [ownerRepo]);

  useEffect(() => {
    getIssues();
  }, [getIssues, page]);
};

export default useAxios;
