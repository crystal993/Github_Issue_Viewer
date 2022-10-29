import { instance } from './axios';

export const apis = {
  get_issues: () =>
    instance.get('/repos/angular/angular-cli/issues?state=open&sort=comments&per_page=100'),
  get_an_issue: () => instance.get('/todos'),
};
