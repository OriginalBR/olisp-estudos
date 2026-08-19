import React, { useState, useEffect } from 'react';
import { useAppStore } from '../store/useAppStore';
import { PROBLEMAS_OLISP } from '../data/problemas';
import confetti from 'canvas-confetti';
import {
  Timer,
  Play,
  Flag,
  CheckCircle2,
  RotateCcw,
  BookOpen,
  Trophy,
  XCircle,
  Lightbulb,
  Sparkles
} from 'lucide-react';

export const ModoSimulado: React.FC = () => {
  const {
    simuladoAtivo,
    iniciarSimulado,
    salvarRespostaSimulado,
    toggleMarcadaSimulado,
    irParaQuestaoSimulado,
    proximaQuestaoSimulado,
    anteriorQuestaoSimulado,
    tickTempoSimulado,
    finalizarSimulado,
    cancelarSimulado,
    ultimoSimuladoFinalizado,
    setUltimoSimuladoFinalizado,
    setModoAtual
  } = useAppStore();

  // Configurações do simulado inicial
  const [qtdQuestoes, setQtdQuestoes] = useState<number>(10);
  const [tempoMinutos, setTempoMinutos] = useState<number>(40);
  const [mostrarConfirmacaoFinalizar, setMostrarConfirmacaoFinalizar] = useState(false);
  const [mostrarConfirmacaoCancelar, setMostrarConfirmacaoCancelar] = useState(false);

  // Hook do Cronômetro
  useEffect(() => {
    if (!simuladoAtivo?.emAndamento) return;
    const timer = setInterval(() => {
      tickTempoSimulado();
    }, 1000);
    return () => clearInterval(timer);
  }, [simuladoAtivo?.emAndamento, tickTempoSimulado]);

  // Efeito de confetes ao abrir relatório final
  useEffect(() => {
    if (ultimoSimuladoFinalizado && !simuladoAtivo) {
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#f59e0b', '#6366f1', '#10b981']
      });
    }
  }, [ultimoSimuladoFinalizado, simuladoAtivo]);

  // Formatação de Tempo (MM:SS)
  const formatarTempo = (segundos: number) => {
    const mins = Math.floor(segundos / 60);
    const segs = segundos % 60;
    return `${mins.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
  };

  // =========================================================================
  // 1. TELA DE SIMULADO EM ANDAMENTO
  // =========================================================================
  if (simuladoAtivo && simuladoAtivo.emAndamento) {
    const questaoAtual = simuladoAtivo.questoes[simuladoAtivo.indiceAtual];
    const respostaAtual = simuladoAtivo.respostas[questaoAtual.id] || '';
    const estaMarcada = !!simuladoAtivo.marcadas[questaoAtual.id];
    const totalQuestoes = simuladoAtivo.questoes.length;
    const tempoRestante = simuladoAtivo.tempoRestanteSegundos;
    const isTempoCritico = tempoRestante < 300; // menos de 5 minutos

    const totalRespondidas = Object.keys(simuladoAtivo.respostas).filter(
      (k) => (simuladoAtivo.respostas[k] || '').trim().length > 0
    ).length;

    return (
      <div className="max-w-4xl mx-auto space-y-5 pb-20 animate-in fade-in duration-200">
        {/* Barra Superior Fixa do Cronômetro */}
        <div className="glass-panel sticky top-16 z-30 p-3 sm:p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-3 shadow-lg">
          <div className="flex items-center gap-3">
            <div
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold transition-all ${
                isTempoCritico
                  ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                  : 'bg-slate-900 text-amber-400 border border-slate-800'
              }`}
            >
              <Timer className="w-4 h-4" />
              <span>{formatarTempo(tempoRestante)}</span>
            </div>

            <div className="text-xs text-slate-300 font-semibold hidden sm:block">
              Respondidas:{' '}
              <span className="text-indigo-400 font-bold">
                {totalRespondidas}/{totalQuestoes}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => toggleMarcadaSimulado(questaoAtual.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                estaMarcada
                  ? 'bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/30'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Flag className="w-3.5 h-3.5" />
              <span>{estaMarcada ? 'Revisar' : 'Marcar'}</span>
            </button>

            <button
              onClick={() => setMostrarConfirmacaoFinalizar(true)}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-md shadow-emerald-600/30"
            >
              Entregar Prova
            </button>

            <button
              onClick={() => setMostrarConfirmacaoCancelar(true)}
              className="p-1.5 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-slate-900 border border-slate-800 transition-colors"
              title="Cancelar simulado"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Grade de Navegação das Questões */}
        <div className="glass-card p-3 rounded-2xl border border-slate-800">
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              Navegação da Prova:
            </span>
            <span className="text-[11px] text-slate-400">
              Questão {simuladoAtivo.indiceAtual + 1} de {totalQuestoes}
            </span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {simuladoAtivo.questoes.map((q, idx) => {
              const resp = (simuladoAtivo.respostas[q.id] || '').trim();
              const foiRespondida = resp.length > 0;
              const marcada = !!simuladoAtivo.marcadas[q.id];
              const isAtiva = idx === simuladoAtivo.indiceAtual;

              return (
                <button
                  key={q.id}
                  onClick={() => irParaQuestaoSimulado(idx)}
                  className={`w-8 h-8 rounded-lg text-xs font-bold transition-all relative flex items-center justify-center ${
                    isAtiva
                      ? 'bg-indigo-600 text-white ring-2 ring-indigo-400 scale-105'
                      : foiRespondida
                      ? 'bg-slate-800 text-indigo-300 border border-indigo-500/30'
                      : 'bg-slate-900 text-slate-400 border border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {idx + 1}
                  {marcada && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-amber-400 ring-1 ring-slate-950" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Card da Questão do Simulado */}
        <div className="glass-card p-5 sm:p-7 rounded-2xl border border-slate-800 space-y-6 shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 text-xs font-bold">
                Vol. {questaoAtual.bimestre}
              </span>
              <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-300 text-xs font-semibold">
                {questaoAtual.tema}
              </span>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              Questão {simuladoAtivo.indiceAtual + 1}
            </span>
          </div>

          <h3 className="text-lg sm:text-xl font-extrabold text-white">
            {questaoAtual.titulo}
          </h3>

          {/* Enunciado */}
          <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-200 text-sm leading-relaxed whitespace-pre-line">
            {questaoAtual.enunciado}
          </div>

          {/* Dados de Exemplo se existirem */}
          {questaoAtual.dadosExemplo && questaoAtual.dadosExemplo.length > 0 && (
            <div className="p-3.5 rounded-xl bg-indigo-950/40 border border-indigo-500/30 space-y-1.5">
              <div className="text-[11px] font-bold text-indigo-300 uppercase tracking-wider">
                Exemplos de Dados Linguísticos:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs font-mono text-indigo-200">
                {questaoAtual.dadosExemplo.map((ex, i) => (
                  <div key={i} className="bg-slate-900/70 p-2 rounded border border-indigo-500/20">
                    {ex}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Pergunta */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/60 border-l-4 border-l-indigo-500 border-t border-r border-b border-slate-800">
            <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-wider mb-1">
              Pergunta / Resolução:
            </div>
            <p className="text-sm sm:text-base font-bold text-white leading-relaxed">
              {questaoAtual.pergunta}
            </p>
          </div>

          {/* Área de Resposta do Aluno */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">
              Sua Resposta e Justificativa Teórica:
            </label>
            <textarea
              value={respostaAtual}
              onChange={(e) => salvarRespostaSimulado(questaoAtual.id, e.target.value)}
              placeholder="Digite aqui a sua resposta completa com o raciocínio..."
              rows={4}
              className="w-full bg-slate-900 border border-slate-700/80 rounded-xl p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

          {/* Botões de Navegação */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800">
            <button
              onClick={anteriorQuestaoSimulado}
              disabled={simuladoAtivo.indiceAtual === 0}
              className="px-4 py-2 rounded-xl glass-card text-xs font-semibold text-slate-300 hover:text-white disabled:opacity-30"
            >
              ← Questão Anterior
            </button>

            {simuladoAtivo.indiceAtual === totalQuestoes - 1 ? (
              <button
                onClick={() => setMostrarConfirmacaoFinalizar(true)}
                className="px-5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30"
              >
                Concluir Simulado 🎉
              </button>
            ) : (
              <button
                onClick={proximaQuestaoSimulado}
                className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30"
              >
                Próxima Questão →
              </button>
            )}
          </div>
        </div>

        {/* Modal de Confirmação de Entrega */}
        {mostrarConfirmacaoFinalizar && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="glass-card bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full space-y-4 shadow-2xl">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Deseja entregar o simulado?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você respondeu{' '}
                <strong className="text-white">
                  {totalRespondidas} de {totalQuestoes}
                </strong>{' '}
                questões. O cronômetro será finalizado e você verá o relatório completo com nota e
                gabarito comentado.
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setMostrarConfirmacaoFinalizar(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Continuar Fazendo
                </button>
                <button
                  onClick={() => {
                    setMostrarConfirmacaoFinalizar(false);
                    finalizarSimulado();
                  }}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md shadow-emerald-600/30"
                >
                  Confirmar Entrega
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal de Confirmação de Cancelamento */}
        {mostrarConfirmacaoCancelar && (
          <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="glass-card bg-slate-900 border border-slate-700 p-6 rounded-2xl max-w-md w-full space-y-4 shadow-2xl">
              <h3 className="text-lg font-extrabold text-white flex items-center gap-2 text-rose-400">
                <XCircle className="w-5 h-5" />
                Cancelar simulado?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                O progresso deste simulado em andamento será descartado e você retornará ao início.
              </p>
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => setMostrarConfirmacaoCancelar(false)}
                  className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white"
                >
                  Voltar à Prova
                </button>
                <button
                  onClick={() => {
                    setMostrarConfirmacaoCancelar(false);
                    cancelarSimulado();
                  }}
                  className="px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold"
                >
                  Sim, Cancelar
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
  if (ultimoSimuladoFinalizado) {
    const sim = ultimoSimuladoFinalizado;
    const pctAcertos = Math.round((sim.acertos / sim.totalQuestoes) * 100);

    return (
      <div className="max-w-4xl mx-auto space-y-6 pb-20 animate-in fade-in duration-300">
        {/* Banner de Resultado */}
        <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 text-center space-y-4 bg-gradient-to-b from-indigo-950/40 to-slate-900">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center shadow-lg shadow-amber-500/20">
            <Trophy className="w-8 h-8 text-slate-950" />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-bold text-amber-400">
              Simulado Concluído com Sucesso!
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white">
              Relatório Diagnóstico da Prova
            </h2>
          </div>

          {/* Cards de Métricas */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto pt-2">
            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-emerald-400">{pctAcertos}%</div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">
                Aproveitamento
              </div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-white">
                {sim.acertos}/{sim.totalQuestoes}
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Acertos</div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-indigo-300">
                {Math.round(sim.tempoTotalSegundos / 60)} min
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Tempo Total</div>
            </div>

            <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-2xl font-black text-purple-300">
                {sim.tempoMedioPorQuestao}s
              </div>
              <div className="text-[11px] text-slate-400 uppercase font-semibold">Média/Questão</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => {
                setUltimoSimuladoFinalizado(null);
                iniciarSimulado(10, 40);
              }}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-1.5"
            >
              <RotateCcw className="w-4 h-4" /> Fazer Outro Simulado
            </button>

            <button
              onClick={() => setModoAtual('revisao')}
              className="px-5 py-2.5 rounded-xl glass-card hover:bg-slate-800 text-slate-200 font-semibold text-xs transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" /> Ir para Modo Revisão
            </button>
          </div>
        </div>

        {/* Desempenho por Tema Linguístico */}
        <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-800 space-y-3">
          <h3 className="font-bold text-sm text-white">Desempenho por Tema Linguístico</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {Object.entries(sim.desempenhoPorTema).map(([tema, dados]) => {
              const pctTema = Math.round((dados.acertos / dados.total) * 100);
              return (
                <div
                  key={tema}
                  className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 space-y-1.5"
                >
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-slate-300">{tema}</span>
                    <span
                      className={
                        pctTema >= 70
                          ? 'text-emerald-400 font-bold'
                          : pctTema >= 40
                          ? 'text-amber-400 font-bold'
                          : 'text-rose-400 font-bold'
                      }
                    >
                      {dados.acertos}/{dados.total} ({pctTema}%)
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${pctTema}%` }}
                      className={`h-full rounded-full ${
                        pctTema >= 70
                          ? 'bg-emerald-500'
                          : pctTema >= 40
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Gabarito Comentado Questão a Questão */}
        <div className="space-y-4">
          <h3 className="text-base font-extrabold text-white">
            Gabarito Comentado das Questões
          </h3>

          {sim.respostas.map((resp, i) => {
            const prob = PROBLEMAS_OLISP.find((p) => p.id === resp.problemaId);
            if (!prob) return null;

            return (
              <div
                key={prob.id}
                className="glass-card p-5 rounded-2xl border border-slate-800 space-y-4"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <h4 className="font-bold text-sm text-white">{prob.titulo}</h4>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-[10px] font-bold text-indigo-300">
                    Vol {prob.bimestre} • {prob.tema}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-normal whitespace-pre-line bg-slate-900/60 p-3 rounded-xl">
                  {prob.enunciado}
                </div>

                <div className="text-xs font-bold text-white bg-slate-900 p-3 rounded-xl border-l-4 border-l-indigo-500">
                  {prob.pergunta}
                </div>

                {resp.respostaAluno && (
                  <div className="text-xs p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300">
                    <span className="font-bold text-slate-400 block mb-1">
                      Sua resposta na prova:
                    </span>
                    {resp.respostaAluno}
                  </div>
                )}

                {/* Resposta Correta e Explicação */}
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-xs">
                    <span className="font-bold text-emerald-400 block mb-0.5">
                      ✓ Resposta Correta:
                    </span>
                    <p className="text-emerald-100">{prob.resposta}</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900 border border-indigo-500/20 text-xs text-slate-300 leading-relaxed whitespace-pre-line">
                    <span className="font-bold text-indigo-400 block mb-1 flex items-center gap-1">
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> Explicação Passo a Passo:
                    </span>
                    {prob.explicacao}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // =========================================================================
  // 3. TELA INICIAL DE CONFIGURAÇÃO DO SIMULADO
  // =========================================================================
  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16 animate-in fade-in duration-300">
      <div className="glass-card p-6 sm:p-8 rounded-3xl border border-indigo-500/30 space-y-6 shadow-xl">
        <div className="text-center space-y-2">
          <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Timer className="w-7 h-7 text-white" />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight">
            Simulado Cronometrado OLISP
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-lg mx-auto">
            Treine seu raciocínio lógico-linguístico em condições reais de prova com contagem regressiva e distribuição equilibrada entre os 3 bimestres.
          </p>
        </div>

        {/* Configurações */}
        <div className="space-y-4 pt-2">
          {/* Quantidade de Questões */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">
              Quantidade de Questões:
            </label>
            <div className="grid grid-cols-4 gap-2">
              {[5, 10, 15, 20].map((qtd) => (
                <button
                  key={qtd}
                  onClick={() => setQtdQuestoes(qtd)}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                    qtdQuestoes === qtd
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {qtd} Questões
                </button>
              ))}
            </div>
          </div>

          {/* Tempo Limite */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300">Tempo Limite:</label>
            <div className="grid grid-cols-4 gap-2">
              {[
                { min: 15, label: '15 min' },
                { min: 30, label: '30 min' },
                { min: 40, label: '40 min (Padrão)' },
                { min: 60, label: '60 min' }
              ].map((t) => (
                <button
                  key={t.min}
                  onClick={() => setTempoMinutos(t.min)}
                  className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                    tempoMinutos === t.min
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30 scale-105'
                      : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Card Informativo */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1.5">
          <div className="flex items-center gap-1.5 font-bold text-amber-400">
            <Sparkles className="w-4 h-4" />
            <span>Como funciona:</span>
          </div>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Sorteio balanceado de problemas dos Volumes 1, 2 e 3.</li>
            <li>Você pode marcar questões com a bandeira para revisar antes de entregar.</li>
            <li>Ao término do tempo, a prova é finalizada automaticamente.</li>
            <li>Você recebe um diagnóstico com análise de pontos fracos e fortes por tema.</li>
          </ul>
        </div>

        {/* Botão de Iniciar */}
        <button
          onClick={() => iniciarSimulado(qtdQuestoes, tempoMinutos)}
          className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-indigo-600 hover:from-amber-400 hover:to-indigo-500 text-slate-950 font-black text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-950/50"
        >
          <Play className="w-4 h-4 fill-current text-slate-950" />
          Iniciar Simulado Agora ({qtdQuestoes} questões em {tempoMinutos} min)
        </button>
      </div>
    </div>
  );
};
