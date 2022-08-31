import { Container, Logout, Name } from './styles';

import { Link } from "react-router-dom"
import { Input } from '../Input';

import { useAuth } from '../../hooks/auth';

export function Header() {
  const {signOut} = useAuth()
  function handleSignOut() {
    signOut()
  }
  return (
    <Container>
      
      <div className="content">
        <h1>RocketMovies</h1>
          <Input placeholder="Pesquisar pelo título"/>
        <div className='profile'>
          <Name to="/profile">Ramon Lima</Name>
          <Logout to="#" onClick={handleSignOut}>Sair</Logout>
        </div>

        <Link to="/profile">
          <img src="https://github.com/DanteSil.png" alt="Foto do usuário" />
        </Link>
      </div>
      

    </Container>
  )
}