import { instance } from './axios';

export const apis = {
  get_issues: page =>
    instance.get(
      `/repos/angular/angular-cli/issues?state=open&sort=comments&page=${page}&per_page=10`
    ),
  get_an_issue: issue_number => {
    return instance.get(`/repos/angular/angular-cli/issues/${issue_number}`);
  },
  post_render_markdown: text => {
    const body = { text: text };
    return instance.post('/markdown', body);
  },
};
