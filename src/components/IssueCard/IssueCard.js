import Title from "./Title"
import IssueInfo from "./IssueInfo"
import CommentsInfo from "./CommentsInfo"
import styled from "styled-components"
import { isoToTimeStamp } from "../../utils/convertDate"

const IssueCard = ({ number, title, user, html_url, created_at, comments }) => {
  const convertedDate = isoToTimeStamp(created_at)
  return (
    <HoriziontalWrapper>
      <div>
        <Title number={number} title={title} url={html_url} />
        <IssueInfo user={user} createdAt={convertedDate} />
      </div>
      <CommentsInfo commentsLength={comments} />
    </HoriziontalWrapper>
  )
}

const HoriziontalWrapper = styled.div`
  display:flex;
  text-align:start;
  margin: 1%;
  border: 1px solid blue;
`

export default IssueCard