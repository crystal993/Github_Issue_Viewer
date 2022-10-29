import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { getIssue } from "./api/issue";
import { GlobalStyles } from "./styles/GlobalStyles";
import Router from './Router'

const App= () => {
  useEffect(()=>{
    getIssue().then((res) => console.log(res))
  })
  return(
    <BrowserRouter>
    <GlobalStyles />
    <Router />
    </BrowserRouter>
  )
}

export default App;
