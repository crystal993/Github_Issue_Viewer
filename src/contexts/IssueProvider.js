import { createContext, useContext, useReducer } from 'react';

const initialStates = {
  issueList: [],
  isLoading: false,
  hasMore: false,
  page: 1,
  issueDetail: {},
  isError: false
};

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ISSUE_LIST': {
      return {
        ...state,
        issueList: [...state.issueList, ...action.list],
        hasMore: action.hasMore,
        isLoading: action.isLoading,
        isError: action.isError,
      };
    }
    case 'SET_PAGE': {
      return {
        ...state,
        page: action.page,
      };
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: action.isLoading,
      };
    }
    case 'SET_ISSUE_DETAIL': {
      return {
        ...state,
        issueDetail: action.issue,
      };
    }
    case 'SET_ISSUE_LIST_ERROR': {
      return {
        ...state,
        isError: action.isError,
      };
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const IssueContext = createContext({
  issues: initialStates,
  setIssueList: () => {},
  setPage: () => {},
  setIsLoading: () => {},
  setIssueDetail: () => {},
  setIsError: () => {},
});

export const useIssueContext = () => {
  return useContext(IssueContext);
};

function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, initialStates);
  const setIssueList = ({ list, hasMore, isLoading, isError }) => {
    dispatch({ type: 'SET_ISSUE_LIST', list, hasMore, isLoading, isError });
  };
  const setPage = page => {
    dispatch({ type: 'SET_PAGE', page });
  };
  const setIsLoading = isLoading => {
    dispatch({ type: 'SET_LOADING', isLoading });
  };
  const setIssueDetail = issue => {
    dispatch({ type: 'SET_ISSUE_DETAIL', issue });
  };
  const setIsError = isError => {
    dispatch({ type: 'SET_ISSUE_LIST_ERROR', isError });
  };

  return (
    <IssueContext.Provider
      value={{
        issueList: state.issueList,
        hasMore: state.hasMore,
        isLoading: state.isLoading,
        isError: state.isError,
        page: state.page,
        issueDetail: state.issueDetail,
        setIssueList,
        setIsLoading,
        setPage,
        setIssueDetail,
        setIsError,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
}

export default IssueProvider;
