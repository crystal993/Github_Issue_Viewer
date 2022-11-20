import React, { createContext, useReducer, useContext } from 'react';
import { apis } from '../api/api';
import issuesReducer from '../lib/useReducer';

const initialState = {
  issues: {
    loading: true,
    data: [],
    error: null,
  },
  issue: {
    loading: true,
    data: null,
    error: null,
  },
};

const IssuesStateContext = createContext(null);
const IssuesDispatchContext = createContext(null);

// 두가지 Context 들의 Provider 로 감싸주는 컴포넌트
// 최상위 컴포넌트에서 사용
export function IssuesProvider({ children }) {
  const [state, dispatch] = useReducer(issuesReducer, initialState);
  return (
    <IssuesStateContext.Provider value={state}>
      <IssuesDispatchContext.Provider value={dispatch}>{children}</IssuesDispatchContext.Provider>
    </IssuesStateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useIssuesState() {
  const state = useContext(IssuesStateContext);
  if (!state) {
    throw new Error('Cannot find issuesProvider');
  }
  return state;
}

// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useIssuesDispatch() {
  const dispatch = useContext(IssuesDispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find issuesProvider');
  }
  return dispatch;
}

export async function getIssues(dispatch, page) {
  if (page <= 1) {
    dispatch({ type: 'GET_ISSUES' });
  }
  try {
    const response = await apis.get_issues(page);
    dispatch({ type: 'GET_ISSUES_SUCCESS', data: response.data, page });
  } catch (e) {
    dispatch({ type: 'GET_ISSUES_ERROR', error: e });
  }
}

export async function getIssue(dispatch, issue_number) {
  dispatch({ type: 'GET_ISSUE' });
  try {
    const response = await apis.get_an_issue(issue_number);
    dispatch({ type: 'GET_ISSUE_SUCCESS', data: response.data });
  } catch (e) {
    dispatch({ type: 'GET_ISSUE_ERROR', error: e });
  }
}
