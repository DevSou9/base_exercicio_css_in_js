import Header from './components/Cabecalho'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import { ThemeProvider } from 'styled-components'
import { Tema, GlobalStyled } from './theme/theme'

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <GlobalStyled />
      <Header />
      <Hero />
      <div className="listVagas">
        <ListaVagas />
      </div>
    </ThemeProvider>
  )
}

export default App
