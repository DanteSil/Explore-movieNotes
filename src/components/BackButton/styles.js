import styled from "styled-components";

import { Link } from "react-router-dom"


export const Container = styled(Link)`
  display: flex;
  align-items: center;

  border: none;
  background: none;
  color: ${({theme}) => theme.COLORS.PINK};


  >p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    text-align: center;
    margin-left: 8px;
  }
  
`