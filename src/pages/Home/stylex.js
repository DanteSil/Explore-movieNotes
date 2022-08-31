import styled from "styled-components";

export const Container = styled.div`
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  .page {
    max-width: 1137px;
    margin: 0 auto;
    margin-top: 50px;
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
    height: 580px;

    padding-right: 8px;

    overflow-y: auto;

    ::-webkit-scrollbar{
      width: 8px;

    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) =>theme.COLORS.PINK};
      border-radius: 8px;
      width: 8px;
      
    }
    
  }

  .pageHeader {
    display: flex;
    justify-content: space-between;

    margin-bottom: 40px;

    h1 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;
    }

    a {
      height: 48px;
      width: 207px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;


      background-color: ${({theme}) => theme.COLORS.PINK};
      color: ${({theme}) => theme.COLORS.BLACK};
      
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;

      svg{
        margin-right: 8px;
      }
    }
  }
`
