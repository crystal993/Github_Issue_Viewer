import { useContext } from 'react'
import { IssueContext } from '../contexts/IssueContextProvider'
import Container from "../components/Page/Container"
import ErrorSign from '../asstes/ErrorSign.png'
import Signal from '../components/Common/Signal'
import IssueListContainer from '../container/IssueListContainer'

const HomePage = () => {
  const context = useContext(IssueContext)
  const {  isError } = context
  return (
    <Container>
        {isError ? (<Signal status={'에러'} imgSrc={ErrorSign} />)  :    (<IssueListContainer />)}
    </Container>
  )
}


export default HomePage