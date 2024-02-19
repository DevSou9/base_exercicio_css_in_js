import styled from 'styled-components'

export const Header = styled.header`
  background-color: ${({ theme }) => theme.corSecundaria};
  color: ${({ theme }) => theme.corPrincipal};
  text-align: center;
  padding: ${({ theme }) => theme.paddingCabecalhoHeader};
`
