import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../utils/enums/Tarefa'

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: [
    new Tarefa(
      'Estudar JS',
      enums.Prioridade.IMPORTANTE,
      enums.Status.CONCLUIDA,
      'Assistir a aula 5',
      1
    ),
    new Tarefa(
      'Ir para a academia',
      enums.Prioridade.IMPORTANTE,
      enums.Status.PENDENTE,
      'Fazer treino de peito',
      2
    ),
    new Tarefa(
      'Fazer APOL',
      enums.Prioridade.URGENTE,
      enums.Status.PENDENTE,
      'Assistir a aula 5',
      3
    )
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state = state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions
export default tarefasSlice.reducer
