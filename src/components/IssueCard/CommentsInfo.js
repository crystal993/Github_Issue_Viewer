import styled from "styled-components"

const CommentsInfo = ({commentsLength}) => {
  return(
    <CommentWrapper>
      <div>코멘트 : {commentsLength}</div>
    </CommentWrapper>
  )
}

const CommentWrapper = styled.div`
  margin-left: auto;
  min-width :10rem;
  @media screen and (max-width: 413px) {
    min-width :5rem;
    }
`
export default CommentsInfo