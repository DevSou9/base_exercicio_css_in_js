import styled from 'styled-components'

export const HeroStyled = styled.form`
  height: 360px;
  width: 100%;
  background-image: url('https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_1280.jpg');
  background-size: cover;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.corPrincipal};
    content: '';
    opacity: 0.7;
  }

  & > div {
    position: relative;
    color: #eee;

    @media (max-width: 768px) {
      display: flex;
      justify-content: center;
    }

    & > h2 {
      font-family: Gloock, serif;
      font-size: 48px;
      max-width: 90%;
      margin: auto;

      @media (max-width: 768px) {
        text-align: center;
        font-size: 40px;
        max-width: 100%;
        margin: auto;
      }
    }
  }

  @media (max-width: 768px) {
    & {
      height: auto;
      padding: 24px 0;
    }
  }
`
