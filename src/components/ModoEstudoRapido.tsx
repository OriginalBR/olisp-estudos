import React, { useState, useMemo } from 'react';
import { useAppStore } from '../store/useAppStore';
import { RESUMOS_TEORICOS } from '../data/resumos';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  Copy,
  Check,
  Search,
  Sparkles,
  Zap,
  Target,
  ArrowRight,
  TrendingDown,
  Filter
} from 'lucide-react';

export const ModoEstudoRapido: React.FC = () => {
  const {
    resumosRevisados,
    toggleResumoRevisado,
    obterTemasComMaisErros,
    setModoAtual,
    setTemaFiltroRevisao
  } = useAppStore();

  const [busca, setBusca] = useState('');
  const [filtroBimestre, setFiltroBimestre] = useState<'todos' | 1 | 2 | 3>('todos');
  const [apenasNaoRevisados, setApenasNaoRevisados] = useState(false);
  const [ordenarPorErros, setOrdenarPorErros] = useState(true);
  const [copiadoId, setCopiadoId] = useState<string | null>(null);

  const temasComMaisErros = useMemo(() => obterTemasComMaisErros(), [obterTemasComMaisErros]);

  const totalTemas = RESUMOS_TEORICOS.length;
  const totalRevisados = useMemo(() => {
    return RESUMOS_TEORICOS.filter((r) => resumosRevisados[r.id]).length;
  }, [resumosRevisados]);

  const progressoPercentual = Math.round((totalRevisados / totalTemas) * 100);

  const handleCopiarCaderno = (resumo: typeof RESUMOS_TEORICOS[0]) => {
    const textoFormatado = `==============================
RESUMO OLISP: ${resumo.titulo.toUpperCase()}
Tema: ${resumo.tema} (Volume ${resumo.bimestre})
==============================

📌 PONTOS-CHAVE:
${resumo.pontosChave.map((p) => `• ${p}`).join('\n')}

🔍 COMO RECONHECER NA PROVA:
${resumo.comoReconhecer}

💡 ATALHO MENTAL / DICA DE RESOLUÇÃO:
${resumo.dicaDeResolucao}
${resumo.exemploResolvido ? `\n📝 EXEMPLO RESOLVIDO:\n${resumo.exemploResolvido}` : ''}
==============================`;

    navigator.clipboard.writeText(textoFormatado).then(() => {
      setCopiadoId(resumo.id);
      setTimeout(() => setCopiadoId(null), 2500);
    });
  };

  const irParaTreinoTema = (tema: string) => {
    setTemaFiltroRevisao(tema);
    setModoAtual('revisao');
  };

  const resumosFiltrados = useMemo(() => {
    let lista = [...RESUMOS_TEORICOS];

    if (filtroBimestre !== 'todos') {
      lista = lista.filter((r) => r.bimestre === filtroBimestre);
    }

    if (apenasNaoRevisados) {
      lista = lista.filter((r) => !resumosRevisados[r.id]);
    }

    if (busca.trim()) {
      const termo = busca.toLowerCase();
      lista = lista.filter(
        (r) =>
          r.titulo.toLowerCase().includes(termo) ||
          r.tema.toLowerCase().includes(termo) ||
          r.pontosChave.some((p) => p.toLowerCase().includes(termo)) ||
          r.dicaDeResolucao.toLowerCase().includes(termo)
      );
    }

    if (ordenarPorErros && temasComMaisErros.length > 0) {
      lista.sort((a, b) => {
        const indexA = temasComMaisErros.indexOf(a.tema);
        const indexB = temasComMaisErros.indexOf(b.tema);

        const rankA = indexA === -1 ? 999 : indexA;
        const rankB = indexB === -1 ? 999 : indexB;

        return rankA - rankB;
      });
    }

    return lista;
  }, [filtroBimestre, apenasNaoRevisados, busca, ordenarPorErros, temasComMaisErros, resumosRevisados]);

  return (
    <div className="space-y-6 pb-12">
      {/* Header & Progresso de Leitura */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-5 sm:p-6 shadow-xl relative overflow-hidden">
        <div className="absolute -right-8 -bottom-8 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold">
              <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
              Material de Leitura Rápida • 1 minuto por cartão
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
              <BookOpen className="w-7 h-7 text-indigo-400" />
              Estudo Rápido para a Prova
            </h1>
            <p className="text-sm text-slate-300 max-w-2xl">
              Condensado dos 3 bimestres focado no <strong className="text-indigo-200">padrão de raciocínio</strong> e nos atalhos mentais mais cobrados na OLISP.
            </p>
          </div>

          {/* Barra de Progresso */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 min-w-[240px]">
            <div className="flex items-center justify-between text-xs font-semibold mb-2">
              <span className="text-slate-400">Temas Revisados</span>
              <span className="text-emerald-400 font-bold">
                {totalRevisados} de {totalTemas} ({progressoPercentual}%)
              </span>
            </div>
            <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-500"
                style={{ width: `${progressoPercentual}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Controles e Filtros */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-xl p-4 space-y-3">
        <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
          {/* Campo de Busca */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar conceito, termo ou regra..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-lg pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Filtros de Bimestre */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs text-slate-400 flex items-center gap-1 mr-1">
              <Filter className="w-3.5 h-3.5" /> Volume:
            </span>
            {(['todos', 1, 2, 3] as const).map((b) => (
              <button
                key={b}
                onClick={() => setFiltroBimestre(b)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filtroBimestre === b
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-700/60'
                }`}
              >
                {b === 'todos' ? 'Todos' : `Vol. ${b}`}
              </button>
            ))}
          </div>
        </div>

        {/* Toggles de ordenação inteligente */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setOrdenarPorErros(!ordenarPorErros)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition-all ${
                ordenarPorErros
                  ? 'bg-amber-500/10 border-amber-500/40 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
              title="Coloca primeiro os temas em que você teve maior número de erros no simulado"
            >
              <TrendingDown className="w-3.5 h-3.5 text-amber-400" />
              Priorizar temas fracos do Simulado {ordenarPorErros && '✓'}
            </button>

            <button
              onClick={() => setApenasNaoRevisados(!apenasNaoRevisados)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium border transition-all ${
                apenasNaoRevisados
                  ? 'bg-indigo-500/20 border-indigo-500/40 text-indigo-300'
                  : 'bg-slate-800 border-slate-700 text-slate-400'
              }`}
            >
              <Circle className="w-3.5 h-3.5" />
              Apenas não revisados {apenasNaoRevisados && '✓'}
            </button>
          </div>

          <span className="text-slate-500">
            Exibindo <strong>{resumosFiltrados.length}</strong> de {totalTemas} cartões
          </span>
        </div>
      </div>

      {/* Lista de Cartões de Estudo Rápido */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {resumosFiltrados.map((resumo) => {
          const isRevisado = !!resumosRevisados[resumo.id];
          const isPrioritario = temasComMaisErros.slice(0, 3).includes(resumo.tema);

          return (
            <div
              key={resumo.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-lg ${
                isRevisado
                  ? 'bg-slate-900/60 border-emerald-500/30 ring-1 ring-emerald-500/20'
                  : 'bg-slate-900 border-slate-800 hover:border-slate-700'
              }`}
            >
              {/* Topo do Cartão */}
              <div className="p-5 space-y-4">
                {/* Badges de Categoria e Status */}
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-indigo-950/80 border border-indigo-500/30 text-indigo-300">
                      {resumo.tema}
                    </span>
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-slate-800 text-slate-400">
                      Vol. {resumo.bimestre}
                    </span>
                    {isPrioritario && (
                      <span className="px-2 py-0.5 rounded-md text-[10px] font-semibold bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-center gap-1">
                        <TrendingDown className="w-3 h-3" /> Foco no Simulado
                      </span>
                    )}
                  </div>

                  {/* Toggle Revisado */}
                  <button
                    onClick={() => toggleResumoRevisado(resumo.id)}
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                      isRevisado
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        : 'bg-slate-800/80 text-slate-400 border border-slate-700 hover:text-white'
                    }`}
                  >
                    {isRevisado ? (
                      <>
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        Revisado
                      </>
                    ) : (
                      <>
                        <Circle className="w-3.5 h-3.5 text-slate-500" />
                        Marcar visto
                      </>
                    )}
                  </button>
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-white leading-snug">
                  {resumo.titulo}
                </h3>

                {/* Pontos-Chave (Bullets) */}
                <div className="space-y-2 bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5">
                  <div className="text-[11px] font-bold tracking-wider uppercase text-indigo-400 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Pontos-Chave para o Caderno:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300 leading-relaxed">
                    {resumo.pontosChave.map((ponto, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-indigo-400 font-bold mt-0.5">•</span>
                        <span>{ponto}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Como Reconhecer na Prova */}
                <div className="space-y-1 text-xs">
                  <span className="font-semibold text-amber-300 flex items-center gap-1">
                    <Target className="w-3.5 h-3.5 text-amber-400" /> Como identificar na prova:
                  </span>
                  <p className="text-slate-400 leading-relaxed pl-4 border-l border-amber-500/30">
                    {resumo.comoReconhecer}
                  </p>
                </div>

                {/* Dica de Resolução / Atalho Mental */}
                <div className="bg-emerald-950/30 border border-emerald-500/20 rounded-xl p-3 text-xs space-y-1">
                  <span className="font-bold text-emerald-400 flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-emerald-400" /> Atalho Mental / Estratégia Rápida:
                  </span>
                  <p className="text-slate-200 leading-relaxed">
                    {resumo.dicaDeResolucao}
                  </p>
                </div>

                {/* Exemplo Resolvido */}
                {resumo.exemploResolvido && (
                  <div className="bg-slate-950/80 border border-slate-800 rounded-lg p-2.5 text-[11px] text-slate-300 font-mono">
                    <span className="text-slate-500 font-sans font-semibold block mb-0.5">
                      Mini-Exemplo de Fixação:
                    </span>
                    {resumo.exemploResolvido}
                  </div>
                )}
              </div>

              {/* Rodapé de Ações do Cartão */}
              <div className="p-4 bg-slate-950/60 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => handleCopiarCaderno(resumo)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white transition-all border border-slate-700/60"
                  title="Copiar texto limpo para colar no caderno, bloco de notas ou imprimir"
                >
                  {copiadoId === resumo.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copiar pro Caderno</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => irParaTreinoTema(resumo.tema)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300 hover:underline transition-colors"
                >
                  <span>Treinar questões deste tema</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {resumosFiltrados.length === 0 && (
        <div className="text-center py-16 bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
          <BookOpen className="w-12 h-12 text-slate-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-white">Nenhum resumo encontrado</h3>
          <p className="text-sm text-slate-400 mt-1">
            Tente alterar os termos de busca ou remover os filtros aplicados.
          </p>
        </div>
      )}
    </div>
  );
};
