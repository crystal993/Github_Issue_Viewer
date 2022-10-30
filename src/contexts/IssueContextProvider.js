import { createContext, useCallback, useState } from 'react';
import {getIssue} from '../api/issue'

export const IssueContext = createContext(null)


export const IssueContextProvider = ({children}) => {
  const [pageNumber, setPageNumber] = useState(0)
  const [isLoading, setIsLoading ] = useState(false)
  const [issueData, setIssueData] = useState([])
  const [isReachEnd, setIsReachEnd] = useState(false)
  const [isError, setIsError] = useState(false)

  const pageNumberHandler = ()=>{
    if(!isReachEnd){
      fetchIssues(pageNumber)
      setPageNumber((prev)=>prev+1)
    }
  }
  const fetchIssues = useCallback(async(pageNumber) => {
    try{
      setIsLoading(true)
      const response   = await getIssue(pageNumber)
      if(response.length === 0){
        setIsReachEnd(true)
      }
      setIssueData((prev)=>[...prev, ...response])
    }catch(error){
      setIsError(true)
    } finally{
      setIsLoading(false)
    }
  },[])

  return(
    <IssueContext.Provider value={{isLoading, issueData, isReachEnd, isError, fetchIssues, pageNumberHandler }}>
      {children}
      </IssueContext.Provider>
  )

}
export default IssueContextProvider