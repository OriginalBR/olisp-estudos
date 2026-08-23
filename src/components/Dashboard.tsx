import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP } from '../data/problemas';
import { RESUMOS_TEORICOS } from '../data/resumos';
import {
  BookOpen,
  ArrowRight,
  Trophy,
  CheckCircle2,
  Zap,
  Target,
  Flame
} from 'lucide-react';

interface DashboardProps {
  onOpenConfig: () => void;
  onOpenShare: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenConfig }) => {
  const {
    setModoAtual,
    progresso,
    resumosRevisados,
    dataProva,
    iniciarSimuladoOficial,
    historicoSimulados
  } = useAppStore();


  const totalProblemas = PROBLEMAS_OLISP.length;
  const dominados = Object.values(progresso).filter((p) => p.status === 'dominado').length;
  const revisar = Object.values(progresso).filter((p) => p.status === 'revisar').length;
  const totalResumos = RESUMOS_TEORICOS.length;
  const resumosLidos = RESUMOS_TEORICOS.filter((r) => resumosRevisados[r.id]).length;

  // Dias até a prova
  const calcularDiasRestantes = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const prova = new Date(dataProva + 'T00:00:00');
    const diff = prova.getTime() - hoje.getTime();
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return Math.max(0, dias);
  };
  const diasRestantes = calcularDiasRestantes();

  const ultimoSimulado = historicoSimulados[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-16">
      {/* =========================================================================
          BANNER DE DESTAQUE: MODO RETA FINAL (FALTAM X DIAS)
          ========================================================================= */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 border-2 border-indigo-500/40 p-6 sm:p-8 shadow-2xl shadow-indigo-950/50">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 -mb-10 w-56 h-56 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          {/* Topo do Banner: Contagem Regressiva */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Flame className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Modo Reta Final • OLISP 20 Questões</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                {diasRestantes === 0 ? (
                  <span className="text-rose-400">É HOJE O DIA DA PROVA DA OLISP!</span>
                ) : diasRestantes === 1 ? (
                  <span>Falta apenas <span className="text-amber-400 underline decoration-amber-500/50">1 DIA</span> para a prova!</span>
                ) : (
                  <span>Faltam <span className="text-amber-400 underline decoration-amber-500/50">{diasRestantes} DIAS</span> para a prova!</span>
                )}
              </h1>
              <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
                A prova possui <strong className="text-white">20 questões de múltipla escolha</strong>. Se você ainda não estudou tudo, utilize os atalhos abaixo para absorver os conceitos rapidamente.
              </p>
            </div>

            {/* Contador Visual em Card */}
            <div className="bg-slate-950/80 border border-indigo-500/30 rounded-2xl p-4 text-center shrink-0 min-w-[150px] shadow-xl">
              <span className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider block">
                Tempo Restante
              </span>
              <div className="text-3xl font-black text-amber-400 mt-0.5">
                {diasRestantes} {diasRestantes === 1 ? 'Dia' : 'Dias'}
              </div>
              <button
                onClick={onOpenConfig}
                className="text-[10px] text-slate-400 hover:text-slate-200 underline mt-1 block mx-auto"
              >
                Ajustar data
              </button>
            </div>
          </div>

          {/* 3 BOTÕES GRANDES DE AÇÃO DIRETA */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {/* 1. LER RESUMOS */}
            <button
              onClick={() => setModoAtual('estudo_rapido')}
              className="group bg-gradient-to-br from-indigo-900/90 to-indigo-950/90 hover:from-indigo-800 hover:to-indigo-900 border border-indigo-400/40 hover:border-indigo-400 p-5 rounded-2xl text-left shadow-lg hover:shadow-indigo-500/20 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-400/40 flex items-center justify-center text-indigo-300 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-500/30 text-indigo-200">
                  {resumosLidos}/{totalResumos} lidos
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors flex items-center gap-1.5">
                  1. Ler Resumos Teóricos
                </h3>
                <p className="text-xs text-indigo-200/80 mt-1 leading-relaxed">
                  Cartões de 1 minuto por tema com atalhos mentais e pontos para copiar pro caderno.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-indigo-300 pt-2 border-t border-indigo-500/20">
                <span>Abrir Resumos</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* 2. TREINAR POR TEMA */}
            <button
              onClick={() => setModoAtual('revisao')}
              className="group bg-gradient-to-br from-slate-900/90 to-slate-950/90 hover:from-slate-800 hover:to-slate-900 border border-slate-700 hover:border-indigo-500/50 p-5 rounded-2xl text-left shadow-lg transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <Target className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                  {dominados}/{totalProblemas} dominadas
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors flex items-center gap-1.5">
                  2. Treinar por Tema
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  Questões de múltipla escolha com feedback instantâneo e resolução comentada.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-emerald-400 pt-2 border-t border-slate-800">
                <span>Praticar Questões</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            {/* 3. SIMULADO COMPLETO (20 QUESTÕES) */}
            <button
              onClick={iniciarSimuladoOficial}
              className="group bg-gradient-to-br from-purple-900/90 to-slate-950/90 hover:from-purple-800 hover:to-purple-950 border border-purple-400/40 hover:border-purple-400 p-5 rounded-2xl text-left shadow-lg hover:shadow-purple-500/20 transition-all duration-200 flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-300 group-hover:scale-110 transition-transform">
                  <Trophy className="w-5 h-5 text-amber-400" />
                </div>
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-purple-500/30 text-purple-200">
                  60 min • 20Q
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors flex items-center gap-1.5">
                  3. Simulado Completo
                </h3>
                <p className="text-xs text-purple-200/80 mt-1 leading-relaxed">
                  20 questões misturando todos os 3 bimestres. Simula exatamente o dia da prova.
                </p>
              </div>
              <div className="flex items-center gap-1 text-xs font-bold text-amber-400 pt-2 border-t border-purple-500/20">
                <span>Iniciar Simulado Agora</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          </div>

          {/* TRILHA SUGERIDA DE ESTUDO RÁPIDO */}
          <div className="bg-slate-950/70 border border-indigo-500/20 rounded-2xl p-4 sm:p-5 space-y-2">
            <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-amber-400" />
              Roteiro de Emergência para os Últimos 2 Dias:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="font-bold text-indigo-300 block">Passo 1: Leitura Ativa</span>
                <p className="text-slate-400 leading-snug">
                  Leia os 9 cartões do <strong>Estudo Rápido</strong> e marque como revisados para fixar as regras lógicas.
                </p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="font-bold text-purple-300 block">Passo 2: Teste Real</span>
                <p className="text-slate-400 leading-snug">
                  Faça o <strong>Simulado Oficial de 20 questões</strong> para treinar a gestão do tempo e calcular sua nota real.
                </p>
              </div>
              <div className="bg-slate-900/90 border border-slate-800 p-3 rounded-xl space-y-1">
                <span className="font-bold text-emerald-300 block">Passo 3: Correção de Erros</span>
                <p className="text-slate-400 leading-snug">
                  Revise no gabarito as questões que errou e faça um treino direcionado nos temas onde sentiu mais dúvida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          PAINEL DE ESTATÍSTICAS E VOLUMES
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card: Status do Banco de Questões */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Progresso no Banco
            </h3>
            <span className="text-xs text-slate-400">{dominados} de {totalProblemas}</span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Taxa de Domínio:</span>
              <span className="text-emerald-400 font-bold">
                {Math.round((dominados / totalProblemas) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
              <div
                className="bg-emerald-500 h-full transition-all"
                style={{ width: `${(dominados / totalProblemas) * 100}%` }}
              />
              <div
                className="bg-amber-500 h-full transition-all"
                style={{ width: `${(revisar / totalProblemas) * 100}%` }}
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-emerald-400 font-bold text-sm block">{dominados}</span>
              <span className="text-[10px] text-slate-500">Dominados</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-amber-400 font-bold text-sm block">{revisar}</span>
              <span className="text-[10px] text-slate-500">Revisar</span>
            </div>
            <div className="bg-slate-950 p-2 rounded-lg border border-slate-800">
              <span className="text-slate-400 font-bold text-sm block">
                {totalProblemas - (dominados + revisar)}
              </span>
              <span className="text-[10px] text-slate-500">Pendentes</span>
            </div>
          </div>
        </div>

        {/* Card: Status dos Resumos Teóricos */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-indigo-400" />
              Resumos Teóricos
            </h3>
            <span className="text-xs text-indigo-300 font-bold">
              {resumosLidos}/{totalResumos} lidos
            </span>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Leitura Completa:</span>
              <span className="text-indigo-400 font-bold">
                {Math.round((resumosLidos / totalResumos) * 100)}%
              </span>
            </div>
            <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full transition-all"
                style={{ width: `${(resumosLidos / totalResumos) * 100}%` }}
              />
            </div>
          </div>

          <button
            onClick={() => setModoAtual('estudo_rapido')}
            className="w-full py-2 bg-indigo-600/20 hover:bg-indigo-600/30 border border-indigo-500/40 text-indigo-300 rounded-xl text-xs font-semibold transition-colors text-center"
          >
            Abrir Cartões de Leitura
          </button>
        </div>

        {/* Card: Último Simulado Realizado */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-400" />
                Último Simulado
              </h3>
              {ultimoSimulado && (
                <span className="text-[10px] text-slate-500">
                  {new Date(ultimoSimulado.data).toLocaleDateString()}
                </span>
              )}
            </div>

            {ultimoSimulado ? (
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-black text-emerald-400">
                    {ultimoSimulado.acertos}/{ultimoSimulado.totalQuestoes}
                  </span>
                  <span className="text-xs text-slate-400">
                    ({Math.round((ultimoSimulado.acertos / ultimoSimulado.totalQuestoes) * 100)}% de acertos)
                  </span>
                </div>
                <p className="text-xs text-slate-400">
                  Tempo: {Math.floor(ultimoSimulado.tempoTotalSegundos / 60)} min
                </p>
              </div>
            ) : (
              <p className="text-xs text-slate-400">
                Você ainda não realizou nenhum simulado. Inicie um treino de 20 questões para medir seu desempenho.
              </p>
            )}
          </div>

          <button
            onClick={iniciarSimuladoOficial}
            className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Fazer Novo Simulado
          </button>
        </div>
      </div>
    </div>
  );
};
