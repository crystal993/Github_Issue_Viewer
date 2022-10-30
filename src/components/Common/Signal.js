import styled from "styled-components"

const Signal = ({ status, imgSrc }) => {
  return (
    <SignalWrapper>
      <IMG src={imgSrc} alt='에러' />
      {status}
    </SignalWrapper>
  )
}

const SignalWrapper = styled.section`
  display:flex;
  justify-content:center;
  text-align:center;
  align-items:center;
  font-weight: bold;
  font-size: 2rem;
  @media screen and (max-width: 413px) {
      font-size: 1rem;
    }
`
const IMG = styled.img`
  width: 5rem;
  height: 5rem;
  margin-left: 1%;
`


export default Signal