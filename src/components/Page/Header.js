import styled from "styled-components"

const Header = ({children}) => {
  return(
    <HeaderH1>{children}</HeaderH1>
  )
}

const HeaderH1 = styled.h1`
  display:flex;
  justify-content:center;
  text-align:center;
  font-size: 5rem;
  margin-bottom: 2%;
  padding: 2%;
  border-radius: 1rem;
  color:var(--color-black);
  background-color:var(--color-white);
`

export default Header