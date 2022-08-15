import { Container } from "./styles";

export function Input({icon: Icon, isProfile, ...rest}) {
  return(
    <Container isProfile={!isProfile} >
      {Icon && <Icon size={20}/>}
      <input {...rest}/>
    </Container>
  )
}