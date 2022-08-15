import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-left: 12px;
  
  >input {
    height: 56px;
    width: 100%;

    padding-left: 12px;

    background: transparent;

    border: 0;


    color: ${({ theme }) => theme.COLORS.WHITE};
    
    &::placeholder {
    color: ${({ theme, isProfile }) => isProfile ? theme.COLORS.GRAY_200 : theme.COLORS.WHITE}
    }
  }

  >svg {
    color: ${({ theme }) => theme.COLORS.GRAY_200}
  }
`