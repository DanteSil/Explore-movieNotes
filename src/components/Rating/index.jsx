import { Container } from "./styles";
import { IoMdStar, IoMdStarOutline} from 'react-icons/io'

export function Rating({size, value, ...rest}) {
  const rating = 2
  return(
    <Container>
        {
          [...Array(5)].map((star, index) => (
            <IoMdStar
            size={size}
            key={index}
            className={index < rating ? "on" : "off"}               
            />
          ))
        }
    </Container>

  )
}