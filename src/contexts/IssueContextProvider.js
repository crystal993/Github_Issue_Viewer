import { createContext, useEffect, useReducer } from "react";
import { getIssue } from "../api/issue";
import { reducer } from "./reducer";
export const IssueContext = createContext({})

const initialState = {
  loading: false,
  data : [],
  error : null,
}

const IssueContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchIssues = async() => {
    dispatch({type:'LOADING'})
    try{
      const response = await getIssue()
      dispatch({type:'SUCCESS', data: response})
    } catch(error) {
      dispatch({type:'ERROR', error})
  }
  }
  
  useEffect(()=>{
    fetchIssues()
  }, [])
  const { loading, data, error } = state;
  return(
    <IssueContext.Provider value={{loading, data, error }}>{children}</IssueContext.Provider>
  )
}

export default IssueContextProvider