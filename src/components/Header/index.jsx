import { Container, Logout, Name } from './styles';

import { Link } from "react-router-dom"
import { Input } from '../Input';

export function Header() {
  return (
    <Container>
      
      <div className="content">
        <h1>RocketMovies</h1>
          <Input placeholder="Pesquisar pelo título"/>
        <div className='profile'>
          <Name to="/profile">Ramon Lima</Name>
          <Logout to="/">Sair</Logout>
        </div>

        <Link to="/profile">
          <img src="https://github.com/DanteSil.png" alt="Foto do usuário" />
        </Link>
      </div>
      

    </Container>
  )
}