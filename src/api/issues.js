import Request from '../utils/axios';

export const IssuesService = {
  getIssueList: (page, { owner, repo }) => {
    console.log('get IssueList');
    const config = {
      params: { sort: 'comments', per_page: 10, page },
    };
    return Request.get(`/repos/${owner}/${repo}/issues`, config);
  },
  getIssue: (issue_num, { owner, repo }) => {
    console.log('get Issue');
    return Request.get(`/repos/${owner}/${repo}/issues/${issue_num}`);
  },
};
