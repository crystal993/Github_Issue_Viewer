import { createContext, useEffect, useReducer } from "react";
import { getIssue } from "../api/issue";
import { reducer } from "./reducer";
export const IssueContext = createContext({})

const initialState = {
  loading: false,
  data : [],
  pageNumber : 1,
  error : null,
  reachedEnd: false
}


const IssueContextProvider = ({children}) => {
  // const [date, setDate] = useState('')
  const [state, dispatch] = useReducer(reducer, initialState)
  const fetchIssues = async(initialState) => {
    dispatch({type:'LOADING'})
    try{
      const response = await getIssue(initialState)
      if(response.length>0){
        dispatch({type:'SUCCESS', data: response})
      }else{
        dispatch({type:'REACH_END', data: response})
      }
    } catch(error) {
      dispatch({type:'ERROR', error})
  }
  }
  
  useEffect(()=>{
    fetchIssues(initialState.pageNumber)
  }, [])
  const { loading, data, pageNumber,error, reachedEnd } = state;
  return(
    <IssueContext.Provider value={{loading, data,pageNumber, error, reachedEnd, fetchIssues }}>{children}</IssueContext.Provider>
  )
}

export default IssueContextProvider