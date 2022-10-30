import { useContext, useCallback, useRef  } from 'react'
import { IssueContext } from '../contexts/IssueContextProvider'
import Container from '../container/Container'
import Loading from '../components/Loading'
import IssueCard from '../components/IssueCard/IssueCard'
import IssueContainer from '../container/IssueContainer'
// import { getIssue } from '../api/issue'

const HomePage = () => {
const context =  useContext(IssueContext)
const {loading, data, pageNumber, reachedEnd, fetchIssues} = context
const observer = useRef()
const lastRef = useCallback(
  node => {
    // if(loading) {
    //   return <Loading />
    // }
    if(observer.current){
      observer.current.disconnect()
    }
    observer.current = new IntersectionObserver(entries => {
      if(entries[0].isIntersecting && !reachedEnd){

        fetchIssues(pageNumber)
      }
    })
    if(node){
      observer.current.observe(node);
    }
  },
  [pageNumber, reachedEnd, fetchIssues]
)
  return(
    <Container>
      <IssueContainer>
      {data?.map((info)=>(
              <IssueCard number={info.number} title={info.title} user={info.user} url={info.html_url} created_at={info.created_at} comments={info.comments} key={info.id}/>
      ))}
      {
        loading ? (
        <Loading />
        ): (
          <div ref={lastRef}></div>
        )
      }
      </IssueContainer>
    </Container>
  )
}

export default HomePage