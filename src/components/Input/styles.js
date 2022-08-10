import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;

  align-items: center;
  
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  
  >input {
    height: 56px;
    width: 100%;

    padding: 19px 24px;

    background: transparent;

    border: 0;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.WHITE};
    
    &placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200}
    }
  }
`