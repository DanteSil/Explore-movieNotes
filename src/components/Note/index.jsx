import { Container } from "./styles";

import { Tags } from '../../components/Tags'
import { Rate } from '../../components/Rate'

export function Note({data, ...rest}) {
  return (
    <Container {...rest}>
      <h1>{data.title}</h1>
      <div className="rating"><Rate data={data}/></div>
      <p>{data.description}</p>
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