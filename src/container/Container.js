import Layout from "../components/Page/Layout"
import Header from "../components/Page/Header"

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