import React, { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP } from '../data/problemas';
import { Alternativa, Problema } from '../types';
import confetti from 'canvas-confetti';
import {
  Timer,
  Play,
  Flag,
  CheckCircle2,
  XCircle,
  Trophy,
  RotateCcw,
  BookOpen,
  ArrowRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Check,
  AlertTriangle,
  Award,
  Zap,
  Info
} from 'lucide-react';

export const ModoSimulado: React.FC = () => {
  const {
    simuladoAtivo,
    iniciarSimulado,
    iniciarSimuladoOficial,
    salvarRespostaSimulado,
    toggleMarcadaSimulado,
    irParaQuestaoSimulado,
    proximaQuestaoSimulado,
    anteriorQuestaoSimulado,
    tickTempoSimulado,
    finalizarSimulado,
    cancelarSimulado,
    ultimoSimuladoFinalizado,
    setModoAtual,
    setTemaFiltroRevisao
  } = useAppStore();


  const [mostrarConfirmacaoFinalizar, setMostrarConfirmacaoFinalizar] = useState(false);
  const [mostrarConfirmacaoCancelar, setMostrarConfirmacaoCancelar] = useState(false);
  const [questaoRevisaoExpandida, setQuestaoRevisaoExpandida] = useState<string | null>(null);

  // Timer do Simulado
  useEffect(() => {
    if (!simuladoAtivo?.emAndamento) return;
    const timer = setInterval(() => {
      tickTempoSimulado();
    }, 1000);
    return () => clearInterval(timer);
  }, [simuladoAtivo?.emAndamento, tickTempoSimulado]);

  // Efeito de confetes ao finalizar simulado
  useEffect(() => {
    if (ultimoSimuladoFinalizado && !simuladoAtivo) {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#10b981', '#6366f1', '#f59e0b']
      });
    }
  }, [ultimoSimuladoFinalizado, simuladoAtivo]);

  const formatarTempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  // =========================================================================
  // 1. TELA DE SIMULADO EM ANDAMENTO (FORMATO OFICIAL DA PROVA)
  // =========================================================================
  if (simuladoAtivo && simuladoAtivo.emAndamento) {
    const questaoAtual = simuladoAtivo.questoes[simuladoAtivo.indiceAtual];
    const respostaSelecionada = simuladoAtivo.respostas[questaoAtual.id] || '';
    const estaMarcada = !!simuladoAtivo.marcadas[questaoAtual.id];
    const totalQuestoes = simuladoAtivo.questoes.length;
    const tempoRestante = simuladoAtivo.tempoRestanteSegundos;
    const isTempoCritico = tempoRestante < 300; // < 5 min

    const totalRespondidas = Object.keys(simuladoAtivo.respostas).filter(
      (k) => (simuladoAtivo.respostas[k] || '').trim().length > 0
    ).length;

    return (
      <div className="max-w-4xl mx-auto space-y-5 pb-20">
        {/* Barra Superior Fixa com Cronômetro */}
        <div className="bg-slate-900/95 backdrop-blur-md sticky top-16 z-30 p-3.5 sm:p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-2xl">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold transition-all ${
                isTempoCritico
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                  : 'bg-slate-950 text-amber-400 border border-slate-800'
              }`}
            >
              <Timer className="w-4 h-4 text-amber-400" />
              <span>{formatarTempo(tempoRestante)}</span>
            </div>

            <div className="text-xs text-slate-300 font-semibold hidden sm:block">
              {simuladoAtivo.isProvaOficial20 ? (
                <span className="text-indigo-400 font-bold">Simulado Prova Completa (20 Questões)</span>
              ) : (
                <span>Treino Simulado</span>
              )}
            </div>
          </div>

          {/* Progresso de Respostas */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400">Respondidas:</span>
            <span className="text-white font-bold bg-slate-950 px-2.5 py-1 rounded-lg border border-slate-800">
              {totalRespondidas} / {totalQuestoes}
            </span>
          </div>

          {/* Botões de Ação Topo */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleMarcadaSimulado(questaoAtual.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                estaMarcada
                  ? 'bg-amber-500/20 border border-amber-500/50 text-amber-300'
                  : 'bg-slate-950 border border-slate-800 text-slate-400 hover:text-slate-200'
              }`}
              title="Marcar questão para revisar antes de entregar"
            >
              <Flag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{estaMarcada ? 'Marcada' : 'Marcar'}</span>
            </button>

            <button
              onClick={() => setMostrarConfirmacaoFinalizar(true)}
              className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold shadow-md shadow-emerald-600/30 transition-all"
            >
              Entregar Prova
            </button>
          </div>
        </div>

        {/* Grade de Navegação das Questões */}
        <div className="bg-slate-900/80 border border-slate-800 p-3 sm:p-4 rounded-2xl space-y-2">
          <div className="flex items-center justify-between text-[11px] text-slate-400 px-1">
            <span>Navegador de Questões:</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" /> Respondida
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Marcada
              </span>
              <span className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700" /> Em branco
              </span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 sm:gap-2">
            {simuladoAtivo.questoes.map((q, idx) => {
              const isAtual = idx === simuladoAtivo.indiceAtual;
              const foiRespondida = !!(simuladoAtivo.respostas[q.id] || '').trim();
              const marcada = !!simuladoAtivo.marcadas[q.id];

              let bgClass = 'bg-slate-950 text-slate-400 border-slate-800';

              if (isAtual) {
                bgClass = 'bg-indigo-600 text-white border-indigo-400 ring-2 ring-indigo-500/40 font-bold';
              } else if (foiRespondida) {
                bgClass = 'bg-indigo-950/80 text-indigo-300 border-indigo-500/40 font-semibold';
              }

              return (
                <button
                  key={q.id}
                  onClick={() => irParaQuestaoSimulado(idx)}
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border text-xs flex items-center justify-center transition-all relative ${bgClass}`}
                >
                  {idx + 1}
                  {marcada && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-amber-400 rounded-full ring-2 ring-slate-900" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Cartão da Questão Atual */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-6">
          {/* Header da Questão */}
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 bg-indigo-950 border border-indigo-500/40 text-indigo-300 text-xs font-bold rounded-lg">
                Questão {simuladoAtivo.indiceAtual + 1} de {totalQuestoes}
              </span>
              <span className="text-xs font-medium text-slate-400">
                {questaoAtual.tema}
              </span>
            </div>

            <span className="text-xs text-slate-500">
              {questaoAtual.livro}
            </span>
          </div>

          {/* Título e Enunciado */}
          <div className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-white leading-snug">
              {questaoAtual.titulo}
            </h2>

            <div className="text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line bg-slate-950/40 p-4 rounded-xl border border-slate-800/60 font-sans">
              {questaoAtual.enunciado}
            </div>
          </div>

          {/* Dados e Relações Fornecidas */}
          {questaoAtual.dadosExemplo && questaoAtual.dadosExemplo.length > 0 && (
            <div className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-2">
              <div className="text-xs font-bold text-indigo-400 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="w-3.5 h-3.5" /> Dados Fornecidos no Enunciado:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-slate-300">
                {questaoAtual.dadosExemplo.map((dado: string, idx: number) => (
                  <div key={idx} className="bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
                    • {dado}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comando da Pergunta */}
          <div className="bg-indigo-950/20 border border-indigo-500/30 p-4 rounded-xl space-y-1">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
              Comando da Questão:
            </span>
            <p className="text-sm sm:text-base font-semibold text-white">
              {questaoAtual.pergunta}
            </p>
          </div>

          {/* Alternativas de Múltipla Escolha (Modo Simulado) */}
          <div className="space-y-3 pt-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Selecione a sua Resposta:
            </span>

            <div className="space-y-2.5">
              {questaoAtual.alternativas.map((alt: Alternativa) => {
                const isEscolhida = respostaSelecionada === alt.letra;


                return (
                  <button
                    key={alt.letra}
                    onClick={() => salvarRespostaSimulado(questaoAtual.id, alt.letra)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                      isEscolhida
                        ? 'bg-indigo-950/80 border-indigo-500 text-white ring-2 ring-indigo-500/30 shadow-md'
                        : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-slate-900'
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 transition-colors ${
                        isEscolhida
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      {alt.letra}
                    </div>

                    <span className="text-sm leading-relaxed pt-0.5">
                      {alt.texto}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Controles de Navegação da Questão */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <button
              onClick={anteriorQuestaoSimulado}
              disabled={simuladoAtivo.indiceAtual === 0}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <button
              onClick={() => setMostrarConfirmacaoCancelar(true)}
              className="text-xs text-rose-400 hover:text-rose-300 hover:underline"
            >
              Abandonar Simulado
            </button>

            {simuladoAtivo.indiceAtual < totalQuestoes - 1 ? (
              <button
                onClick={proximaQuestaoSimulado}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/30 transition-all"
              >
                <span>Próxima</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={() => setMostrarConfirmacaoFinalizar(true)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/30 transition-all"
              >
                <Check className="w-4 h-4" />
                <span>Revisar e Entregar</span>
              </button>
            )}
          </div>
        </div>

        {/* Modal de Confirmação de Entrega */}
        {mostrarConfirmacaoFinalizar && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-2xl p-6 space-y-4 shadow-2xl animate-in zoom-in-95">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-white">Finalizar Simulado?</h3>
                <p className="text-xs text-slate-400">
                  Você respondeu <strong>{totalRespondidas}</strong> de <strong>{totalQuestoes}</strong> questões.
                  {totalRespondidas < totalQuestoes && (
                    <span className="text-amber-400 block mt-1">
                      ⚠️ Atenção: você ainda possui {totalQuestoes - totalRespondidas} questões em branco!
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setMostrarConfirmacaoFinalizar(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  Voltar à Prova
                </button>
                <button
                  onClick={() => {
                    setMostrarConfirmacaoFinalizar(false);
                    finalizarSimulado();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                >
                  Sim, Entregar Prova
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Cancelamento */}
        {mostrarConfirmacaoCancelar && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-slate-800 max-w-md w-full rounded-2xl p-6 space-y-4 shadow-2xl">
              <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 mx-auto">
                <AlertTriangle className="w-6 h-6" />
              </div>

              <div className="text-center space-y-1">
                <h3 className="text-lg font-bold text-white">Abandonar Simulado?</h3>
                <p className="text-xs text-slate-400">
                  Todo o progresso deste simulado em andamento será descartado.
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  onClick={() => setMostrarConfirmacaoCancelar(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 text-slate-300"
                >
                  Continuar Simulado
                </button>
                <button
                  onClick={() => {
                    setMostrarConfirmacaoCancelar(false);
                    cancelarSimulado();
                  }}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-500 text-white"
                >
                  Sim, Abandonar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // =========================================================================
  // 2. RELATÓRIO DO ÚLTIMO SIMULADO FINALIZADO
  // =========================================================================
  if (ultimoSimuladoFinalizado && !simuladoAtivo) {
    const sim = ultimoSimuladoFinalizado;
    const taxaAcerto = Math.round((sim.acertos / Math.max(1, sim.totalQuestoes)) * 100);

    const formatarMinutosSegundos = (segs: number) => {
      const m = Math.floor(segs / 60);
      const s = segs % 60;
      return `${m}m ${s}s`;
    };

    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-16 animate-in fade-in duration-300">
        {/* Banner de Resultado */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl text-center space-y-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            Resultado do Simulado Oficial
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
              Nota: <span className="text-emerald-400">{sim.acertos}</span> de {sim.totalQuestoes}
            </h1>
            <p className="text-slate-300 text-sm">
              Você acertou <strong>{taxaAcerto}%</strong> da prova.
              {taxaAcerto >= 80 ? (
                <span className="text-emerald-400 font-bold block mt-0.5">
                  🏆 Excelente! Desempenho no padrão de medalha da OLISP!
                </span>
              ) : taxaAcerto >= 60 ? (
                <span className="text-amber-300 font-semibold block mt-0.5">
                  👍 Bom resultado! Revise os temas abaixo para subir a nota nesses últimos 2 dias.
                </span>
              ) : (
                <span className="text-rose-400 font-semibold block mt-0.5">
                  ⚠️ Foco total na leitura rápida dos temas abaixo para fixar os conceitos antes da prova!
                </span>
              )}
            </p>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto pt-2 text-xs">
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Acertos</span>
              <span className="text-lg font-bold text-emerald-400">
                {sim.acertos}/{sim.totalQuestoes}
              </span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Tempo Total</span>
              <span className="text-lg font-bold text-amber-400">
                {formatarMinutosSegundos(sim.tempoTotalSegundos)}
              </span>
            </div>
            <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl">
              <span className="text-slate-400 block mb-1">Média/Questão</span>
              <span className="text-lg font-bold text-indigo-400">
                {sim.tempoMedioPorQuestao}s
              </span>
            </div>
          </div>

          {/* Ações Rápidas de Estudo */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setModoAtual('estudo_rapido')}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition-all"
            >
              <BookOpen className="w-4 h-4" />
              <span>Revisar no Estudo Rápido</span>
            </button>

            <button
              onClick={iniciarSimuladoOficial}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold border border-slate-700 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Novo Simulado (20 Questões)</span>
            </button>
          </div>
        </div>

        {/* Desempenho por Tema */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <Award className="w-4 h-4 text-indigo-400" />
            Desempenho por Tema no Simulado
          </h3>

          <div className="space-y-3">
            {Object.entries(sim.desempenhoPorTema).map(([tema, dados]) => {
              const perc = Math.round((dados.acertos / Math.max(1, dados.total)) * 100);
              const precisaAtencao = perc < 70;

              return (
                <div
                  key={tema}
                  className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-white">{tema}</span>
                      <span
                        className={`font-semibold ${
                          perc >= 80 ? 'text-emerald-400' : perc >= 50 ? 'text-amber-400' : 'text-rose-400'
                        }`}
                      >
                        {dados.acertos} de {dados.total} ({perc}%)
                      </span>
                    </div>

                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          perc >= 80 ? 'bg-emerald-500' : perc >= 50 ? 'bg-amber-500' : 'bg-rose-500'
                        }`}
                        style={{ width: `${perc}%` }}
                      />
                    </div>
                  </div>

                  {precisaAtencao && (
                    <button
                      onClick={() => {
                        setTemaFiltroRevisao(tema);
                        setModoAtual('revisao');
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-indigo-400 hover:text-indigo-300 hover:underline shrink-0"
                    >
                      <span>Treinar este tema</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Revisão Questão a Questão */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 space-y-4">
          <h3 className="text-base font-bold text-white flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            Gabarito e Revisão Questão por Questão
          </h3>

          <div className="space-y-3">
            {sim.respostas.map((item, idx) => {
              const problemaOrig = PROBLEMAS_OLISP.find(
                (p: Problema) => p.id === item.problemaId
              );

              const isExpandido = questaoRevisaoExpandida === item.problemaId;

              if (!problemaOrig) return null;

              return (
                <div
                  key={item.problemaId}
                  className={`border rounded-xl transition-all overflow-hidden ${
                    item.acertou
                      ? 'bg-slate-950/60 border-emerald-500/30'
                      : 'bg-slate-950/60 border-rose-500/30'
                  }`}
                >
                  <div
                    onClick={() =>
                      setQuestaoRevisaoExpandida(isExpandido ? null : item.problemaId)
                    }
                    className="p-4 cursor-pointer flex items-center justify-between gap-3 select-none"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs shrink-0 ${
                          item.acertou ? 'bg-emerald-500/20 text-emerald-400' : 'bg-rose-500/20 text-rose-400'
                        }`}
                      >
                        {item.acertou ? <CheckCircle2 className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                      </div>

                      <div className="text-xs">
                        <span className="font-bold text-white block">
                          {idx + 1}. {problemaOrig.titulo}
                        </span>
                        <span className="text-slate-400 text-[11px]">
                          Sua resposta: <strong>{item.respostaAluno || 'Em branco'}</strong> | Gabarito: <strong>{problemaOrig.respostaCorreta}</strong>
                        </span>
                      </div>
                    </div>

                    <span className="text-xs text-indigo-400 font-semibold hover:underline">
                      {isExpandido ? 'Ocultar' : 'Ver Explicação'}
                    </span>
                  </div>

                  {isExpandido && (
                    <div className="p-4 pt-0 border-t border-slate-800/60 space-y-3 text-xs bg-slate-950">
                      <div className="text-slate-300 leading-relaxed font-sans pt-2">
                        {problemaOrig.pergunta}
                      </div>

                      {/* Alternativas */}
                      <div className="space-y-1.5">
                        {problemaOrig.alternativas.map((alt: Alternativa) => {
                          const isCorreta = alt.letra === problemaOrig.respostaCorreta;
                          const isAluno = alt.letra === item.respostaAluno;


                          let cls = 'bg-slate-900 text-slate-400 border-slate-800';
                          if (isCorreta) {
                            cls = 'bg-emerald-950/60 text-emerald-200 border-emerald-500/40 font-semibold';
                          } else if (isAluno && !isCorreta) {
                            cls = 'bg-rose-950/60 text-rose-200 border-rose-500/40';
                          }

                          return (
                            <div key={alt.letra} className={`p-2.5 rounded-lg border text-xs flex items-start gap-2 ${cls}`}>
                              <span className="font-bold shrink-0">{alt.letra})</span>
                              <span>{alt.texto}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Explicação */}
                      <div className="bg-indigo-950/30 border border-indigo-500/20 p-3 rounded-lg text-slate-300 whitespace-pre-line leading-relaxed">
                        <span className="text-indigo-400 font-bold block mb-1">
                          Explicação Detalhada:
                        </span>
                        {problemaOrig.explicacao}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. TELA INICIAL DO MODO SIMULADO (CONFIGURAÇÃO E INÍCIO)
  // =========================================================================
  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/40 to-slate-900 border border-indigo-500/20 rounded-2xl p-6 sm:p-8 shadow-xl space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/30 rounded-full text-indigo-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          Formato Idêntico à Prova Oficial da OLISP
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2">
          <Trophy className="w-7 h-7 text-indigo-400" />
          Simulado Oficial & Treino com Cronômetro
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          Todas as questões em múltipla escolha (A, B, C, D, E), com contagem de tempo e cálculo da nota real para o dia da prova.
        </p>
      </div>

      {/* Card Destaque: SIMULADO OFICIAL (20 QUESTÕES) */}
      <div className="bg-gradient-to-br from-indigo-950/80 via-slate-900 to-slate-900 border-2 border-indigo-500/50 rounded-2xl p-6 sm:p-7 shadow-2xl space-y-4 ring-1 ring-indigo-500/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 bg-indigo-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
          Recomendado para Hoje
        </div>

        <div className="space-y-1">
          <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-wider">
            <Zap className="w-4 h-4 text-amber-400" /> Prova Completa 100% Real
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-white">
            Simulado Oficial OLISP (20 Questões)
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            Exatamente <strong>20 questões</strong> cobrindo os 3 bimestres e todos os eixos temáticos com <strong>60 minutos</strong> de prova.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <span className="text-slate-400 block">Total:</span>
            <span className="font-bold text-white">20 Questões</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <span className="text-slate-400 block">Tempo:</span>
            <span className="font-bold text-amber-400">60 Minutos</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <span className="text-slate-400 block">Formato:</span>
            <span className="font-bold text-emerald-400">Alternativas A-E</span>
          </div>
          <div className="bg-slate-950/80 border border-slate-800 p-2.5 rounded-xl">
            <span className="text-slate-400 block">Diagnóstico:</span>
            <span className="font-bold text-indigo-300">Nota + Temas Fracos</span>
          </div>
        </div>

        <button
          onClick={iniciarSimuladoOficial}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-sm font-bold shadow-xl shadow-indigo-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          <Play className="w-4 h-4 fill-white" />
          <span>Iniciar Simulado Completo de 20 Questões</span>
        </button>
      </div>

      {/* Opções Secundárias de Treino Rápido */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Treino Médio */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">
              Treino Intermediário (10 Questões)
            </h3>
            <p className="text-xs text-slate-400">
              Ideal para quem quer um treino rápido de 30 minutos cobrindo os conceitos principais.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>⏱️ 30 minutos</span>
            <button
              onClick={() => iniciarSimulado(10, 30)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-colors"
            >
              Iniciar 10Q
            </button>
          </div>
        </div>

        {/* Mini-Simulado */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-3 flex flex-col justify-between">
          <div className="space-y-1">
            <h3 className="font-bold text-white text-base">
              Mini-Simulado Expresso (5 Questões)
            </h3>
            <p className="text-xs text-slate-400">
              Teste rápido de 15 minutos para quem tem pouco tempo livre agora.
            </p>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-xs text-slate-400">
            <span>⏱️ 15 minutos</span>
            <button
              onClick={() => iniciarSimulado(5, 15)}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-semibold transition-colors"
            >
              Iniciar 5Q
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
