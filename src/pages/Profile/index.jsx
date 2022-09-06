import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import placeHolderAvatar from '../../assets/avatar_placeholder.svg'

import { Container, Form, Avatar } from "./styles";

import {FiCamera, FiArrowLeft, FiUser, FiMail, FiLock} from 'react-icons/fi'

import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { api } from "../../services/api";

export function Profile() {
  const { user, updateProfile } = useAuth()

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : placeHolderAvatar
  const [avatarFile, setAvatarFile] = useState(null)
  const [avatar, setAvatar] = useState(avatarUrl);

  function handleChangeAvatar( event ) {
    const file = event.target.files[0];
    setAvatarFile(file)
    
    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview)
  }

  async function handleUpdateProfile() {
    const updated = {
      name,
      email,
      password: newPassword,
      old_password: oldPassword
    }

    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }
  
  return (
    <Container>
      <header>
        <div className="backButton">
         <ButtonText icon={FiArrowLeft} title="Voltar"/>
        </div>
      </header>

      <Form>
        <Avatar>
          <img src={avatar} alt="foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <Input 
        isProfile
        placeholder={name}
        icon={FiUser}
        type="text"
        onChange={e => setName(e.target.value)}
        />

        <Input 
        isProfile
        placeholder={email}
        icon={FiMail}
        type="text"
        onChange={e => setEmail(e.target.value)}
        />

        <Input 
        placeholder="Senha Atual"
        icon={FiLock}
        type="password"
        onChange={e => setOldPassword(e.target.value)}
        />
        <Input 
        placeholder="Nova Senha"
        icon={FiLock}
        type="password"
        onChange={e => setNewPassword(e.target.value)}
        />

        <Button isNew title="Salvar" onClick={handleUpdateProfile}/>
        

      </Form>
      
    </Container>
  )
}