import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container } from "./stylex";

import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";

import { Header } from "../../components/Header";
import { Note } from "../../components/Note";
import { api } from "../../services/api";



export function Home() {
  const [notes, setNotes] = useState([]);
  let title = ""

  const navigate = useNavigate();

  function handleDetail(id) {
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchNotes () {
      const response = await api.get(`/notes?title=${title}`);
      setNotes(response.data);
    }
    fetchNotes();
  }, []);
  return (
    <Container>
      <Header/>
      <div className="page">
        <div className="pageHeader">
          <h1>Meus filmes</h1>
          <Link to="/new"><FiPlus size={16}/>Adicionar filme</Link>
        </div>

        <main>
          {
            notes.map(note => (
              <Note 
              key={String(note.id)}
              data={note} 
              onClick={() => handleDetail(note.id)}
              />
            ))
          }
        </main>
      </div>
    </Container>
  )
}