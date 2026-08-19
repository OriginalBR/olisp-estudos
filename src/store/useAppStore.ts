import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Problema, PROBLEMAS_OLISP } from '../data/problemas';
import {
  ModoApp,
  ProgressoProblema,
  StatusProblema,
  HistoricoSimulado,
  RespostaSimulado
} from '../types';

interface EstadoSimuladoAtivo {
  questoes: Problema[];
  indiceAtual: number;
  respostas: Record<string, string>; // problemaId -> resposta do aluno
  marcadas: Record<string, boolean>; // problemaId -> marcada para revisão
  tempoRestanteSegundos: number;
  tempoTotalSegundos: number;
  emAndamento: boolean;
  temposPorQuestao: Record<string, number>;
}

interface AppStore {
  // Navegação
  modoAtual: ModoApp;
  setModoAtual: (modo: ModoApp) => void;
  problemaAtivoId: string | null;
  setProblemaAtivoId: (id: string | null) => void;

  // Progresso do Aluno
  progresso: Record<string, ProgressoProblema>;
  atualizarStatusProblema: (id: string, status: StatusProblema) => void;
  salvarNotaProblema: (id: string, nota: string) => void;
  ultimoProblemaEstudadoId: string | null;

  // Data da Prova
  dataProva: string;
  setDataProva: (data: string) => void;

  // Histórico de Simulados
  historicoSimulados: HistoricoSimulado[];
  ultimoSimuladoFinalizado: HistoricoSimulado | null;
  setUltimoSimuladoFinalizado: (sim: HistoricoSimulado | null) => void;

  // Simulado em Andamento
  simuladoAtivo: EstadoSimuladoAtivo | null;
  iniciarSimulado: (qtdQuestoes: number, tempoMinutos: number) => void;
  salvarRespostaSimulado: (problemaId: string, resposta: string) => void;
  toggleMarcadaSimulado: (problemaId: string) => void;
  irParaQuestaoSimulado: (indice: number) => void;
  proximaQuestaoSimulado: () => void;
  anteriorQuestaoSimulado: () => void;
  tickTempoSimulado: () => void;
  finalizarSimulado: () => HistoricoSimulado | null;
  cancelarSimulado: () => void;

  // Limpeza
  resetarProgresso: () => void;
}

