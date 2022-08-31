import { Container } from "./styles";

export function Button({icon : Icon, isNew, title, ...rest}) {
  return (
    <Container
    {...rest}
    type="button"
    isNew={isNew}>
      {Icon && <Icon size={16}/>}
      {title}
    </Container>
  )
}