import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .on {
    fill: ${({theme}) => theme.COLORS.PINK};
  }

  .off {
    color: ${({theme}) => theme.COLORS.GRAY_300};
  }
`

