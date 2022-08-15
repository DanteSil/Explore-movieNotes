import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 116px;

  display: flex;
  align-items: center;
;

  grid-area: header;
  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_LINE};


  .content {
    width: 1137px;
    margin: 0 auto;
    display: flex;

    display: flex;
    align-items: center;

    >h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    margin-right: 64px;

    color: ${({theme}) => theme.COLORS.PINK};
  }

  img {
    height: 64px;
    width: 64px;
    border-radius: 50%;
    margin-left: 8px;
  }

  .profile {
    margin-left: 64px;

    display: flex;
    flex-direction: column;

    align-items: flex-end;

    line-height: 18px;  

    >strong {
      display: flex;
      width: 97px;
    }
  }
  }
  





`
export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({theme}) => theme.COLORS.GRAY_200};
`