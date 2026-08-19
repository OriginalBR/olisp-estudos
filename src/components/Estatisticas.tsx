import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP, TEMAS_OLISP } from '../data/problemas';
import {
  BarChart3,
  Trophy,
  Clock,
  Target
} from 'lucide-react';

export const Estatisticas: React.FC = () => {
  const { progresso, historicoSimulados, setModoAtual } = useAppStore();

  const totalProblemas = PROBLEMAS_OLISP.length;
  const dominados = Object.values(progresso).filter((p) => p.status === 'dominado').length;
  const pctDominioGeral = Math.round((dominados / totalProblemas) * 100);

  // Desempenho por Tema
  const estatisticasTemas = TEMAS_OLISP.map((tema) => {
    const questoesTema = PROBLEMAS_OLISP.filter((p) => p.tema === tema);
    const total = questoesTema.length;
    const dom = questoesTema.filter((p) => progresso[p.id]?.status === 'dominado').length;
    const rev = questoesTema.filter((p) => progresso[p.id]?.status === 'revisar').length;
    const pct = total > 0 ? Math.round((dom / total) * 100) : 0;
    return {
      tema,
      total,
      dominados: dom,
      revisar: rev,
      pct
    };
  }).sort((a, b) => b.pct - a.pct);

  // Identificação do ponto forte e ponto de atenção
  const temaMaisForte = estatisticasTemas[0];
  const temasParaReforco = estatisticasTemas
    .filter((t) => t.pct < 60 && t.total > 0)
    .sort((a, b) => a.pct - b.pct);

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Header */}
      <div className="glass-card p-6 rounded-3xl border border-indigo-500/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-[11px] uppercase tracking-wider font-bold text-indigo-400">
            Painel Analítico
          </span>
          <h2 className="text-2xl font-black text-white">Estatísticas de Desempenho</h2>
          <p className="text-xs text-slate-400">
            Acompanhe seu avanço e identifique onde focar nos dias que antecedem a prova da OLISP.
          </p>
        </div>

        <div className="flex items-center gap-3 bg-slate-900/90 p-3 rounded-2xl border border-slate-800">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-lg">
            ★
          </div>
          <div>
            <div className="text-xl font-black text-white">{pctDominioGeral}%</div>
            <div className="text-[10px] text-slate-400 font-bold uppercase">Domínio Total</div>
          </div>
        </div>
      </div>

      {/* Cards de Destaque / Diagnóstico Inteligente */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Ponto Forte */}
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-emerald-500 space-y-2">
          <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase">
            <Trophy className="w-4 h-4" />
            <span>Maior Domínio Atual:</span>
          </div>
          <h4 className="text-base font-extrabold text-white">
            {temaMaisForte ? temaMaisForte.tema : 'Geral'}
          </h4>
          <p className="text-xs text-slate-300">
            Você já dominou{' '}
            <strong className="text-emerald-400">
              {temaMaisForte?.dominados}/{temaMaisForte?.total} ({temaMaisForte?.pct}%)
            </strong>{' '}
            dos problemas deste tema. Continue assim!
          </p>
        </div>

        {/* Foco de Reforço */}
        <div className="glass-card p-5 rounded-2xl border-l-4 border-l-amber-500 space-y-2">
          <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase">
            <Target className="w-4 h-4" />
            <span>Recomendação de Foco:</span>
          </div>
          <h4 className="text-base font-extrabold text-white">
            {temasParaReforco.length > 0 ? temasParaReforco[0].tema : 'Revisão Geral'}
          </h4>
          <p className="text-xs text-slate-300">
            {temasParaReforco.length > 0 ? (
              <>
                Aproveitamento de apenas{' '}
                <strong className="text-amber-400">{temasParaReforco[0].pct}%</strong>. Dedique
                alguns minutos extras para revisar estes conceitos.
              </>
            ) : (
              'Parabéns! Todos os temas têm bom nível de domínio!'
            )}
          </p>
        </div>
      </div>

      {/* Tabela / Barras de Desempenho por Tema */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="font-extrabold text-base text-white flex items-center gap-2">
          <BarChart3 className="w-4 h-4 text-indigo-400" />
          Desempenho Detalhado por Tema Linguístico
        </h3>

        <div className="space-y-3">
          {estatisticasTemas.map((item) => (
            <div
              key={item.tema}
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-2 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-slate-200">{item.tema}</span>
                <span
                  className={
                    item.pct >= 70
                      ? 'text-emerald-400 font-bold'
                      : item.pct >= 40
                      ? 'text-amber-400 font-bold'
                      : 'text-rose-400 font-bold'
                  }
                >
                  {item.dominados}/{item.total} ({item.pct}%)
                </span>
              </div>

              {/* Barra de Progresso */}
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                <div
                  style={{ width: `${item.pct}%` }}
                  className={`h-full rounded-full transition-all duration-500 ${
                    item.pct >= 70
                      ? 'bg-emerald-500'
                      : item.pct >= 40
                      ? 'bg-amber-500'
                      : 'bg-rose-500'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Histórico dos Simulados Realizados */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        <h3 className="font-extrabold text-base text-white flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-400" />
          Histórico de Simulados
        </h3>

        {historicoSimulados.length === 0 ? (
          <div className="text-center py-6 text-xs text-slate-400 space-y-2">
            <p>Você ainda não realizou nenhum simulado cronometrado.</p>
            <button
              onClick={() => setModoAtual('simulado')}
              className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs"
            >
              Fazer Meu Primeiro Simulado
            </button>
          </div>
        ) : (
          <div className="space-y-2">
            {historicoSimulados.map((sim, i) => {
              const pct = Math.round((sim.acertos / sim.totalQuestoes) * 100);
              return (
                <div
                  key={sim.id}
                  className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs"
                >
                  <div className="space-y-0.5">
                    <div className="font-bold text-white">
                      Simulado #{historicoSimulados.length - i}
                    </div>
                    <div className="text-[11px] text-slate-400">
                      {new Date(sim.data).toLocaleDateString('pt-BR')} às{' '}
                      {new Date(sim.data).toLocaleTimeString('pt-BR', {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="font-bold text-emerald-400">{pct}% de acertos</div>
                      <div className="text-[10px] text-slate-400">
                        {sim.acertos}/{sim.totalQuestoes} questões
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
