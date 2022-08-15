import styled from "styled-components";

export const Container = styled.button`
  background-color: ${({theme, isNew}) => isNew ? theme.COLORS.PINK : theme.COLORS.BACKGROUND_900};
  color: ${({theme, isNew}) => isNew ? theme.COLORS.BLACK : theme.COLORS.PINK};


  width: 100%;
  height: 56px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  
  border: 0;
  

  font-weight: 500;
  font-size: 16px;
  line-height: 21px;

  >svg {
    margin-right: 8px;
  }
`