import Container from '../container/Container'
import { useContext } from 'react'
import { IssueContext } from '../contexts/IssueContextProvider'

const HomePage = () => {
const context =  useContext(IssueContext)
console.log(context)
  return(
    <Container>
      
    </Container>
  )
}

export default HomePage