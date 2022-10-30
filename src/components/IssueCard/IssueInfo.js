import styled from "styled-components"

const IssueInfo = ({user, createdAt}) => {
  const {login, html_url} = user
  return(
    <InfoWrapper>
      <a href={html_url}>작성자 : {login}</a>
      <div>작성일 : {createdAt}</div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  display:flex;
  a{
    text-decoration: none;
    color: inherit;
  }
`


export default IssueInfo