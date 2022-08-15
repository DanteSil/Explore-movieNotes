import { Container } from "./styles";

import { Tags } from '../../components/Tags'
import { Rating } from '../../components/Rating'

export function Note({data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="rating"><Rating/></div>
      <p>{data.content}</p>
      {data.tags && 
       <footer>
        {
          data.tags.map(tag => <Tags key={tag.id} title={tag.name}/>
          )
        }
          </footer>      
        }
    </Container>
  )
}