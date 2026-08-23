import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { PROBLEMAS_OLISP } from '../data/problemas';
import {
  Problema,
  ModoApp,
  ProgressoProblema,
  StatusProblema,
  HistoricoSimulado,
  RespostaSimulado
} from '../types';


interface EstadoSimuladoAtivo {
  questoes: Problema[];
  indiceAtual: number;
  respostas: Record<string, string>; // problemaId -> letra escolhida ('A'|'B'|'C'|'D'|'E')
  marcadas: Record<string, boolean>; // problemaId -> marcada para revisão
  tempoRestanteSegundos: number;
  tempoTotalSegundos: number;
  emAndamento: boolean;
  temposPorQuestao: Record<string, number>;
  isProvaOficial20: boolean;
}

interface AppStore {
  // Navegação
  modoAtual: ModoApp;
  setModoAtual: (modo: ModoApp) => void;
  problemaAtivoId: string | null;
  setProblemaAtivoId: (id: string | null) => void;
  temaFiltroRevisao: string | null;
  setTemaFiltroRevisao: (tema: string | null) => void;

  // Progresso do Aluno
  progresso: Record<string, ProgressoProblema>;
  atualizarStatusProblema: (id: string, status: StatusProblema, alternativaEscolhida?: 'A' | 'B' | 'C' | 'D' | 'E') => void;
  salvarNotaProblema: (id: string, nota: string) => void;
  ultimoProblemaEstudadoId: string | null;

  // Resumos Teóricos Revisados
  resumosRevisados: Record<string, boolean>;
  toggleResumoRevisado: (id: string) => void;

  // Data da Prova
  dataProva: string;
  setDataProva: (data: string) => void;

  // Histórico de Simulados
  historicoSimulados: HistoricoSimulado[];
  ultimoSimuladoFinalizado: HistoricoSimulado | null;
  setUltimoSimuladoFinalizado: (sim: HistoricoSimulado | null) => void;

  // Simulado em Andamento
  simuladoAtivo: EstadoSimuladoAtivo | null;
  iniciarSimulado: (qtdQuestoes: number, tempoMinutos: number, isOficial?: boolean) => void;
  iniciarSimuladoOficial: () => void;
  salvarRespostaSimulado: (problemaId: string, letra: string) => void;
  toggleMarcadaSimulado: (problemaId: string) => void;
  irParaQuestaoSimulado: (indice: number) => void;
  proximaQuestaoSimulado: () => void;
  anteriorQuestaoSimulado: () => void;
  tickTempoSimulado: () => void;
  finalizarSimulado: () => HistoricoSimulado | null;
  cancelarSimulado: () => void;

  // Estatísticas e Diagnósticos
  obterTemasComMaisErros: () => string[];

  // Limpeza
  resetarProgresso: () => void;
}

