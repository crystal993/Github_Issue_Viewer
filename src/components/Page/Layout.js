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
  flex-direction: column;
  padding: 2%;
`

export default Layout