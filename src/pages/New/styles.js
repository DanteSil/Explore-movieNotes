import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    grid-template-rows: 116px auto;
    grid-template-areas: 
    'header'
    'content';
    
    >main {
      width: 1137px;
      margin: 40px auto 0 ;
    }
`

export const Form = styled.form`
  margin-top: 24px;
  padding-right: 8px;

  max-height: 685px;
  overflow-y: auto;

  ::-webkit-scrollbar{
      width: 8px;

    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) =>theme.COLORS.PINK};
      border-radius: 8px;
      width: 8px;
      
    }

  h1 {
    font-weight: 500;
    font-size: 36px;
    line-height: 47px;
  }

  .inputs {
   display: flex;
   gap: 40px;

   margin: 40px 0;
  }

  section {
    margin-top: 40px;

    span {
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 26px;
      color: ${({theme}) => theme.COLORS.GRAY_300};
    }
  }

  .tags {
    display: flex;
    gap: 24px;

    padding: 16px;


    background: ${({theme}) => theme.COLORS.BACKGROUND_900};
    margin-top: 24px;
    border-radius: 8px;
    align-items: center;
  }

  .buttons {
    margin-top: 40px;
    display: flex;
    gap: 40px;
  }


`