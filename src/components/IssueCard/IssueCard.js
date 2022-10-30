import Title from "./Title"
import IssueInfo from "./IssueInfo"
import CommentsInfo from "./CommentsInfo"
import styled from "styled-components"
import { isoToTimeStamp } from "../../utils/convertDate"

const IssueCard = ({ number, title, user, html_url, created_at, comments }) => {
  const convertedDate = isoToTimeStamp(created_at)
  return (
    <HoriziontalWrapper>
      <TopWrapper>
        <Title number={number} title={title} url={html_url} />
        <IssueInfo user={user} createdAt={convertedDate} />
      </TopWrapper>
      <CommentsInfo commentsLength={comments} />
    </HoriziontalWrapper>
  )
}

const HoriziontalWrapper = styled.div`
  display:flex;
  margin-bottom: 1%;
  background-color:#231A4C;
  padding: 2%;
  border-radius: 1rem;
`
const TopWrapper = styled.section`
  width:100%;
`

export default IssueCard