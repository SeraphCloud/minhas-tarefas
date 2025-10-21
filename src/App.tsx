import Barralateral from './containers/BarraLateral'
import ListaTarefas from './containers/ListaTarefas'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Barralateral />
        <ListaTarefas />
      </Container>
    </>
  )
}

export default App
