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
`
export default CommentsInfo