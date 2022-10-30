import Layout from "./Layout"
import Header from "./Header"

const Container = ({children}) => {
  const title = 'Angular / Angular-cli'
  return(
    <Layout>
          <Header>{title}</Header>
          {children}
    </Layout>

  )
}

export default Container