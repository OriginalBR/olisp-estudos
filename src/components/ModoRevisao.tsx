import React, { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP, TEMAS_OLISP, TemaOlisp, Problema } from '../data/problemas';
import { StatusProblema, FiltrosRevisao } from '../types';
import confetti from 'canvas-confetti';
import {
  Search,
  Filter,
  Eye,
  EyeOff,
  Star,
  RotateCcw,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  FileEdit,
  CheckCircle2,
  BookMarked,
  List,
  Maximize2
} from 'lucide-react';

export const ModoRevisao: React.FC = () => {
  const {
    problemaAtivoId,
    setProblemaAtivoId,
    progresso,
    atualizarStatusProblema,
    salvarNotaProblema
  } = useAppStore();

  const [filtros, setFiltros] = useState<FiltrosRevisao>({
    bimestre: 'todos',
    tema: 'todos',
    dificuldade: 'todas',
    status: 'todos',
    busca: ''
  });

  const [mostrarResposta, setMostrarResposta] = useState(false);
  const [rascunhoAluno, setRascunhoAluno] = useState('');
  const [modoExibicao, setModoExibicao] = useState<'foco' | 'lista'>('foco');

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

  // Problema atualmente selecionado
  const problemaAtual: Problema =
    problemasFiltrados.find((p) => p.id === problemaAtivoId) ||
    problemasFiltrados[0] ||
    PROBLEMAS_OLISP[0];

  const indiceAtual = problemasFiltrados.findIndex((p) => p.id === problemaAtual?.id);

  // Efeito ao trocar de problema
  useEffect(() => {
    setMostrarResposta(false);
    setRascunhoAluno('');
  }, [problemaAtual?.id]);

  // Se o problema ativo não estiver no filtro ou for nulo, ajusta
  useEffect(() => {
    if (!problemaAtivoId && problemasFiltrados.length > 0) {
      setProblemaAtivoId(problemasFiltrados[0].id);
    }
  }, [problemasFiltrados, problemaAtivoId, setProblemaAtivoId]);

  const progressoAtual = problemaAtual ? progresso[problemaAtual.id] : undefined;
  const statusAtual: StatusProblema = progressoAtual?.status || 'nao_visto';

  const handleMarcarStatus = (status: StatusProblema) => {
    if (!problemaAtual) return;
    atualizarStatusProblema(problemaAtual.id, status);

    if (status === 'dominado') {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#f59e0b', '#6366f1', '#10b981']
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
    <div className="max-w-5xl mx-auto space-y-5 pb-16 animate-in fade-in duration-200">
      {/* Barra Superior de Filtros e Busca */}
      <div className="glass-card p-4 rounded-2xl space-y-3">
        <div className="flex flex-col sm:flex-row gap-2.5 items-center justify-between">
          {/* Busca por texto */}
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar por termo ou conceito..."
              value={filtros.busca}
              onChange={(e) => setFiltros({ ...filtros, busca: e.target.value })}
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {filtros.busca && (
              <button
                onClick={() => setFiltros({ ...filtros, busca: '' })}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>

          {/* Alternador de Modo (Foco vs Lista) */}
          <div className="flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800 self-end sm:self-auto">
            <button
              onClick={() => setModoExibicao('foco')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                modoExibicao === 'foco'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Modo Foco</span>
            </button>
            <button
              onClick={() => setModoExibicao('lista')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                modoExibicao === 'lista'
                  ? 'bg-indigo-600 text-white'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-3.5 h-3.5" />
              <span>Catálogo ({problemasFiltrados.length})</span>
            </button>
          </div>
        </div>

        {/* Filtros em Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-1 text-slate-400 font-semibold mr-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Filtros:</span>
          </div>

          {/* Filtro Bimestre */}
          <select
            value={filtros.bimestre}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                bimestre: e.target.value === 'todos' ? 'todos' : (Number(e.target.value) as 1 | 2 | 3)
              })
            }
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="todos">Todos os Volumes (1, 2 e 3)</option>
            <option value="1">Volume 1 (1º Bimestre)</option>
            <option value="2">Volume 2 (2º Bimestre)</option>
            <option value="3">Volume 3 (3º Bimestre)</option>
          </select>

          {/* Filtro Tema */}
          <select
            value={filtros.tema}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                tema: e.target.value as 'todos' | TemaOlisp
              })
            }
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500 max-w-[200px]"
          >
            <option value="todos">Todos os Temas</option>
            {TEMAS_OLISP.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Filtro Status */}
          <select
            value={filtros.status}
            onChange={(e) =>
              setFiltros({
                ...filtros,
                status: e.target.value as 'todos' | StatusProblema
              })
            }
            className="bg-slate-900 border border-slate-700 rounded-lg px-2.5 py-1 text-slate-200 focus:outline-none focus:border-indigo-500"
          >
            <option value="todos">Todos os Status</option>
            <option value="dominado">⭐ Dominadas</option>
            <option value="revisar">🔄 Precisa Revisar</option>
            <option value="nao_visto">⚪ Não Vistas</option>
          </select>

          {/* Limpar filtros */}
          {(filtros.bimestre !== 'todos' ||
            filtros.tema !== 'todos' ||
            filtros.status !== 'todos' ||
            filtros.busca) && (
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
              className="text-indigo-400 hover:text-indigo-300 underline font-semibold ml-auto"
            >
              Limpar filtros
            </button>
          )}
        </div>
      </div>

      {/* Visualização em Lista / Catálogo */}
      {modoExibicao === 'lista' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {problemasFiltrados.map((p) => {
            const st = progresso[p.id]?.status || 'nao_visto';
            const isSelected = p.id === problemaAtual?.id;
            return (
              <div
                key={p.id}
                onClick={() => {
                  setProblemaAtivoId(p.id);
                  setModoExibicao('foco');
                }}
                className={`p-4 rounded-xl cursor-pointer border transition-all ${
                  isSelected
                    ? 'bg-indigo-950/60 border-indigo-500 shadow-md shadow-indigo-500/20'
                    : 'bg-slate-900/60 hover:bg-slate-800/70 border-slate-800/80'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 text-[10px] font-bold">
                      Vol {p.bimestre}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {p.tema}
                    </span>
                  </div>

                  {st === 'dominado' && (
                    <span className="flex items-center gap-1 text-amber-400 text-[11px] font-bold">
                      <Star className="w-3 h-3 fill-current" /> Dominado
                    </span>
                  )}
                  {st === 'revisar' && (
                    <span className="flex items-center gap-1 text-rose-400 text-[11px] font-bold">
                      <RotateCcw className="w-3 h-3" /> Revisar
                    </span>
                  )}
                </div>

                <h4 className="font-bold text-sm text-white line-clamp-1 mb-1">{p.titulo}</h4>
                <p className="text-xs text-slate-400 line-clamp-2">{p.pergunta}</p>
              </div>
            );
          })}
        </div>
      ) : (
        /* Modo Foco / Card Detalhado */
        problemaAtual && (
          <div className="space-y-4">
            {/* Navegação Superior de Questões */}
            <div className="flex items-center justify-between glass-card px-4 py-2.5 rounded-xl text-xs">
              <button
                onClick={handleAnterior}
                disabled={indiceAtual <= 0}
                className="flex items-center gap-1 font-semibold text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>

              <div className="font-bold text-slate-300">
                Questão <span className="text-indigo-400 font-extrabold">{indiceAtual + 1}</span> de{' '}
                <span className="text-slate-400">{problemasFiltrados.length}</span>
              </div>

              <button
                onClick={handleProximo}
                disabled={indiceAtual >= problemasFiltrados.length - 1}
                className="flex items-center gap-1 font-semibold text-slate-300 hover:text-white disabled:opacity-30 disabled:hover:text-slate-300 transition-colors"
              >
                Próxima <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Card Principal da Questão */}
            <div className="glass-card p-5 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
              {/* Badges e Identificação do Problema */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                    {problemaAtual.livro}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 text-xs font-semibold">
                    {problemaAtual.tema}
                  </span>
                  <span
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold border ${
                      problemaAtual.dificuldade === 'facil'
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
                        : problemaAtual.dificuldade === 'media'
                        ? 'bg-amber-500/10 border-amber-500/30 text-amber-400'
                        : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
                    }`}
                  >
                    Dificuldade: {problemaAtual.dificuldade.toUpperCase()}
                  </span>
                </div>

                {/* Status Atual do Aluno */}
                <div className="flex items-center gap-1.5">
                  {statusAtual === 'dominado' && (
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-current text-amber-400" /> Dominado
                    </span>
                  )}
                  {statusAtual === 'revisar' && (
                    <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-xs font-bold flex items-center gap-1">
                      <RotateCcw className="w-3.5 h-3.5" /> Precisa Revisar
                    </span>
                  )}
                  {statusAtual === 'nao_visto' && (
                    <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium">
                      Não Visto
                    </span>
                  )}
                </div>
              </div>

              {/* Título do Problema */}
              <div>
                <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                  {problemaAtual.titulo}
                </h2>
              </div>

              {/* Enunciado / Contexto Linguístico */}
              <div className="p-4 sm:p-5 rounded-xl bg-slate-900/90 border border-slate-800/90 text-slate-200 text-sm leading-relaxed whitespace-pre-line font-normal">
                {problemaAtual.enunciado}
              </div>

              {/* Box de Dados Linguísticos / Pares de Exemplo (se houver) */}
              {problemaAtual.dadosExemplo && problemaAtual.dadosExemplo.length > 0 && (
                <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-2">
                  <div className="flex items-center gap-2 text-indigo-300 font-bold text-xs uppercase tracking-wider">
                    <BookMarked className="w-4 h-4" />
                    <span>Dados & Pares de Exemplo Linguístico:</span>
                  </div>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-indigo-200">
                    {problemaAtual.dadosExemplo.map((d, i) => (
                      <li
                        key={i}
                        className="bg-slate-900/80 px-3 py-2 rounded-lg border border-indigo-500/20"
                      >
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* A Pergunta / Desafio */}
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/60 border-l-4 border-l-indigo-500 border-t border-r border-b border-slate-800">
                <div className="text-[11px] font-bold text-indigo-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>Questão / Pergunta:</span>
                </div>
                <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
                  {problemaAtual.pergunta}
                </p>
              </div>

              {/* Área de Rascunho do Aluno */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-slate-400 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <FileEdit className="w-3.5 h-3.5 text-slate-400" />
                    Rascunho / Sua hipótese antes de conferir:
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Exercite seu raciocínio antes de ver a resposta!
                  </span>
                </label>
                <textarea
                  value={rascunhoAluno}
                  onChange={(e) => setRascunhoAluno(e.target.value)}
                  placeholder="Escreva sua resposta e análise aqui..."
                  rows={3}
                  className="w-full bg-slate-900/80 border border-slate-700/80 rounded-xl p-3 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors resize-y"
                />
              </div>

              {/* Botão de Revelar Resposta */}
              <div className="pt-2">
                <button
                  onClick={() => setMostrarResposta(!mostrarResposta)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-lg ${
                    mostrarResposta
                      ? 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-indigo-600/30'
                  }`}
                >
                  {mostrarResposta ? (
                    <>
                      <EyeOff className="w-4 h-4" /> Ocultar Resposta e Explicação
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" /> Revelar Resposta & Explicação Passo a Passo
                    </>
                  )}
                </button>
              </div>

              {/* Resposta e Explicação Comentada */}
              {mostrarResposta && (
                <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  {/* Resposta Oficial */}
                  <div className="p-4 sm:p-5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold text-xs uppercase tracking-wider">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Resposta Correta:</span>
                    </div>
                    <p className="text-sm sm:text-base font-semibold text-emerald-100 leading-relaxed">
                      {problemaAtual.resposta}
                    </p>
                  </div>

                  {/* Explicação e Raciocínio Passo a Passo */}
                  <div className="p-4 sm:p-5 rounded-xl bg-slate-900 border border-indigo-500/30 space-y-2">
                    <div className="flex items-center gap-1.5 text-indigo-400 font-bold text-xs uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-amber-400" />
                      <span>Raciocínio Lógico-Linguístico Passo a Passo:</span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-200 leading-relaxed whitespace-pre-line">
                      {problemaAtual.explicacao}
                    </div>
                  </div>

                  {/* Barra de Ação de Domínio / Progresso */}
                  <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-xs font-semibold text-slate-300">
                      Como foi o seu desempenho nessa questão?
                    </span>
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        onClick={() => handleMarcarStatus('dominado')}
                        className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          statusAtual === 'dominado'
                            ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/30'
                            : 'bg-slate-800 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/30'
                        }`}
                      >
                        <Star className="w-3.5 h-3.5 fill-current text-amber-400" />
                        Dominado
                      </button>

                      <button
                        onClick={() => handleMarcarStatus('revisar')}
                        className={`flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                          statusAtual === 'revisar'
                            ? 'bg-rose-600 text-white shadow-md shadow-rose-600/30'
                            : 'bg-slate-800 hover:bg-rose-900/50 text-rose-300 border border-rose-500/30'
                        }`}
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        Revisar Depois
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Anotações Pessoais do Aluno */}
              <div className="pt-2 border-t border-slate-800/80">
                <details className="text-xs group">
                  <summary className="font-semibold text-slate-400 hover:text-slate-200 cursor-pointer flex items-center gap-1.5 select-none">
                    <FileEdit className="w-3.5 h-3.5" />
                    <span>Minhas anotações particulares sobre este problema</span>
                  </summary>
                  <div className="pt-2">
                    <textarea
                      defaultValue={progressoAtual?.notaPessoal || ''}
                      onBlur={(e) => salvarNotaProblema(problemaAtual.id, e.target.value)}
                      placeholder="Ex: Lembrar que xenismo mantém a grafia inglesa sem aportuguesamento..."
                      rows={2}
                      className="w-full bg-slate-900 border border-slate-800 rounded-xl p-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"
                    />
                    <span className="text-[10px] text-slate-400">
                      Salvo automaticamente no seu dispositivo.
                    </span>
                  </div>
                </details>
              </div>
            </div>

            {/* Barra Inferior com Atalhos para Próxima Questão */}
            <div className="flex items-center justify-between">
              <button
                onClick={handleAnterior}
                disabled={indiceAtual <= 0}
                className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-40"
              >
                ← Questão Anterior
              </button>

              <button
                onClick={handleProximo}
                disabled={indiceAtual >= problemasFiltrados.length - 1}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 disabled:opacity-40"
              >
                Próxima Questão →
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
