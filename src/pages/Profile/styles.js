import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  >header {
    width: 100%;
    height: 144px;
    display: flex;

    padding: 0 144PX;

    background-color: ${({ theme }) => theme.COLORS.NOTE_COLOR};
    display: flex;
    align-items: center;
  }
  `

export const Form = styled.form`
    max-width: 340px;
    margin: 0 auto;

    >div:nth-child(4){
      margin-top: 24px;
    }
    >div:nth-child(5){
      margin-bottom: 24px;
    }
`

export const Avatar = styled.div`
  position: relative;
  height: 186px;
  width: 186px;
  margin: -95px auto 64px;

  >img {
    height: 186px;
    width: 186px;
    border-radius: 50%;
  }

  >label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
    bottom: 7px;
    right: 7px;
    cursor: pointer;
    
    input {
      display: none;
    }



  }
  
`


