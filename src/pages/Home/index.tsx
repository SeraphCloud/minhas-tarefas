import BotaoAdicionar from '../../components/BotaoAdicionar'
import Barralateral from '../../containers/BarraLateral'
import ListaTarefas from '../../containers/ListaTarefas'

const Home = () => {
  return (
    <>
      <Barralateral />
      <ListaTarefas />
      <BotaoAdicionar />
    </>
  )
}

export default Home
