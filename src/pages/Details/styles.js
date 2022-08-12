import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";

  >main {
    max-width: 1137px;
    margin: 0 auto;
    margin-top: 40px;
  }

  .page {
    margin-top: 24px;
    max-height: 581px;
    padding-right: 16px;
    overflow-y: scroll;
 

    ::-webkit-scrollbar{
      width: 8px;

    }

    ::-webkit-scrollbar-thumb {
      background-color: ${({theme}) =>theme.COLORS.PINK};
      border-radius: 8px;
      width: 8px;
      
    }

    .table-content::-webkit-scrollbar-track {
      border-radius: 8px;
      background: transparent;
      background-clip: content-box;
      border-left: 8px solid rgba(255,255,255,0);
      border-right: 8px solid rgba(255,255,255,0);
    }



    .description {
      display: flex;
      align-items: center;
      gap: 19px;

      font-weight: 500;
      font-size: 36px;
      line-height: 47px;
      
    }

    .content {
      margin-top: 40px;

      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      text-align: justify;
      color: ${({theme}) => theme.COLORS.WHITE};
    }

    
  }

  .user-description {
    display: flex;
    align-items: center;

    gap: 8px;
    margin: 25px 0 40px;

    svg {
      color: ${({theme}) => theme.COLORS.PINK};
    }

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;

    >img {
      height: 16px;
      width: 16px;
      border: none;
      border-radius: 50%;
    }
  }
`

export const Rating = styled.ul`
  display: flex;
  gap: 10px;

  .star-icon {

  list-style-type: none;
  color: ${({theme}) => theme.COLORS.PINK};

  font-size: 30px;
  


  &:hover{
    cursor: pointer;
  }
  }
`