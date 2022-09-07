import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom"

import { useAuth } from '../../hooks/auth';
import { api } from '../../services/api';

import { Container, Logout, Name, Search } from './styles';

import { Input } from '../Input';


export function Header() {
  const {signOut, user} = useAuth()

  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderAvatar
  
  function handleSignOut() {
    signOut()
  }

  async function handleDetail(id) {
    await navigate('/')
    navigate(`/details/${id}`)
    console.log(id)
  }

  useEffect(() => {
    async function fetchNotes () {
      const response = await api.get(`/notes?title=${search}`);
      setNotes(response.data) 
      
      if(!search){
        setNotes([])
      }

    }
    fetchNotes()
  }, [search]);

  

  return (
    <Container>
      
      <div className="content">
        <h1>RocketMovies</h1>
            <div className='searchBar'>
            <Input placeholder="Pesquisar pelo título" onChange={e => setSearch(e.target.value)}/>
            <Search>
              {
                notes.map(note => (
                  <li 
                  key={note.id}
                  onClick={() => handleDetail(note.id)}
                  >
                    {note.title}
                  </li>
                ))
              }
            </Search>
            </div>
        <div className='profile'>
          <Name to="/profile">{user.name}</Name>
          <Logout to="#" onClick={handleSignOut}>Sair</Logout>
        </div>

        <Link to="/profile">
          <img src={avatarUrl} alt="Foto do usuário" />
        </Link>
      </div>
      

    </Container>
  )
}