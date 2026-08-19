import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Sparkles, X } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copiado, setCopiado] = useState(false);

  if (!isOpen) return null;

  const urlApp = window.location.href;
  const textoCompartilhamento = `🏛️ *Preparatório OLISP - Olimpíada de Linguística de SP*\n\nTreine os problemas dos 3 volumes didáticos (morfologia, sintaxe, variação linguística e literaturas) com gabarito passo a passo e simulados cronometrados:\n\n${urlApp}`;

  const handleCopiar = () => {
    navigator.clipboard.writeText(urlApp);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const handleWhatsApp = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(textoCompartilhamento)}`;
    window.open(url, '_blank');
  };

  const handleNativo = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'OLISP Treino & Revisão',
          text: 'Preparatório Intensivo para a Olimpíada de Linguística de São Paulo (OLISP)',
          url: urlApp
        });
      } catch (err) {
        // Ignora se o usuário cancelar
      }
    } else {
      handleCopiar();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div className="glass-card bg-slate-900 border border-slate-700 p-6 rounded-3xl max-w-md w-full space-y-5 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-1.5 pt-1">
          <div className="w-12 h-12 mx-auto rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/20">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-black text-white">Compartilhar com Colegas da OLISP</h3>
          <p className="text-xs text-slate-300">
            Envie este app direto para o grupo de estudos dos alunos classificados.
          </p>
        </div>

        {/* Prévia do Card */}
        <div className="p-3.5 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-1.5 text-left text-xs">
          <div className="flex items-center gap-1.5 text-indigo-400 font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OLISP - Treino & Revisão 1ª Série</span>
          </div>
          <p className="text-slate-300 text-[11px] leading-relaxed">
            Banco completo com problemas dos 3 bimestres, simulados de 40 min e explicações passo a passo.
          </p>
          <div className="text-[10px] text-slate-500 truncate font-mono pt-1">{urlApp}</div>
        </div>

        {/* Ações de Compartilhamento */}
        <div className="space-y-2">
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md shadow-emerald-600/20"
          >
            <MessageCircle className="w-4 h-4" />
            Compartilhar no WhatsApp
          </button>

          <div className="flex gap-2">
            <button
              onClick={handleCopiar}
              className="flex-1 py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5 border border-slate-700 transition-all"
            >
              {copiado ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">Link Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-slate-400" />
                  <span>Copiar Link</span>
                </>
              )}
            </button>

            {typeof navigator !== 'undefined' && 'share' in navigator && (
              <button
                onClick={handleNativo}
                className="py-2.5 px-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs flex items-center justify-center gap-1.5 transition-all"
              >
                <Share2 className="w-4 h-4" />
                <span>Mais</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
