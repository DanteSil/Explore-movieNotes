import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
;

  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_LINE};


  padding: 0 124px;

  >h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    margin-right: 64px;

    color: ${({theme}) => theme.COLORS.PINK};
  }

  div {
    margin-left: 64px;

    display: flex;
    flex-direction: column;

    align-items: flex-end;

    line-height: 18px;  

    >strong {
      width: 97px;
    }
  }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-left: 8px;
  }
`
export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({theme}) => theme.COLORS.GRAY_200};
`