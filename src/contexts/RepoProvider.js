import { createContext, useContext, useReducer } from 'react';

const initialStates = {
  owner: 'angular',
  repo: 'angular-cli',
};

const repoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_REPO': {
      return action.ownerRepo;
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
};

const RepoContext = createContext({
  ownerRepo: initialStates,
  setOwnerRepo: () => {},
});


export const useRepoContext = () => {
  return useContext(RepoContext);
};


function RepoProvider({ children }) {
  const [state, dispatch] = useReducer(repoReducer, initialStates);
  const setOwnerRepo = ownerRepo => {
    dispatch({ type: 'SET_REPO', ownerRepo });
  };

  return (
    <RepoContext.Provider
      value={{
        ownerRepo: state,
        setOwnerRepo,
      }}
    >
      {children}
    </RepoContext.Provider>
  );
}

export default RepoProvider;
