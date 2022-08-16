import styled from "styled-components";

import { Link } from "react-router-dom"

export const Logout = styled(Link)`
  color: ${({theme}) => theme.COLORS.GRAY_200};

  border: none;
  background: none;

`

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


  }
  }
`
export const Name = styled(Link)`
      width: 107px;
      height: 24px;
      text-align: end;

      color: ${({theme}) => theme.COLORS.WHITE};
`
