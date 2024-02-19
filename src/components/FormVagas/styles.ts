import styled from 'styled-components'

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${({ theme }) => theme.corSecundaria};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;

  input {
    padding: 0 16px;
    outline-color: ${({ theme }) => theme.corPrincipal};
    @media (max-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }

  button {
    background-color: ${({ theme }) => theme.corPrincipal};
    border: 1px solid ${({ theme }) => theme.corPrincipal};
    height: 40px;
    padding: 0 16px;
    font-size: 18px;
    color: ${({ theme }) => theme.corSecundaria};
    margin-left: 8px;
    cursor: pointer;

    @media (max-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-top: 32px;
    }
  }
  & {
    @media (max-width: 768px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
`
