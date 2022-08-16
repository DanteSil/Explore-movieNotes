import { Container, Form, Background } from "./styles";

import { Link } from "react-router-dom";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi'

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>

        <h2>Crie sua conta</h2>

        <Input type="text" placeholder="Nome" icon={FiUser}/>
        <Input type="text" placeholder="E-mail" icon={FiMail}/>
        <Input type="password" placeholder="Senha" icon={FiLock}/>

        <div className="button">
          <Button isNew title="Entrar"/>
        </div>

        <Link to="/"><FiArrowLeft/>Voltar para o login</Link>    
      </Form>

      <Background />
    </Container>
  )
}