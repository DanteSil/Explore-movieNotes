import { Container } from "./styles";

import { AiFillStar, AiOutlineStar} from "react-icons/ai";


export function Rate({data, isDescription}){
  switch(data.rating){
    case 1:
      return(
        <Container isDescription={isDescription}>
          <li><AiFillStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
          <li><AiOutlineStar/></li>
        </Container>
      )
      break
    case 2:
      return(
      <Container isDescription={isDescription}>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
      </Container>)
      break
    case 3:
      return(
      <Container isDescription={isDescription}>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiFillStar/></li>
      <li><AiOutlineStar/></li>
      <li><AiOutlineStar/></li>
    </Container>)
    break
    case 4:
      return(
      <Container isDescription={isDescription}>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiOutlineStar/></li>
    </Container>)
    break
    case 5:
      return(
      <Container isDescription={isDescription}>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
        <li><AiFillStar/></li>
      </Container>)
    break
    default:
      return(
      <Container isDescription={isDescription}>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
        <li><AiOutlineStar/></li>
      </Container>)
      break        
  }
}