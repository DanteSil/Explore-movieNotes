import { Container, Logout } from './styles';

import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      
      <div className="content">
        <h1>RocketMovies</h1>
          <Input placeholder="Pesquisar pelo título"/>
        <div className='profile'>
          <strong>Ramon Lima</strong>
          <Logout>Sair</Logout>
        </div>

        <img src="https://github.com/DanteSil.png" alt="Foto do usuário" />
      </div>
      

    </Container>
  )
}