// Data da prova padrão: 7 dias a partir de hoje
const calcularDataPadrao = () => {
  const data = new Date();
  data.setDate(data.getDate() + 7);
  return data.toISOString().split('T')[0];
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      modoAtual: 'dashboard',
      setModoAtual: (modo) => set({ modoAtual: modo }),
      problemaAtivoId: null,
      setProblemaAtivoId: (id) => set({ problemaAtivoId: id }),

      progresso: {},
      ultimoProblemaEstudadoId: null,

      atualizarStatusProblema: (id, status) => {
        const atual = get().progresso[id] || {
          status: 'nao_visto',
          vezesRevisado: 0
        };
        set({
          ultimoProblemaEstudadoId: id,
          progresso: {
            ...get().progresso,
            [id]: {
              ...atual,
              status,
              ultimaRevisao: new Date().toISOString(),
              vezesRevisado: (atual.vezesRevisado || 0) + 1
            }
          }
        });
      },

      salvarNotaProblema: (id, nota) => {
        const atual = get().progresso[id] || {
          status: 'nao_visto',
          vezesRevisado: 0
        };
        set({
          progresso: {
            ...get().progresso,
            [id]: {
              ...atual,
              notaPessoal: nota
            }
          }
        });
      },

      dataProva: calcularDataPadrao(),
      setDataProva: (data) => set({ dataProva: data }),

      historicoSimulados: [],
      ultimoSimuladoFinalizado: null,
      setUltimoSimuladoFinalizado: (sim) => set({ ultimoSimuladoFinalizado: sim }),

      simuladoAtivo: null,

      iniciarSimulado: (qtdQuestoes, tempoMinutos) => {
        // Sorteio equilibrado pelos bimestres
        const b1 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 1);
        const b2 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 2);
        const b3 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 3);

        const embaralhar = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

        const embaralhadoB1 = embaralhar(b1);
        const embaralhadoB2 = embaralhar(b2);
        const embaralhadoB3 = embaralhar(b3);

        const questoesPorBim = Math.floor(qtdQuestoes / 3);
        const sobra = qtdQuestoes % 3;

        let selecionadas: Problema[] = [
          ...embaralhadoB1.slice(0, questoesPorBim),
          ...embaralhadoB2.slice(0, questoesPorBim),
          ...embaralhadoB3.slice(0, questoesPorBim + sobra)
        ];

        // Se faltar por algum motivo, completa com qualquer uma restante
        if (selecionadas.length < qtdQuestoes) {
          const restantes = embaralhar(
            PROBLEMAS_OLISP.filter((p) => !selecionadas.some((s) => s.id === p.id))
          );
          selecionadas = [...selecionadas, ...restantes.slice(0, qtdQuestoes - selecionadas.length)];
        }

        // Embaralha as questões sorteadas
        selecionadas = embaralhar(selecionadas).slice(0, qtdQuestoes);

        const tempoTotalSegundos = tempoMinutos * 60;

        set({
          simuladoAtivo: {
            questoes: selecionadas,
            indiceAtual: 0,
            respostas: {},
            marcadas: {},
            tempoRestanteSegundos: tempoTotalSegundos,
            tempoTotalSegundos: tempoTotalSegundos,
            emAndamento: true,
            temposPorQuestao: {}
          },
          modoAtual: 'simulado'
        });
      },

      salvarRespostaSimulado: (problemaId, resposta) => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return;
        set({
          simuladoAtivo: {
            ...ativo,
            respostas: {
              ...ativo.respostas,
              [problemaId]: resposta
            }
          }
        });
      },

      toggleMarcadaSimulado: (problemaId) => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return;
        set({
          simuladoAtivo: {
            ...ativo,
            marcadas: {
              ...ativo.marcadas,
              [problemaId]: !ativo.marcadas[problemaId]
            }
          }
        });
      },

      irParaQuestaoSimulado: (indice) => {
        const ativo = get().simuladoAtivo;
        if (!ativo || indice < 0 || indice >= ativo.questoes.length) return;
        set({
          simuladoAtivo: {
            ...ativo,
            indiceAtual: indice
          }
        });
      },

      proximaQuestaoSimulado: () => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return;
        if (ativo.indiceAtual < ativo.questoes.length - 1) {
          set({
            simuladoAtivo: {
              ...ativo,
              indiceAtual: ativo.indiceAtual + 1
            }
          });
        }
      },

      anteriorQuestaoSimulado: () => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return;
        if (ativo.indiceAtual > 0) {
          set({
            simuladoAtivo: {
              ...ativo,
              indiceAtual: ativo.indiceAtual - 1
            }
          });
        }
      },

      tickTempoSimulado: () => {
        const ativo = get().simuladoAtivo;
        if (!ativo || !ativo.emAndamento) return;
        if (ativo.tempoRestanteSegundos <= 1) {
          // Finaliza automaticamente ao acabar o tempo
          get().finalizarSimulado();
        } else {
          const questaoAtualId = ativo.questoes[ativo.indiceAtual]?.id;
          const tempoGastoQuestao = (ativo.temposPorQuestao[questaoAtualId] || 0) + 1;
          set({
            simuladoAtivo: {
              ...ativo,
              tempoRestanteSegundos: ativo.tempoRestanteSegundos - 1,
              temposPorQuestao: {
                ...ativo.temposPorQuestao,
                [questaoAtualId]: tempoGastoQuestao
              }
            }
          });
        }
      },

      finalizarSimulado: () => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return null;

        const totalQuestoes = ativo.questoes.length;
        const tempoGastoTotal = ativo.tempoTotalSegundos - ativo.tempoRestanteSegundos;
        const tempoMedio = Math.round(tempoGastoTotal / Math.max(1, totalQuestoes));

        const respostasFormatadas: RespostaSimulado[] = ativo.questoes.map((q) => {
          const respAluno = (ativo.respostas[q.id] || '').trim();
          // Avaliação simples de resposta preenchida
          const acertou = respAluno.length > 5;
          return {
            problemaId: q.id,
            respostaAluno: respAluno,
            acertou,
            tempoGastoSegundos: ativo.temposPorQuestao[q.id] || Math.round(tempoMedio),
            marcadaParaRevisao: !!ativo.marcadas[q.id]
          };
        });

        // Desempenho por tema
        const desempenhoPorTema: Record<string, { total: number; acertos: number }> = {};
        ativo.questoes.forEach((q, idx) => {
          const resp = respostasFormatadas[idx];
          if (!desempenhoPorTema[q.tema]) {
            desempenhoPorTema[q.tema] = { total: 0, acertos: 0 };
          }
          desempenhoPorTema[q.tema].total += 1;
          if (resp.acertou) {
            desempenhoPorTema[q.tema].acertos += 1;
          }
        });

        const acertos = respostasFormatadas.filter((r) => r.acertou).length;

        const novoSimulado: HistoricoSimulado = {
          id: `sim-${Date.now()}`,
          data: new Date().toISOString(),
          totalQuestoes,
          acertos,
          tempoTotalSegundos: tempoGastoTotal,
          tempoMedioPorQuestao: tempoMedio,
          respostas: respostasFormatadas,
          desempenhoPorTema
        };

        set({
          historicoSimulados: [novoSimulado, ...get().historicoSimulados],
          ultimoSimuladoFinalizado: novoSimulado,
          simuladoAtivo: null,
          modoAtual: 'simulado'
        });

        return novoSimulado;
      },

      cancelarSimulado: () => {
        set({ simuladoAtivo: null, modoAtual: 'dashboard' });
      },

      resetarProgresso: () => {
        set({
          progresso: {},
          historicoSimulados: [],
          ultimoSimuladoFinalizado: null,
          simuladoAtivo: null,
          ultimoProblemaEstudadoId: null
        });
      }
    }),
    {
      name: 'olisp_estudos_store_v1',
      partialize: (state) => ({
        progresso: state.progresso,
        ultimoProblemaEstudadoId: state.ultimoProblemaEstudadoId,
        dataProva: state.dataProva,
        historicoSimulados: state.historicoSimulados
      })
    }
  )
);
