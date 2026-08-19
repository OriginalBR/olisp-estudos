import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP, TEMAS_OLISP } from '../data/problemas';
import {
  BookOpen,
  Timer,
  Flame,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Play,
  ArrowRight,
  Sparkles,
  Trophy,
  Clock,
  Layers,
  ChevronRight
} from 'lucide-react';

interface DashboardProps {
  onOpenConfig: () => void;
  onOpenShare: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenConfig }) => {
  const {
    setModoAtual,
    setProblemaAtivoId,
    progresso,
    ultimoProblemaEstudadoId,
    dataProva,
    iniciarSimulado,
    historicoSimulados
  } = useAppStore();

  const totalProblemas = PROBLEMAS_OLISP.length;

  // Contagens por status
  const dominados = Object.values(progresso).filter((p) => p.status === 'dominado').length;
  const revisar = Object.values(progresso).filter((p) => p.status === 'revisar').length;
  const naoVistos = totalProblemas - (dominados + revisar);

  const pctDominados = Math.round((dominados / totalProblemas) * 100);
  const pctRevisar = Math.round((revisar / totalProblemas) * 100);

  // Progresso por Bimestre
  const progressoBimestres = [1, 2, 3].map((bim) => {
    const questoesBim = PROBLEMAS_OLISP.filter((p) => p.bimestre === bim);
    const total = questoesBim.length;
    const dom = questoesBim.filter((p) => progresso[p.id]?.status === 'dominado').length;
    const rev = questoesBim.filter((p) => progresso[p.id]?.status === 'revisar').length;
    const pct = total > 0 ? Math.round((dom / total) * 100) : 0;
    return {
      bimestre: bim,
      titulo: `Volume ${bim} (${bim}º Bimestre)`,
      total,
      dominados: dom,
      revisar: rev,
      pct
    };
  });

  // Dias até a prova
  const calcularDiasRestantes = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const prova = new Date(dataProva + 'T00:00:00');
    const diff = prova.getTime() - hoje.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  const diasRestantes = calcularDiasRestantes();

  // Problema para continuar
  const problemaContinuar = ultimoProblemaEstudadoId
    ? PROBLEMAS_OLISP.find((p) => p.id === ultimoProblemaEstudadoId)
    : PROBLEMAS_OLISP[0];

  const handleContinuar = () => {
    if (problemaContinuar) {
      setProblemaAtivoId(problemaContinuar.id);
    }
    setModoAtual('revisao');
  };

  const ultimoSimulado = historicoSimulados[0];

  return (
    <div className="space-y-6 max-w-5xl mx-auto pb-12 animate-in fade-in duration-300">
      {/* Banner Principal com Contagem Regressiva */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-950 via-slate-900 to-purple-950 border border-indigo-500/20 p-5 sm:p-7 shadow-xl shadow-indigo-950/40">
        <div className="absolute top-0 right-0 -mt-8 -mr-8 w-56 h-56 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-8 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-400/30 text-indigo-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Preparatório Intensivo OLISP</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Rumo à Olimpíada de Linguística! 🏛️
            </h1>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed">
              Treine problemas de raciocínio lógico-linguístico extraídos dos 3 volumes didáticos da 1ª série. Revise morfologia, variação linguística, semântica, sintaxe e literaturas com explicações passo a passo.
            </p>
          </div>

          {/* Card Contagem Regressiva */}
          <div className="flex-shrink-0 bg-slate-900/90 border border-indigo-500/30 p-4 rounded-xl flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center flex-shrink-0">
              <Clock className="w-6 h-6 text-amber-400" />
            </div>
            <div>
              <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                Faltam para a prova
              </div>
              <div className="text-2xl font-black text-amber-400 tracking-tight">
                {diasRestantes > 0
                  ? `${diasRestantes} ${diasRestantes === 1 ? 'Dia' : 'Dias'}`
                  : diasRestantes === 0
                  ? 'É Hoje!'
                  : 'Prova Concluída'}
              </div>
              <button
                onClick={onOpenConfig}
                className="text-[11px] text-indigo-400 hover:text-indigo-300 underline font-medium"
              >
                Ajustar data ({new Date(dataProva + 'T00:00:00').toLocaleDateString('pt-BR')})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ações Rápidas em Destaque */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {/* Continuar de onde parei */}
        <button
          onClick={handleContinuar}
          className="glass-card-interactive p-4 rounded-xl text-left flex flex-col justify-between group border-l-4 border-l-indigo-500"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-9 h-9 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Play className="w-4 h-4 fill-current" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider">
              {ultimoProblemaEstudadoId ? 'Continuar' : 'Começar'}
            </span>
            <h3 className="text-sm font-bold text-white line-clamp-1">
              {problemaContinuar ? problemaContinuar.titulo : 'Primeira Questão'}
            </h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Vol. {problemaContinuar?.bimestre} • {problemaContinuar?.tema}
            </p>
          </div>
        </button>

        {/* Modo Revisão Livre */}
        <button
          onClick={() => setModoAtual('revisao')}
          className="glass-card-interactive p-4 rounded-xl text-left flex flex-col justify-between group border-l-4 border-l-purple-500"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-9 h-9 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <BookOpen className="w-4 h-4" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-purple-400 group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wider">
              Sem Pressão
            </span>
            <h3 className="text-sm font-bold text-white">Modo Revisão</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              {totalProblemas} problemas com gabarito passo a passo
            </p>
          </div>
        </button>

        {/* Simulado Cronometrado */}
        <button
          onClick={() => iniciarSimulado(10, 40)}
          className="glass-card-interactive p-4 rounded-xl text-left flex flex-col justify-between group border-l-4 border-l-amber-500"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Timer className="w-4 h-4" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-amber-400 uppercase tracking-wider">
              Simulação Real
            </span>
            <h3 className="text-sm font-bold text-white">Simulado Rápido</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              10 questões em 40 min (formato prova)
            </p>
          </div>
        </button>

        {/* Modo Últimos Dias */}
        <button
          onClick={() => setModoAtual('ultimos_dias')}
          className="glass-card-interactive p-4 rounded-xl text-left flex flex-col justify-between group border-l-4 border-l-rose-500"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-9 h-9 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
              <Flame className="w-4 h-4" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-400 group-hover:translate-x-0.5 transition-all" />
          </div>
          <div>
            <span className="text-[10px] font-bold text-rose-400 uppercase tracking-wider">
              Foco Crítico
            </span>
            <h3 className="text-sm font-bold text-white">Últimos Dias</h3>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Priorize dúvidas e temas mais fracos
            </p>
          </div>
        </button>
      </div>

      {/* Estatísticas Gerais de Progresso */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Card de Resumo Geral */}
        <div className="glass-card p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Trophy className="w-4 h-4 text-amber-400" />
              Domínio Geral
            </h3>
            <span className="text-xs font-semibold text-slate-400">
              {dominados}/{totalProblemas} dominadas
            </span>
          </div>

          {/* Barra de Progresso Segmentada */}
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden flex">
            <div
              style={{ width: `${pctDominados}%` }}
              className="bg-emerald-500 transition-all duration-500"
              title={`Dominados: ${dominados}`}
            />
            <div
              style={{ width: `${pctRevisar}%` }}
              className="bg-amber-500 transition-all duration-500"
              title={`Para Revisar: ${revisar}`}
            />
          </div>

          <div className="grid grid-cols-3 gap-2 pt-2 text-center">
            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-center gap-1 text-emerald-400 text-xs font-bold mb-0.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{dominados}</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">
                Dominadas
              </div>
            </div>

            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-center gap-1 text-amber-400 text-xs font-bold mb-0.5">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{revisar}</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">
                A Revisar
              </div>
            </div>

            <div className="bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/80">
              <div className="flex items-center justify-center gap-1 text-slate-400 text-xs font-bold mb-0.5">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>{naoVistos}</span>
              </div>
              <div className="text-[10px] text-slate-400 uppercase font-semibold">
                Não Vistas
              </div>
            </div>
          </div>
        </div>

        {/* Progresso por Volume/Bimestre */}
        <div className="lg:col-span-2 glass-card p-5 rounded-2xl space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-sm text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-indigo-400" />
              Progresso por Livro / Bimestre
            </h3>
            <button
              onClick={() => setModoAtual('estatisticas')}
              className="text-xs text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1"
            >
              Ver detalhes <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-3">
            {progressoBimestres.map((b) => (
              <div
                key={b.bimestre}
                onClick={() => setModoAtual('revisao')}
                className="p-3 rounded-xl bg-slate-900/50 hover:bg-slate-800/50 border border-slate-800/60 transition-all cursor-pointer"
              >
                <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
                  <span className="text-slate-200">{b.titulo}</span>
                  <span className="text-indigo-300 font-bold">
                    {b.dominados}/{b.total} ({b.pct}%)
                  </span>
                </div>
                <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div
                    style={{ width: `${b.pct}%` }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card do Último Simulado Realizado */}
      {ultimoSimulado && (
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Último Simulado
              </span>
              <span className="text-xs text-slate-400">
                {new Date(ultimoSimulado.data).toLocaleDateString('pt-BR')}
              </span>
            </div>
            <h4 className="text-base font-bold text-white">
              Aproveitamento:{' '}
              <span className="text-emerald-400">
                {Math.round((ultimoSimulado.acertos / ultimoSimulado.totalQuestoes) * 100)}%
              </span>{' '}
              ({ultimoSimulado.acertos}/{ultimoSimulado.totalQuestoes} questões)
            </h4>
            <p className="text-xs text-slate-400">
              Tempo total: {Math.round(ultimoSimulado.tempoTotalSegundos / 60)} min • Média:{' '}
              {ultimoSimulado.tempoMedioPorQuestao}s por questão
            </p>
          </div>

          <button
            onClick={() => setModoAtual('simulado')}
            className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-indigo-600/30"
          >
            <Timer className="w-3.5 h-3.5" />
            Fazer Novo Simulado
          </button>
        </div>
      )}

      {/* Temas Linguísticos em Destaque */}
      <div className="glass-card p-5 rounded-2xl space-y-3">
        <h3 className="font-bold text-sm text-white">Temas Centrais da Prova</h3>
        <div className="flex flex-wrap gap-2">
          {TEMAS_OLISP.map((tema) => {
            const count = PROBLEMAS_OLISP.filter((p) => p.tema === tema).length;
            const dom = PROBLEMAS_OLISP.filter(
              (p) => p.tema === tema && progresso[p.id]?.status === 'dominado'
            ).length;
            return (
              <button
                key={tema}
                onClick={() => setModoAtual('revisao')}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-indigo-950/60 border border-slate-800 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
              >
                <span>{tema}</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-indigo-300 font-semibold">
                  {dom}/{count}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
