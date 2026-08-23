import React from 'react';
import { useAppStore } from '../store/useAppStore';
import { ModoApp } from '../types';
import {
  BookOpen,
  Timer,
  BarChart3,
  Flame,
  Share2,
  Settings,
  Sparkles,
  LayoutDashboard,
  Zap
} from 'lucide-react';

interface NavbarProps {
  onOpenShare: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare, onOpenConfig }) => {
  const { modoAtual, setModoAtual, dataProva } = useAppStore();

  // Calcular contagem regressiva
  const calcularDiasRestantes = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const prova = new Date(dataProva + 'T00:00:00');
    const diff = prova.getTime() - hoje.getTime();
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return Math.max(0, dias);
  };

  const diasRestantes = calcularDiasRestantes();


  const navItems: { modo: ModoApp; label: string; icon: React.ReactNode; badge?: string }[] = [
    { modo: 'dashboard', label: 'Início', icon: <LayoutDashboard className="w-4 h-4" /> },
    { modo: 'estudo_rapido', label: 'Estudo Rápido', icon: <Zap className="w-4 h-4 text-amber-400" />, badge: 'Leitura' },
    { modo: 'revisao', label: 'Treino por Tema', icon: <BookOpen className="w-4 h-4" /> },
    { modo: 'simulado', label: 'Simulado (20Q)', icon: <Timer className="w-4 h-4 text-indigo-400" /> },
    { modo: 'ultimos_dias', label: 'Reta Final', icon: <Flame className="w-4 h-4 text-rose-400" /> },
    { modo: 'estatisticas', label: 'Estatísticas', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo e Nome */}
        <div
          onClick={() => setModoAtual('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-amber-500 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                OLISP
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Oficial
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              Treino & Resumos para a Prova
            </p>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden lg:flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800">
          {navItems.map((item) => {
            const isActive = modoAtual === item.modo;
            return (
              <button
                key={item.modo}
                onClick={() => setModoAtual(item.modo)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all relative ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span className="text-[9px] px-1 py-0.2 bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Badges de Contagem Regressiva e Ações */}
        <div className="flex items-center gap-2">
          {/* Badge Contagem Regressiva */}
          <div
            onClick={onOpenConfig}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold cursor-pointer hover:bg-amber-500/20 transition-colors"
            title="Clique para alterar a data da prova"
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>{diasRestantes === 0 ? 'Hoje!' : `${diasRestantes}d p/ prova`}</span>
          </div>

          {/* Botão Compartilhar */}
          <button
            onClick={onOpenShare}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="Compartilhar Progresso"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Botão Configurações */}
          <button
            onClick={onOpenConfig}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors"
            title="Configurações"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navegação Mobile / Telas menores */}
      <div className="lg:hidden flex items-center justify-around px-2 py-2 border-t border-slate-900 bg-slate-950/95 overflow-x-auto gap-1">
        {navItems.map((item) => {
          const isActive = modoAtual === item.modo;
          return (
            <button
              key={item.modo}
              onClick={() => setModoAtual(item.modo)}
              className={`flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-lg text-[10px] font-semibold shrink-0 transition-all ${
                isActive
                  ? 'text-indigo-400 bg-indigo-950/50'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};
