import { detailSuccess, errors, loadingState, mainSuccess } from '../context/contextState';

function issuesReducer(state, action) {
  switch (action.type) {
    case 'GET_ISSUES':
      return {
        ...state,
        issues: {
          ...state.issues,
          loading: true,
        },
      };
    case 'GET_ISSUES_SUCCESS': {
      return {
        ...state,
        issues: mainSuccess([...state.issues.data, ...action.data], action.page),
      };
    }
    case 'GET_ISSUES_ERROR':
      return {
        ...state,
        issues: errors(action.error),
      };
    case 'GET_ISSUE':
      return {
        ...state,
        issue: loadingState,
      };
    case 'GET_ISSUE_SUCCESS':
      return {
        ...state,
        issue: detailSuccess(action.data),
      };
    case 'GET_ISSUE_ERROR':
      return {
        ...state,
        issue: errors(action.error),
      };

    default:
      throw new Error(`Unhanded action type: ${action.type}`);
  }
}

export default issuesReducer;
