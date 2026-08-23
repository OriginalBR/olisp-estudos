import React, { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP, TEMAS_OLISP, TemaOlisp } from '../data/problemas';
import { Problema, StatusProblema, FiltrosRevisao, Alternativa } from '../types';
import confetti from 'canvas-confetti';
import {
  Search,
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  RotateCcw,
  List,
  Check,
  Info,
  Maximize2
} from 'lucide-react';


export const ModoRevisao: React.FC = () => {
  const {
    problemaAtivoId,
    setProblemaAtivoId,
    temaFiltroRevisao,
    setTemaFiltroRevisao,
    progresso,
    atualizarStatusProblema
  } = useAppStore();

  const [filtros, setFiltros] = useState<FiltrosRevisao>({
    bimestre: 'todos',
    tema: (temaFiltroRevisao as TemaOlisp) || 'todos',
    dificuldade: 'todas',
    status: 'todos',
    busca: ''
  });

  const [alternativaSelecionada, setAlternativaSelecionada] = useState<'A' | 'B' | 'C' | 'D' | 'E' | null>(null);
  const [modoExibicao, setModoExibicao] = useState<'foco' | 'lista'>('foco');

  // Sincroniza tema vindo de fora (ex: da tela de Estudo Rápido)
  useEffect(() => {
    if (temaFiltroRevisao) {
      setFiltros((prev) => ({ ...prev, tema: temaFiltroRevisao as TemaOlisp }));
      setTemaFiltroRevisao(null);
    }
  }, [temaFiltroRevisao, setTemaFiltroRevisao]);

  // Filtragem dos problemas
  const problemasFiltrados = PROBLEMAS_OLISP.filter((p) => {
    if (filtros.bimestre !== 'todos' && p.bimestre !== filtros.bimestre) return false;
    if (filtros.tema !== 'todos' && p.tema !== filtros.tema) return false;
    if (filtros.dificuldade !== 'todas' && p.dificuldade !== filtros.dificuldade) return false;

    const statusAtual = progresso[p.id]?.status || 'nao_visto';
    if (filtros.status !== 'todos' && statusAtual !== filtros.status) return false;

    if (filtros.busca.trim()) {
      const q = filtros.busca.toLowerCase();
      const matchTitulo = p.titulo.toLowerCase().includes(q);
      const matchEnunciado = p.enunciado.toLowerCase().includes(q);
      const matchPergunta = p.pergunta.toLowerCase().includes(q);
      const matchTema = p.tema.toLowerCase().includes(q);
      if (!matchTitulo && !matchEnunciado && !matchPergunta && !matchTema) return false;
    }

    return true;
  });

  const problemaAtual: Problema =
    problemasFiltrados.find((p) => p.id === problemaAtivoId) ||
    problemasFiltrados[0] ||
    PROBLEMAS_OLISP[0];

  const indiceAtual = problemasFiltrados.findIndex((p) => p.id === problemaAtual?.id);

  // Efeito ao trocar de problema: carrega a resposta salva se houver
  useEffect(() => {
    if (problemaAtual) {
      const salvo = progresso[problemaAtual.id]?.ultimaAlternativaEscolhida;
      setAlternativaSelecionada(salvo || null);
    }
  }, [problemaAtual?.id, progresso]);

  // Se o problema ativo não estiver no filtro ou for nulo, ajusta
  useEffect(() => {
    if (!problemaAtivoId && problemasFiltrados.length > 0) {
      setProblemaAtivoId(problemasFiltrados[0].id);
    }
  }, [problemasFiltrados, problemaAtivoId, setProblemaAtivoId]);

  const progressoAtual = problemaAtual ? progresso[problemaAtual.id] : undefined;
  const statusAtual: StatusProblema = progressoAtual?.status || 'nao_visto';

  const handleSelecionarAlternativa = (letra: 'A' | 'B' | 'C' | 'D' | 'E') => {
    if (!problemaAtual) return;
    setAlternativaSelecionada(letra);

    const acertou = letra === problemaAtual.respostaCorreta;
    const novoStatus: StatusProblema = acertou ? 'dominado' : 'revisar';

    atualizarStatusProblema(problemaAtual.id, novoStatus, letra);

    if (acertou) {
      confetti({
        particleCount: 35,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#10b981', '#6366f1', '#f59e0b']
      });
    }
  };

  const handleProximo = () => {
    if (indiceAtual < problemasFiltrados.length - 1) {
      setProblemaAtivoId(problemasFiltrados[indiceAtual + 1].id);
    }
  };

  const handleAnterior = () => {
    if (indiceAtual > 0) {
      setProblemaAtivoId(problemasFiltrados[indiceAtual - 1].id);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-5 pb-16">
      {/* Barra Superior de Filtros e Busca */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-3 shadow-lg">
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar questão por termo ou título..."
              value={filtros.busca}
              onChange={(e) => setFiltros({ ...filtros, busca: e.target.value })}
              className="w-full bg-slate-950 border border-slate-700 rounded-xl pl-9 pr-4 py-2 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs text-slate-400 font-medium">
              Questões: <strong>{problemasFiltrados.length}</strong>
            </span>

            {/* Alternador de Modo Foco / Lista */}
            <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setModoExibicao('foco')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  modoExibicao === 'foco'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Maximize2 className="w-3.5 h-3.5" />
                Foco
              </button>
              <button
                onClick={() => setModoExibicao('lista')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  modoExibicao === 'lista'
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                Lista
              </button>
            </div>
          </div>
        </div>

        {/* Filtros em linha */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-slate-800 text-xs">
          <div>
            <label className="text-slate-400 block mb-1 font-medium">Volume / Bimestre:</label>
            <select
              value={filtros.bimestre}
              onChange={(e) =>
                setFiltros({
                  ...filtros,
                  bimestre: e.target.value === 'todos' ? 'todos' : (Number(e.target.value) as 1 | 2 | 3)
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="todos">Todos os Volumes</option>
              <option value="1">Volume 1 (1º Bimestre)</option>
              <option value="2">Volume 2 (2º Bimestre)</option>
              <option value="3">Volume 3 (3º Bimestre)</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">Tema:</label>
            <select
              value={filtros.tema}
              onChange={(e) =>
                setFiltros({
                  ...filtros,
                  tema: e.target.value as any
                })
              }
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="todos">Todos os Temas</option>
              {TEMAS_OLISP.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">Dificuldade:</label>
            <select
              value={filtros.dificuldade}
              onChange={(e) => setFiltros({ ...filtros, dificuldade: e.target.value as any })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="todas">Todas</option>
              <option value="facil">Fácil</option>
              <option value="media">Média</option>
              <option value="dificil">Difícil</option>
            </select>
          </div>

          <div>
            <label className="text-slate-400 block mb-1 font-medium">Status de Domínio:</label>
            <select
              value={filtros.status}
              onChange={(e) => setFiltros({ ...filtros, status: e.target.value as any })}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-indigo-500"
            >
              <option value="todos">Todos os Status</option>
              <option value="nao_visto">Não Visto</option>
              <option value="revisar">Para Revisar (Errou)</option>
              <option value="dominado">Dominado (Acertou)</option>
            </select>
          </div>
        </div>
      </div>

      {problemasFiltrados.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-12 text-center space-y-3">
          <HelpCircle className="w-12 h-12 text-slate-600 mx-auto" />
          <h3 className="text-lg font-bold text-white">Nenhuma questão encontrada</h3>
          <p className="text-sm text-slate-400">
            Tente redefinir os filtros aplicados para visualizar os problemas da OLISP.
          </p>
          <button
            onClick={() =>
              setFiltros({
                bimestre: 'todos',
                tema: 'todos',
                dificuldade: 'todas',
                status: 'todos',
                busca: ''
              })
            }
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition-colors"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : modoExibicao === 'foco' ? (
        /* MODO FOCO: Questão Individual em Destaque */
        <div className="space-y-4">
          {/* Navegador entre questões */}
          <div className="flex items-center justify-between bg-slate-900/80 border border-slate-800 px-4 py-2.5 rounded-xl text-xs">
            <div className="flex items-center gap-2">
              <span className="font-semibold text-slate-300">
                Questão {indiceAtual + 1} de {problemasFiltrados.length}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-slate-400">{problemaAtual.livro}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleAnterior}
                disabled={indiceAtual === 0}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-slate-200 transition-colors"
                title="Questão Anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleProximo}
                disabled={indiceAtual === problemasFiltrados.length - 1}
                className="p-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed rounded-lg text-slate-200 transition-colors"
                title="Próxima Questão"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Cartão Principal do Problema */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl space-y-6 p-6">
            {/* Header do Problema */}
            <div className="space-y-2 border-b border-slate-800/80 pb-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-indigo-950 border border-indigo-500/30 text-indigo-300">
                    {problemaAtual.tema}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-md text-[11px] font-semibold uppercase ${
                      problemaAtual.dificuldade === 'facil'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : problemaAtual.dificuldade === 'media'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                    }`}
                  >
                    Dificuldade {problemaAtual.dificuldade}
                  </span>
                </div>

                {/* Status Badge */}
                <div className="flex items-center gap-1.5 text-xs font-semibold">
                  {statusAtual === 'dominado' ? (
                    <span className="flex items-center gap-1 text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-lg">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Dominado
                    </span>
                  ) : statusAtual === 'revisar' ? (
                    <span className="flex items-center gap-1 text-amber-400 bg-amber-500/10 border border-amber-500/30 px-2.5 py-1 rounded-lg">
                      <RotateCcw className="w-3.5 h-3.5" /> Para Revisar
                    </span>
                  ) : (
                    <span className="text-slate-500 bg-slate-800/60 px-2.5 py-1 rounded-lg">
                      Não Visto
                    </span>
                  )}
                </div>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold text-white">
                {problemaAtual.titulo}
              </h2>
            </div>

            {/* Enunciado */}
            <div className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 font-sans">
              {problemaAtual.enunciado}
            </div>

            {/* Dados de Exemplo / Vocabulário Contextual */}
            {problemaAtual.dadosExemplo && problemaAtual.dadosExemplo.length > 0 && (
              <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
                <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5" /> Dados e Relações Fornecidas:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                  {problemaAtual.dadosExemplo.map((dado: string, idx: number) => (
                    <div key={idx} className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                      • {dado}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pergunta / Comando da Questão */}
            <div className="bg-indigo-950/30 border border-indigo-500/30 p-4 rounded-xl space-y-1">
              <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                Comando da Questão:
              </span>
              <p className="text-sm sm:text-base font-semibold text-white">
                {problemaAtual.pergunta}
              </p>
            </div>

            {/* Múltipla Escolha: Alternativas Clicáveis */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Selecione a Alternativa Correta:
              </span>

              <div className="space-y-2.5">
                {problemaAtual.alternativas.map((alt: Alternativa) => {
                  const foiEscolhida = alternativaSelecionada === alt.letra;
                  const isCorreta = alt.letra === problemaAtual.respostaCorreta;
                  const revelado = alternativaSelecionada !== null;


                  let styleClass = 'bg-slate-950 border-slate-800 text-slate-200 hover:border-indigo-500/60 hover:bg-slate-900';

                  if (revelado) {
                    if (isCorreta) {
                      styleClass = 'bg-emerald-950/60 border-emerald-500 text-emerald-100 ring-2 ring-emerald-500/40';
                    } else if (foiEscolhida && !isCorreta) {
                      styleClass = 'bg-rose-950/60 border-rose-500 text-rose-100 ring-2 ring-rose-500/40';
                    } else {
                      styleClass = 'bg-slate-950/40 border-slate-800/60 text-slate-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={alt.letra}
                      onClick={() => handleSelecionarAlternativa(alt.letra)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${styleClass}`}
                    >
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                          revelado && isCorreta
                            ? 'bg-emerald-500 text-slate-950'
                            : revelado && foiEscolhida && !isCorreta
                            ? 'bg-rose-500 text-white'
                            : foiEscolhida
                            ? 'bg-indigo-600 text-white'
                            : 'bg-slate-800 text-slate-300'
                        }`}
                      >
                        {revelado && isCorreta ? (
                          <Check className="w-4 h-4" />
                        ) : revelado && foiEscolhida && !isCorreta ? (
                          <XCircle className="w-4 h-4" />
                        ) : (
                          alt.letra
                        )}
                      </div>

                      <span className="text-sm leading-relaxed pt-0.5">
                        {alt.texto}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Painel de Explicação / Feedback Instantâneo */}
            {alternativaSelecionada !== null && (
              <div
                className={`rounded-2xl p-5 border space-y-3 animate-in fade-in slide-in-from-top-2 duration-300 ${
                  alternativaSelecionada === problemaAtual.respostaCorreta
                    ? 'bg-emerald-950/20 border-emerald-500/40'
                    : 'bg-rose-950/20 border-rose-500/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {alternativaSelecionada === problemaAtual.respostaCorreta ? (
                      <>
                        <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        <span className="text-base font-bold text-emerald-300">
                          Resposta Correta! Alternativa {problemaAtual.respostaCorreta}
                        </span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-5 h-5 text-rose-400" />
                        <span className="text-base font-bold text-rose-300">
                          Incorreto! A resposta correta é a alternativa {problemaAtual.respostaCorreta}
                        </span>
                      </>
                    )}
                  </div>

                  <span className="text-xs text-slate-400">
                    Gabarito Oficial OLISP
                  </span>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" /> Raciocínio Passo a Passo:
                  </span>
                  <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line bg-slate-950/60 p-4 rounded-xl border border-slate-800/60">
                    {problemaAtual.explicacao}
                  </div>
                </div>

                {/* Ações pós-resposta */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    onClick={handleProximo}
                    disabled={indiceAtual === problemasFiltrados.length - 1}
                    className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all disabled:opacity-40"
                  >
                    <span>Próxima Questão</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        /* MODO LISTA: Grade Resumida de Todas as Questões */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {problemasFiltrados.map((p, idx) => {
            const st = progresso[p.id]?.status || 'nao_visto';
            return (
              <div
                key={p.id}
                onClick={() => {
                  setProblemaAtivoId(p.id);
                  setModoExibicao('foco');
                }}
                className="bg-slate-900 hover:bg-slate-800/80 border border-slate-800 hover:border-indigo-500/50 p-4 rounded-2xl cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-3"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-slate-800 text-indigo-300 font-bold">
                      {p.tema}
                    </span>
                    <span
                      className={`font-semibold ${
                        st === 'dominado'
                          ? 'text-emerald-400'
                          : st === 'revisar'
                          ? 'text-amber-400'
                          : 'text-slate-500'
                      }`}
                    >
                      {st === 'dominado'
                        ? '✓ Dominado'
                        : st === 'revisar'
                        ? '⟲ Revisar'
                        : 'Não visto'}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-sm line-clamp-1">
                    {idx + 1}. {p.titulo}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {p.pergunta}
                  </p>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-800/80">
                  <span>{p.livro}</span>
                  <span className="text-indigo-400 font-medium hover:underline">
                    Resolver Agora →
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
