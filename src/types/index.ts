import { TemaOlisp } from '../data/problemas';

export type StatusProblema = 'nao_visto' | 'revisar' | 'dominado';

export interface ProgressoProblema {
  status: StatusProblema;
  notaPessoal?: string;
  ultimaRevisao?: string;
  vezesRevisado: number;
}

export interface RespostaSimulado {
  problemaId: string;
  respostaAluno: string;
  acertou: boolean;
  tempoGastoSegundos: number;
  marcadaParaRevisao?: boolean;
}

export interface HistoricoSimulado {
  id: string;
  data: string;
  totalQuestoes: number;
  acertos: number;
  tempoTotalSegundos: number;
  tempoMedioPorQuestao: number;
  respostas: RespostaSimulado[];
  desempenhoPorTema: Record<string, { total: number; acertos: number }>;
}

export type ModoApp = 'dashboard' | 'revisao' | 'simulado' | 'estatisticas' | 'ultimos_dias';

export interface FiltrosRevisao {
  bimestre: 'todos' | 1 | 2 | 3;
  tema: 'todos' | TemaOlisp;
  dificuldade: 'todas' | 'facil' | 'media' | 'dificil';
  status: 'todos' | StatusProblema;
  busca: string;
}
