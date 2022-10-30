import { useContext } from 'react'
import { IssueContext } from '../contexts/IssueContextProvider'
import Container from '../container/Container'
import Loading from '../components/Loading'
import Error from '../components/Error'
import IssueCard from '../components/IssueCard/IssueCard'

const HomePage = () => {
const context =  useContext(IssueContext)
const {loading, data, error} = context

if (loading){
  return <Loading />
}
else if(error){
  return <Error />
}
  return(
    <Container>
      <div>TestCICD</div>
      {data?.map((info)=>(
              <IssueCard number={info.number} title={info.title} user={info.user} url={info.html_url} created_at={info.created_at} comments={info.comments} key={info.number}/>
      ))}
    </Container>
  )
}

export default HomePage