import { Container, Form } from "./styles";

import {  FiArrowLeft } from 'react-icons/fi' ;

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header/>
      <main>
        <ButtonText icon={FiArrowLeft} title="Voltar"/>

        <Form>
          <h1>Novo Filme</h1>

          <div className="inputs">
            <Input type="text" placeholder="Título"/>
            <Input type="number" placeholder="Sua nota (de 0 a 5)"/>
          </div>
          <TextArea type="textarea" placeholder="Observações"/>

          <section>
            <span>Marcadores</span>
              <div className="tags">
                <NoteItem value="React"/>
                <NoteItem placeholder="Novo Marcador" isNew/>
              </div>
          </section>

          <div className="buttons">
            <Button  title="Excluir filme"/>
            <Button isNew title="Salvar Alterações"/>
          </div>

        </Form>


      </main>
    </Container>
  )
}