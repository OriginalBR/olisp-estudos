import React, { useState } from 'react';
import { useAppStore } from '../store/useAppStore';
import { Settings, Calendar, RotateCcw, AlertTriangle, X, Check } from 'lucide-react';

interface ConfigModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConfigModal: React.FC<ConfigModalProps> = ({ isOpen, onClose }) => {
  const { dataProva, setDataProva, resetarProgresso } = useAppStore();
  const [dataTemp, setDataTemp] = useState(dataProva);
  const [mostrarConfirmacaoReset, setMostrarConfirmacaoReset] = useState(false);
  const [sucessoSalvo, setSucessoSalvo] = useState(false);

  if (!isOpen) return null;

  const handleSalvarData = () => {
    setDataProva(dataTemp);
    setSucessoSalvo(true);
    setTimeout(() => {
      setSucessoSalvo(false);
      onClose();
    }, 1000);
  };

  const handleResetar = () => {
    resetarProgresso();
    setMostrarConfirmacaoReset(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="glass-card bg-slate-900 border border-slate-700 p-6 rounded-3xl max-w-md w-full space-y-6 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Configurações do App</h3>
            <p className="text-xs text-slate-400">Ajuste de prazos e preferências locais</p>
          </div>
        </div>

        {/* Data da Prova */}
        <div className="space-y-2">
          <label className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            Data Prevista da Prova da OLISP:
          </label>
          <input
            type="date"
            value={dataTemp}
            onChange={(e) => setDataTemp(e.target.value)}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-indigo-500"
          />
          <p className="text-[11px] text-slate-400">
            Utilizada para a contagem regressiva na tela inicial e no cabeçalho.
          </p>

          <button
            onClick={handleSalvarData}
            className="w-full py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors mt-2"
          >
            {sucessoSalvo ? (
              <>
                <Check className="w-4 h-4 text-emerald-300" />
                <span>Salvo com sucesso!</span>
              </>
            ) : (
              <span>Salvar Nova Data</span>
            )}
          </button>
        </div>

        {/* Resetar Progresso */}
        <div className="pt-3 border-t border-slate-800 space-y-2">
          <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
            <RotateCcw className="w-3.5 h-3.5 text-rose-400" />
            Reiniciar Treinamento
          </div>
          <p className="text-[11px] text-slate-400">
            Limpa todas as respostas de simulados e status de questões marcadas neste dispositivo.
          </p>

          {mostrarConfirmacaoReset ? (
            <div className="p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/40 space-y-3">
              <div className="flex items-center gap-2 text-rose-300 text-xs font-bold">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>Tem certeza que deseja zerar todo o progresso?</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setMostrarConfirmacaoReset(false)}
                  className="flex-1 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-700"
                >
                  Cancelar
                </button>
                <button
                  onClick={handleResetar}
                  className="flex-1 py-1.5 rounded-lg bg-rose-600 text-white text-xs font-bold hover:bg-rose-500"
                >
                  Sim, Zerar Tudo
                </button>
              </div>
            </div>
          ) : (
            <button
              onClick={() => setMostrarConfirmacaoReset(true)}
              className="py-2 px-3 rounded-xl bg-slate-800/80 hover:bg-rose-950/40 text-rose-300 border border-slate-700 hover:border-rose-500/40 text-xs font-semibold transition-colors"
            >
              Zerar Todo o Histórico
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
