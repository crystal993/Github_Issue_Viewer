import styled from "styled-components"

const IssueInfo = ({user, createdAt}) => {
  const {login, html_url} = user
  return(
    <InfoWrapper>
      <img src={user.avatar_url} alt='profileImg'/>
      <a href={html_url}>작성자 : {login}</a>
      <div>작성일 : {createdAt}</div>
    </InfoWrapper>
  )
}

const InfoWrapper = styled.section`
  display:flex;
  img {
    width:2rem;
    height:2rem;
    border-radius: 50%;
    margin-right: 0.5rem;
  }
  a{
    text-decoration: none;
    color: inherit;
    margin-right: 0.5rem;
  }
`


export default IssueInfo