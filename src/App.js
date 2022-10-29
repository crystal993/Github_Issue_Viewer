import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from './Router'
import IssueContextProvider from "./contexts/IssueContextProvider";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <IssueContextProvider>
        <Router />
      </IssueContextProvider>
    </BrowserRouter>
  )
}

export default App;
