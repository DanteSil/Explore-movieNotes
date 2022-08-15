import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  height: 222px;

  border: none;

  background-color: hsla(349, 100%, 76%, 0.05);

  border-radius: 16px;
;

  padding: 32px;

  >h1 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    text-align: start;
  }

  .rating {
    display: flex;
    margin-top: 5px;
  }
  
  >p {
    margin-top: 15px;
    

    width: 1057px;

    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    text-align: justify;
    align-items: stretch;

    color: ${({ theme }) => theme.COLORS.GRAY_300};

    display: -webkit-box; 
    text-overflow: ellipsis; 
    overflow: hidden; 
    -webkit-line-clamp: 2; 
    -webkit-box-orient: vertical;
  }

  >footer {
    width: 100%;
    display: flex;
    margin-top: 15px;
  }
`