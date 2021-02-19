import { theme } from '@styles/theme'
import styled from 'styled-components'

export const Button = styled.button`
  background-color: rgba(99, 111, 164, 1);
  color: ${theme.colors.primary100};
  padding: 10px 25px;
  border: none;
  border-radius: 50px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`
