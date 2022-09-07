import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";

import {  FiArrowLeft } from 'react-icons/fi' ;

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function NewMovies() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rate, setRate] = useState("");
  
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();
  
  function handleAddTags() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }
  
  function handleRemoveTag(tagDeleted) {
    setTags(prevState => prevState.filter(tag => tag !== tagDeleted));
  }


  async function handleNewMovie() {
    if(!title){
      return alert("Digite o Título do filme")
    }
    
    if(!rate) {
      return alert("Digite uma nota para o filme")
    }

    if(newTag) {
      return alert("Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Click para adicionar ou limpe o campo para continuar!")
    }
    
    if (rate > 5 || rate < 0) {
      return alert("Somente números de 0 a 5")
    } 

    const isInteger = Number.isInteger(Number(rate))
      
    if (!isInteger ) {
       return alert("Digite apenas números inteiros");
    } 
    
    try {
      await api.post("/notes", {
        title,
        rating: rate,
        description,
        tags
      })
    } catch (error) {
      if(error.response) {
        alert(error.response.data.message)
      }
    }

    alert("Filme Salvado com sucesso!")
    navigate(-1)
  }

  function handleClearMovie () {
    navigate(-1)
  }
  
  return (
    <Container>
      <Header/>
      <main>
        <ButtonText icon={FiArrowLeft} title="Voltar"/>

        <Form>
          <h1>Novo Filme</h1>

          <div className="inputs">
            <Input 
            type="text" 
            placeholder="Título"
            onChange={e => setTitle(e.target.value)}           
            />

            <Input 
            type="number" 
            placeholder="Sua nota (de 0 a 5)"
            onChange={e => setRate(e.target.value)}
            />
          </div>

          <TextArea
           type="textarea" 
           placeholder="Observações"
           onChange={e => setDescription(e.target.value)}
           />

          <section>
            <span>Marcadores</span>
              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                
                <NoteItem 
                isNew
                placeholder="Novo Marcador" 
                onChange={e => setNewTag(e.target.value)}
                value={newTag}
                onClick={handleAddTags}
                />

              </div>
          </section>

          <div className="buttons">
            <Button  title="Excluir filme" onClick={handleClearMovie}/>

            <Button 
            isNew 
            title="Salvar Alterações"
            onClick={handleNewMovie}
            />
          </div>

        </Form>


      </main>
    </Container>
  )
}