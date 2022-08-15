import styled from "styled-components";

export const Container = styled.div`

display: flex;
align-items: center;
width: ${({isNew}) => isNew ? '180px' : '100px'};
height: 56px;

border-radius: 10px;
padding-right: 16px;


background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_700};
color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_200 : `#FFF`};
border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_200}` : "none"};

  >button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.PINK};
  }

  >input {
    height: 56px;
    width: 100%;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
`