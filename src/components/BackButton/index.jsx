import { Container } from './styles'

import { FiArrowLeft } from 'react-icons/fi'

export function BackButton() {
  return (
    <Container>  
      <FiArrowLeft size={16}/> 
       <p>Voltar</p>
    </Container>
  )
}