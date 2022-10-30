import styled from "styled-components"

const Layout = ({children}) => {
  return(
    <VerticalWrapper>
      {children}
    </VerticalWrapper>
  )
}

const VerticalWrapper = styled.div`
  display: flex;
  text-align:center;
  flex-direction: column;
  border: 1px solid red;
`

export default Layout