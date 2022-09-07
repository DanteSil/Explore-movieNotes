import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { api } from "../../services/api";

import { Container } from "./styles";

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tags } from '../../components/Tags';
import { Rate } from '../../components/Rate';

import { IoTimeOutline } from 'react-icons/io5';
import { FiArrowLeft } from 'react-icons/fi' ;

import { useAuth } from "../../hooks/auth";

export function MovieDetails() {
  const [data, setData] = useState();
  const params = useParams();

  const {user} = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderAvatar;

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }
    fetchNote();
  }, [])
  return (
    <Container>
      <Header />
      <main>
      <ButtonText icon={FiArrowLeft} title="Voltar"/>
      
      {data && 
        <div className="page">
            <div className="title">
              <h1>{data.title}</h1>
              <Rate isDescription={true} data={data}/>
            </div>

            <div className="user-description">
              <img src={avatarUrl} alt="Foto do usuário" />
              <p>Por {user.name}</p>
              <IoTimeOutline/>
              <p>{data.updated_at}</p>
            </div>

            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tags details title={tag.name}/>
                ))
              }
            </div>

            <div className="description">
             {data.description}
            </div>

        </div>
      
      }

      </main>
    </Container>
  )

}