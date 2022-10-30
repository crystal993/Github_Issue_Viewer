import styled from "styled-components"

const Title = ({ number, title, url }) => {
  return (
    <TitleWrapper href={`/${number}`}>
      <div className="number">#{number}</div>
      <div>{title}</div>
    </TitleWrapper>
  )
}
const TitleWrapper = styled.a`
  display:flex;
  justify-content:center;
  text-align:center;
  text-decoration: none;
  color: inherit;
  margin-bottom: 5%;
  .number{
    margin-right: 1rem;
  }
`

export default Title