// Data da prova padrão: 2 dias a partir de hoje (contexto de reta final)
const calcularDataPadrao = () => {
  const data = new Date();
  data.setDate(data.getDate() + 2);
  return data.toISOString().split('T')[0];
};

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      modoAtual: 'dashboard',
      setModoAtual: (modo) => set({ modoAtual: modo }),
      problemaAtivoId: null,
      setProblemaAtivoId: (id) => set({ problemaAtivoId: id }),
      temaFiltroRevisao: null,
      setTemaFiltroRevisao: (tema) => set({ temaFiltroRevisao: tema }),

      progresso: {},
      ultimoProblemaEstudadoId: null,

      resumosRevisados: {},
      toggleResumoRevisado: (id) => {
        const atual = get().resumosRevisados[id];
        set({
          resumosRevisados: {
            ...get().resumosRevisados,
            [id]: !atual
          }
        });
      },

      atualizarStatusProblema: (id, status, alternativaEscolhida) => {
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
              vezesRevisado: (atual.vezesRevisado || 0) + 1,
              ...(alternativaEscolhida ? { ultimaAlternativaEscolhida: alternativaEscolhida } : {})
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

      iniciarSimulado: (qtdQuestoes, tempoMinutos, isOficial = false) => {
        const b1 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 1);
        const b2 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 2);
        const b3 = PROBLEMAS_OLISP.filter((p) => p.bimestre === 3);

        const embaralhar = <T>(arr: T[]): T[] => [...arr].sort(() => Math.random() - 0.5);

        let selecionadas: Problema[] = [];

        if (qtdQuestoes >= 20) {
          // Prova completa de 20 questões cobrindo todos os temas e bimestres equilibrados
          // Pega aprox 7 de B1, 6 de B2, 7 de B3
          const selB1 = embaralhar(b1).slice(0, 7);
          const selB2 = embaralhar(b2).slice(0, 6);
          const selB3 = embaralhar(b3).slice(0, 7);
          selecionadas = embaralhar([...selB1, ...selB2, ...selB3]);
        } else {
          const porBim = Math.floor(qtdQuestoes / 3);
          const sobra = qtdQuestoes % 3;
          selecionadas = embaralhar([
            ...embaralhar(b1).slice(0, porBim),
            ...embaralhar(b2).slice(0, porBim),
            ...embaralhar(b3).slice(0, porBim + sobra)
          ]);
        }

        // Caso falte, completa com qualquer questão restante
        if (selecionadas.length < qtdQuestoes) {
          const restantes = embaralhar(
            PROBLEMAS_OLISP.filter((p) => !selecionadas.some((s) => s.id === p.id))
          );
          selecionadas = [...selecionadas, ...restantes.slice(0, qtdQuestoes - selecionadas.length)];
        }

        selecionadas = selecionadas.slice(0, qtdQuestoes);
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
            temposPorQuestao: {},
            isProvaOficial20: isOficial || qtdQuestoes === 20
          },
          modoAtual: 'simulado'
        });
      },

      iniciarSimuladoOficial: () => {
        // Prova oficial exata de 20 questões em 60 minutos
        get().iniciarSimulado(20, 60, true);
      },

      salvarRespostaSimulado: (problemaId, letra) => {
        const ativo = get().simuladoAtivo;
        if (!ativo) return;
        set({
          simuladoAtivo: {
            ...ativo,
            respostas: {
              ...ativo.respostas,
              [problemaId]: letra
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
          const respLetra = (ativo.respostas[q.id] || '').toUpperCase();
          const acertou = respLetra === q.respostaCorreta;
          return {
            problemaId: q.id,
            respostaAluno: respLetra,
            acertou,
            tempoGastoSegundos: ativo.temposPorQuestao[q.id] || Math.round(tempoMedio),
            marcadaParaRevisao: !!ativo.marcadas[q.id]
          };
        });

        // Atualizar desempenho por tema
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

        // Atualiza progresso geral dos problemas respondidos no simulado
        const progressoAtual = { ...get().progresso };
        ativo.questoes.forEach((q, idx) => {
          const resp = respostasFormatadas[idx];
          const anterior = progressoAtual[q.id] || { status: 'nao_visto', vezesRevisado: 0 };
          progressoAtual[q.id] = {
            ...anterior,
            status: resp.acertou ? (anterior.status === 'nao_visto' ? 'dominado' : anterior.status) : 'revisar',
            ultimaRevisao: new Date().toISOString(),
            vezesRevisado: (anterior.vezesRevisado || 0) + 1,
            ultimaAlternativaEscolhida: resp.respostaAluno as any
          };
        });

        set({
          historicoSimulados: [novoSimulado, ...get().historicoSimulados],
          ultimoSimuladoFinalizado: novoSimulado,
          simuladoAtivo: null,
          progresso: progressoAtual,
          modoAtual: 'simulado'
        });

        return novoSimulado;
      },

      cancelarSimulado: () => {
        set({ simuladoAtivo: null, modoAtual: 'dashboard' });
      },

      obterTemasComMaisErros: () => {
        const historico = get().historicoSimulados;
        const totalPorTema: Record<string, { total: number; erros: number }> = {};

        historico.forEach((sim) => {
          Object.entries(sim.desempenhoPorTema).forEach(([tema, dados]) => {
            if (!totalPorTema[tema]) {
              totalPorTema[tema] = { total: 0, erros: 0 };
            }
            totalPorTema[tema].total += dados.total;
            totalPorTema[tema].erros += (dados.total - dados.acertos);
          });
        });

        // Ordena temas pelo maior número de erros / pior taxa
        return Object.entries(totalPorTema)
          .sort((a, b) => {
            const taxaErroA = a[1].total > 0 ? a[1].erros / a[1].total : 0;
            const taxaErroB = b[1].total > 0 ? b[1].erros / b[1].total : 0;
            return taxaErroB - taxaErroA || b[1].erros - a[1].erros;
          })
          .map(([tema]) => tema);
      },

      resetarProgresso: () => {
        set({
          progresso: {},
          historicoSimulados: [],
          ultimoSimuladoFinalizado: null,
          simuladoAtivo: null,
          ultimoProblemaEstudadoId: null,
          resumosRevisados: {}
        });
      }
    }),
    {
      name: 'olisp_estudos_store_v2',
      partialize: (state) => ({
        progresso: state.progresso,
        ultimoProblemaEstudadoId: state.ultimoProblemaEstudadoId,
        dataProva: state.dataProva,
        historicoSimulados: state.historicoSimulados,
        resumosRevisados: state.resumosRevisados
      })
    }
  )
);
