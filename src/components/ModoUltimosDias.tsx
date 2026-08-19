import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP, TEMAS_OLISP } from '../data/problemas';
import {
  Flame,
  AlertCircle,
  ArrowRight,
  Sparkles,
  RotateCcw
} from 'lucide-react';

export const ModoUltimosDias: React.FC = () => {
  const { progresso, setModoAtual, setProblemaAtivoId, dataProva } = useAppStore();

  // 1. Questões marcadas para revisão pelo aluno
  const questoesParaRevisar = PROBLEMAS_OLISP.filter(
    (p) => progresso[p.id]?.status === 'revisar'
  );

  // 2. Temas com menor aproveitamento
  const temasComDesempenho = TEMAS_OLISP.map((tema) => {
    const questoes = PROBLEMAS_OLISP.filter((p) => p.tema === tema);
    const dominadas = questoes.filter((p) => progresso[p.id]?.status === 'dominado').length;
    const pct = questoes.length > 0 ? Math.round((dominadas / questoes.length) * 100) : 0;
    return { tema, pct, questoes };
  }).sort((a, b) => a.pct - b.pct);

  const temasMaisCriticos = temasComDesempenho.filter((t) => t.pct < 60);

  // 3. Questões Difíceis e Médias Não Vistas
  const questoesCriticasNaoVistas = PROBLEMAS_OLISP.filter(
    (p) =>
      (!progresso[p.id] || progresso[p.id]?.status === 'nao_visto') &&
      (p.dificuldade === 'dificil' || p.dificuldade === 'media')
  );

  const abrirProblema = (id: string) => {
    setProblemaAtivoId(id);
    setModoAtual('revisao');
  };

  // Contagem regressiva
  const calcularDiasRestantes = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const prova = new Date(dataProva + 'T00:00:00');
    const diff = prova.getTime() - hoje.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  };
  const diasRestantes = calcularDiasRestantes();

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-200">
      {/* Banner Especial de Reta Final */}
      <div className="glass-card p-6 rounded-3xl border-l-4 border-l-amber-500 bg-gradient-to-r from-amber-950/40 via-slate-900 to-indigo-950/40 space-y-2">
        <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
          <Flame className="w-4 h-4 fill-current" />
          <span>Modo Intensivo Reta Final</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-white">
          Foco Crítico: Últimos Dias para a OLISP
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          {diasRestantes > 0
            ? `Restam apenas ${diasRestantes} dias para a prova! `
            : 'A prova está aí! '}
          Esta tela filtra automaticamente os problemas com maior potencial de alavancar sua nota nos momentos finais.
        </p>
      </div>

      {/* Seção 1: Suas Dúvidas Marcadas */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
              <RotateCcw className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                1. Questões que Você Sinalizou como "Precisa Revisar"
              </h3>
              <p className="text-[11px] text-slate-400">
                {questoesParaRevisar.length} questões com dúvidas pendentes
              </p>
            </div>
          </div>
        </div>

        {questoesParaRevisar.length === 0 ? (
          <div className="text-center py-4 text-xs text-slate-400">
            Nenhuma questão marcada como pendente no momento! Ótimo trabalho.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {questoesParaRevisar.map((p) => (
              <div
                key={p.id}
                onClick={() => abrirProblema(p.id)}
                className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-rose-500/30 hover:border-rose-500 cursor-pointer transition-all flex flex-col justify-between space-y-2 group"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                    <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                      Vol {p.bimestre} • {p.tema}
                    </span>
                    <span className="font-semibold uppercase">{p.dificuldade}</span>
                  </div>
                  <h4 className="font-bold text-xs text-white group-hover:text-rose-300 transition-colors line-clamp-1">
                    {p.titulo}
                  </h4>
                  <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{p.pergunta}</p>
                </div>
                <div className="text-[11px] font-bold text-rose-400 flex items-center gap-1 self-end">
                  Revisar Agora <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Seção 2: Temas Críticos com Baixo Domínio */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                2. Temas com Menor Domínio ({temasMaisCriticos.length} temas abaixo de 60%)
              </h3>
              <p className="text-[11px] text-slate-400">
                Conceitos teóricos onde vale a pena passar o olho antes da prova
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {temasMaisCriticos.map((item) => (
            <div
              key={item.tema}
              className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2"
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-white font-bold">{item.tema}</span>
                <span className="text-amber-400 font-bold">{item.pct}% dominado</span>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {item.questoes.slice(0, 3).map((q) => (
                  <button
                    key={q.id}
                    onClick={() => abrirProblema(q.id)}
                    className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-indigo-900/60 border border-slate-700 hover:border-indigo-500/40 text-[11px] text-slate-300 hover:text-white transition-all flex items-center gap-1"
                  >
                    <span>{q.titulo}</span>
                    <ArrowRight className="w-3 h-3 text-indigo-400" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção 3: Questões Chave Não Vistas */}
      <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-extrabold text-sm sm:text-base text-white">
                3. Questões Importantes Ainda Não Vistas
              </h3>
              <p className="text-[11px] text-slate-400">
                Exercícios de nível médio/difícil que você ainda não abriu
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {questoesCriticasNaoVistas.slice(0, 6).map((p) => (
            <div
              key={p.id}
              onClick={() => abrirProblema(p.id)}
              className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-indigo-500 cursor-pointer transition-all flex flex-col justify-between space-y-2 group"
            >
              <div>
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold">
                    Vol {p.bimestre} • {p.tema}
                  </span>
                  <span className="font-semibold uppercase">{p.dificuldade}</span>
                </div>
                <h4 className="font-bold text-xs text-white group-hover:text-indigo-300 transition-colors line-clamp-1">
                  {p.titulo}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2 mt-1">{p.pergunta}</p>
              </div>
              <div className="text-[11px] font-bold text-indigo-400 flex items-center gap-1 self-end">
                Abrir Questão <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
