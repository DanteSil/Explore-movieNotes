import { Container } from './styles'
import { Link } from "react-router-dom"

export function ButtonText({icon: Icon, title, value, ...rest}) {
  return (
    <Container>
      <Link to="/" {...rest}>
        {Icon && <Icon/>}
        <p>{title}</p>
      </Link>
    </Container>
  )
}