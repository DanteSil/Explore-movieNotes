import { Container } from "./styles";

export function Rating() {
  return (
    <Container>
      <li className="star-icon on" >&#9733;</li>
      <li className="star-icon" >&#9733;</li>
      <li className="star-icon" >&#9733;</li>
      <li className="star-icon" >&#9733;</li>
      <li className="star-icon" >&#9734;</li>
    </Container>
  )
}