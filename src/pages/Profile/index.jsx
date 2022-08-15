import { Container, Form, Avatar } from "./styles";

import {FiCamera, FiUser, FiMail, FiLock} from 'react-icons/fi'

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function Profile() {
  return (
    <Container>
      <header>
        <BackButton />
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/DanteSil.png" alt="foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <Input 
        isProfile
        placeholder="ramon Santos"
        icon={FiUser}
        type="text"
        />

        <Input 
        isProfile
        placeholder="ramon@email.com"
        icon={FiMail}
        type="text"
        />

        <Input 
        placeholder="Senha Atual"
        icon={FiMail}
        type="password"
        />
        <Input 
        placeholder="Nova Senha"
        icon={FiMail}
        type="password"
        />

        <Button isNew title="Salvar"/>
        

      </Form>
      
    </Container>
  )
}