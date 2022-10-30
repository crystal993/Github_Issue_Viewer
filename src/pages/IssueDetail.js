import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { getOneIssue } from "../api/issue";
import Container from "../container/Container"
import IssueCard from "../components/IssueCard/IssueCard";
import ReactMarkdown from "react-markdown";

const IssuDetail = () => {
  const [issue, setIssue] = useState(null)
  const params = useParams();

  useEffect(() => {
    const fetchIssue = async () => {
      const issueDetail = await getOneIssue(params.id)
      setIssue(issueDetail)
    }
    fetchIssue()
  }, [params.id])


  return (
    <Container>
      {issue ?
        (<><IssueCard number={issue.number} title={issue.title} user={issue.user} url={issue.html_url} created_at={issue.created_at} comments={issue.comments} key={issue.number} />
        <ReactMarkdown>{issue.body}</ReactMarkdown>
        </>) : null}
    </Container>
  )
}

export default IssuDetail