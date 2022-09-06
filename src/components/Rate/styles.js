import styled from 'styled-components'

export const Container = styled.ul`

  display: flex;
  gap: 10px;


  li {
    list-style: none;
    color: ${({ theme }) => theme.COLORS.PINK};

    >svg {
      font-size: ${({isDescription}) => isDescription ? `20px` : `12px`};
    }
  }
`