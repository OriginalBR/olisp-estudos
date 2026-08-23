import { TemaOlisp } from '../data/problemas';

export type StatusProblema = 'nao_visto' | 'revisar' | 'dominado';

export interface Alternativa {
  letra: 'A' | 'B' | 'C' | 'D' | 'E';
  texto: string;
}

export interface Problema {
  id: string;
  bimestre: 1 | 2 | 3;
  livro: string;
  titulo: string;
  enunciado: string;
  dadosExemplo?: string[];
  pergunta: string;
  alternativas: Alternativa[];
  respostaCorreta: 'A' | 'B' | 'C' | 'D' | 'E';
  explicacao: string;
  dificuldade: 'facil' | 'media' | 'dificil';
  tema: string;
  contemImagem?: boolean;
}

export interface ResumoTeorico {
  id: string;
  bimestre: 1 | 2 | 3;
  tema: string;
  titulo: string;
  pontosChave: string[];
  comoReconhecer: string;
  dicaDeResolucao: string;
  exemploResolvido?: string;
}

export interface ProgressoProblema {
  status: StatusProblema;
  notaPessoal?: string;
  ultimaRevisao?: string;
  vezesRevisado: number;
  ultimaAlternativaEscolhida?: 'A' | 'B' | 'C' | 'D' | 'E';
}

export interface RespostaSimulado {
  problemaId: string;
  respostaAluno: string; // Letra escolhida 'A' | 'B' | 'C' | 'D' | 'E'
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

export type ModoApp = 'dashboard' | 'revisao' | 'simulado' | 'estudo_rapido' | 'estatisticas' | 'ultimos_dias';

export interface FiltrosRevisao {
  bimestre: 'todos' | 1 | 2 | 3;
  tema: 'todos' | TemaOlisp;
  dificuldade: 'todas' | 'facil' | 'media' | 'dificil';
  status: 'todos' | StatusProblema;
  busca: string;
}

