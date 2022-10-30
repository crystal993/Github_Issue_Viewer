import { createContext, useContext, useReducer } from 'react';

const initialStates = {
  issueList: [],
  isLoading: false,
  hasMore: false,
  page: 1,
  issueDetail: {},
};

const issueReducer = (state, action) => {
  switch (action.type) {
    case 'SET_ISSUE_LIST': {
      return {
        ...state,
        issueList: [...state.issueList, ...action.list],
        hasMore: action.hasMore,
        isLoading: action.isLoading,
      };
    }
    // case 'INIT_ISSUE_LIST': {
    //   return {
    //     ...state,
    //     issueList: action.list,
    //     hasMore: action.hasMore,
    //     isLoading: action.isLoading,
    //   };
    // }
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
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const IssueContext = createContext({
  issues: initialStates,
  setIssueList: () => {},
  // setInitIssueList: () => {},
  setPage: () => {},
  setIsLoading: () => {},
  setIssueDetail: () => {},
});

export const useIssueContext = () => {
  return useContext(IssueContext);
};

function IssueProvider({ children }) {
  const [state, dispatch] = useReducer(issueReducer, initialStates);
  const setIssueList = ({ list, hasMore, isLoading }) => {
    dispatch({ type: 'SET_ISSUE_LIST', list, hasMore, isLoading });
  };
  // const setInitIssueList = (list) => {
  //   dispatch({ type: 'INIT_ISSUE_LIST', list });
  // };
  const setPage = page => {
    dispatch({ type: 'SET_PAGE', page });
  };
  const setIsLoading = isLoading => {
    dispatch({ type: 'SET_LOADING', isLoading });
  };
  const setIssueDetail = issue => {
    dispatch({ type: 'SET_ISSUE_DETAIL', issue });
  };

  return (
    <IssueContext.Provider
      value={{
        issueList: state.issueList,
        hasMore: state.hasMore,
        isLoading: state.isLoading,
        page: state.page,
        issueDetail: state.issueDetail,
        setIssueList,
        // setInitIssueList,
        setIsLoading,
        setPage,
        setIssueDetail,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
}

export default IssueProvider;
