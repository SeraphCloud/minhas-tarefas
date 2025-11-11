import { useDispatch, useSelector } from 'react-redux'
import FiltroCard from '../../components/FiltroCard'
import { RootReducer } from '../../store'

import * as S from './styles'
import { Botao, Campo } from '../../styles'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Tarefa'
import { useNavigate } from 'react-router-dom'

type Props = {
  mostrarFiltros: boolean
}

const Barralateral = ({ mostrarFiltros }: Props) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { termo, criterio, valor } = useSelector(
    (state: RootReducer) => state.filtro
  )
  const { itens } = useSelector((state: RootReducer) => state.tarefas)

  const contadorPendentes = itens.filter(
    (item) => item.status === enums.Status.PENDENTE
  ).length
  const contadorConcluidas = itens.filter(
    (item) => item.status === enums.Status.CONCLUIDA
  ).length
  const contadorUrgentes = itens.filter(
    (item) => item.prioridade === enums.Prioridade.URGENTE
  ).length
  const contadorImportantes = itens.filter(
    (item) => item.prioridade === enums.Prioridade.IMPORTANTE
  ).length
  const contadorNormal = itens.filter(
    (item) => item.prioridade === enums.Prioridade.NORMAL
  ).length
  const contadorTodas = itens.length

  return (
    <S.Aside>
      <div>
        {mostrarFiltros ? (
          <>
            <Campo
              type="text"
              placeholder="Buscar"
              value={termo}
              onChange={(e) => dispatch(alterarTermo(e.target.value))}
            />
            <S.Filtros>
              <FiltroCard
                valor={enums.Status.PENDENTE}
                criterio="status"
                legenda="pendentes"
                contador={contadorPendentes}
                ativo={criterio === 'status' && valor === enums.Status.PENDENTE}
              />
              <FiltroCard
                valor={enums.Status.CONCLUIDA}
                criterio="status"
                legenda="concluídas"
                contador={contadorConcluidas}
                ativo={
                  criterio === 'status' && valor === enums.Status.CONCLUIDA
                }
              />
              <FiltroCard
                valor={enums.Prioridade.URGENTE}
                criterio="prioridade"
                legenda="urgentes"
                contador={contadorUrgentes}
                ativo={
                  criterio === 'prioridade' &&
                  valor === enums.Prioridade.URGENTE
                }
              />
              <FiltroCard
                valor={enums.Prioridade.IMPORTANTE}
                criterio="prioridade"
                legenda="importantes"
                contador={contadorImportantes}
                ativo={
                  criterio === 'prioridade' &&
                  valor === enums.Prioridade.IMPORTANTE
                }
              />
              <FiltroCard
                valor={enums.Prioridade.NORMAL}
                criterio="prioridade"
                legenda="normal"
                contador={contadorNormal}
                ativo={
                  criterio === 'prioridade' && valor === enums.Prioridade.NORMAL
                }
              />
              <FiltroCard
                criterio="todas"
                legenda="todas"
                contador={contadorTodas}
                ativo={criterio === 'todas'}
              />
            </S.Filtros>
          </>
        ) : (
          <Botao onClick={() => navigate('/')}>Voltar</Botao>
        )}
      </div>
    </S.Aside>
  )
}

export default Barralateral
