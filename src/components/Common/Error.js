import Container from "../../container/Container"
import IssueContainer from "../../container/IssueContainer"

const Error = ({children}) => {
  return (
    <Container>
      <IssueContainer>
        {children}
      </IssueContainer>
    </Container>
  )
}


export default Error