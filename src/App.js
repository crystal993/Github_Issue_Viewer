import { GlobalStyles } from './styles/common';
import Router from './router/Router';
import { createElement } from 'react';
import RepoProvider from './contexts/RepoProvider';
import IssueProvider from './contexts/IssueProvider';

const App = () => {
  const AppProvider = ({ context, children }) =>
    context.reduce(
      (prev, context) =>
        createElement(context, {
          children: prev,
        }),
      children
    );

  return (
    <>
      <AppProvider context={[RepoProvider, IssueProvider]}>
        <GlobalStyles />
        <Router />
      </AppProvider>
    </>
  );
};

export default App;
