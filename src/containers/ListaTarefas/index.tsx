import { useSelector } from 'react-redux'

import { Container } from './styles'
import Tarefa from '../../components/Tarefa'
import * as enums from '../../utils/enums/Tarefa'
import { RootReducer } from '../../store'

const ListaTarefas = () => {
  const { tarefas } = useSelector((state: RootReducer) => state)

  return (
    <Container>
      <p>2 tarefas marcadas como: categoria e termo</p>
      <ul></ul>
    </Container>
  )
}

export default ListaTarefas
