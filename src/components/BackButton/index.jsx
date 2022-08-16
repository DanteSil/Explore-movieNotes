import { Container } from './styles'

import { Link } from "react-router-dom"

import { FiArrowLeft } from 'react-icons/fi'

export function BackButton() {
  return (
    <Container to="/">
      <FiArrowLeft size={16}/> 
       <p>Voltar</p>
    </Container>
  )
}