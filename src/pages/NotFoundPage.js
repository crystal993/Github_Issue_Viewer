import Container from "../components/Page/Container"
import Signal from "../components/Common/Signal"
import ErrorSign from '../asstes/ErrorSign.png'
const NotFoundPage = () => {
  return(
    <Container>
      <Signal status={'페이지를 찾을 수 없습니다.'} imgSrc={ErrorSign} />
    </Container>
  )
}

export default NotFoundPage