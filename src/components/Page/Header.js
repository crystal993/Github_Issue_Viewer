import styled from "styled-components"

const Header = ({children}) => {
  return(
    <HeaderH1>{children}</HeaderH1>
  )
}

const HeaderH1 = styled.h1`
  font-size: 5rem;
  margin-bottom: 2%;
`

export default Header