import { createGlobalStyle } from 'styled-components'
import ListaVagas from '../containers/ListaVagas'
export const Tema = {
  corPrincipal: '#a7727d',
  corSecundaria: ' #f9f5e7',
  paddingCabecalhoHeader: '24px 0'
}

export const GlobalStyled = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Lato, sans-serif;
  list-style: none;
}

  div > .listVagas{
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 90%;
      display: block;
      margin: auto auto 24px auto;
    }
  }

  & > body {
    padding-bottom: 120px;
  }
`
