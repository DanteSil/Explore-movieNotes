import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
height: 56px;


border-radius: 10px;



background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_200 : `#FFF`};
border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

  >button {
    height: 56px;
    margin-right: 16px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >input {
    
    max-width: 133px;
    height: 56px;

    margin: 0 12px 0 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`