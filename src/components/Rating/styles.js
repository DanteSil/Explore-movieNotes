import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  gap: 6px;

  .star-icon {

  list-style-type: none;
  color: ${({theme}) => theme.COLORS.PINK};

  

  &:hover{
    cursor: pointer;
  }
  }
`