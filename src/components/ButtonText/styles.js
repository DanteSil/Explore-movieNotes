import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  >a{
    color: ${({theme}) => theme.COLORS.PINK};
    display: flex;
    align-items: center;

    >svg {
      
    }
    
    >p {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      margin-left: 8px;
    }
  }

  
`