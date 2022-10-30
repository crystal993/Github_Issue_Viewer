import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { getOneIssue } from "../api/issue";
import Container from "../components/Page/Container"
import IssueCard from "../components/IssueCard/IssueCard";
import ReactMarkdown from "react-markdown";
// import IssueContainer from "../container/IssueContainer";
import styled from "styled-components";

const IssuDetail = () => {
  const [issue, setIssue] = useState(null)
  const params = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    const fetchIssue = async () => {
      try{
        const issueDetail = await getOneIssue(params.id)
        setIssue(issueDetail)
      } catch(error){
        navigate('/error')
      }
    }
    fetchIssue()
  }, [params.id])


  return (
    <Container>
      {issue ?
        (<><IssueCard number={issue.number} title={issue.title} user={issue.user} url={issue.html_url} created_at={issue.created_at} comments={issue.comments} key={issue.number} />
        <MarkDownWrapper>
        <ReactMarkdown>{issue.body}</ReactMarkdown>
        </MarkDownWrapper>
        </>) : null}
    </Container>
  )
}

const MarkDownWrapper = styled.section`
  padding: 2%;
  border-radius: 1rem;
  color:var(--color-black);
  background-color:var(--color-white);
  line-height: normal;
`

export default IssuDetail