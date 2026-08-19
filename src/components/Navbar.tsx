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
  Calendar
} from 'lucide-react';
import { PROBLEMAS_OLISP } from '../data/problemas';

interface NavbarProps {
  onOpenShare: () => void;
  onOpenConfig: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenShare, onOpenConfig }) => {
  const { modoAtual, setModoAtual, dataProva, progresso } = useAppStore();

  // Calcular contagem regressiva
  const calcularDiasRestantes = () => {
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    const prova = new Date(dataProva + 'T00:00:00');
    const diff = prova.getTime() - hoje.getTime();
    const dias = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return dias;
  };

  const diasRestantes = calcularDiasRestantes();

  // Total dominados
  const totalDominados = Object.values(progresso).filter(
    (p) => p.status === 'dominado'
  ).length;

  const totalProblemas = PROBLEMAS_OLISP.length;
  const pctDominio = Math.round((totalDominados / totalProblemas) * 100);

  const navItems: { modo: ModoApp; label: string; icon: React.ReactNode }[] = [
    { modo: 'dashboard', label: 'Início', icon: <LayoutDashboard className="w-4 h-4" /> },
    { modo: 'revisao', label: 'Revisão', icon: <BookOpen className="w-4 h-4" /> },
    { modo: 'simulado', label: 'Simulado', icon: <Timer className="w-4 h-4" /> },
    { modo: 'ultimos_dias', label: 'Últimos Dias', icon: <Flame className="w-4 h-4 text-amber-400" /> },
    { modo: 'estatisticas', label: 'Progresso', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-16 flex items-center justify-between gap-2">
        {/* Logo e Nome */}
        <div
          onClick={() => setModoAtual('dashboard')}
          className="flex items-center gap-2.5 cursor-pointer group select-none flex-shrink-0"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-extrabold text-base tracking-tight text-white group-hover:text-indigo-300 transition-colors">
                OLISP
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Treino
              </span>
            </div>
            <p className="text-[10px] text-slate-400 font-medium hidden sm:block">
              Olimpíada de Linguística de SP
            </p>
          </div>
        </div>

        {/* Navegação Desktop */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-slate-800">
          {navItems.map((item) => {
            const isActive = modoAtual === item.modo;
            return (
              <button
                key={item.modo}
                onClick={() => setModoAtual(item.modo)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Badges de Contagem Regressiva e Ações */}
        <div className="flex items-center gap-2 flex-shrink-0">
          {/* Chip de Contagem Regressiva */}
          <button
            onClick={onOpenConfig}
            title="Configurar data da prova"
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-all text-xs font-semibold"
          >
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
            <span>
              {diasRestantes > 0
                ? `${diasRestantes} ${diasRestantes === 1 ? 'dia' : 'dias'}`
                : diasRestantes === 0
                ? 'Hoje!'
                : 'Prova realizada'}
            </span>
          </button>

          {/* Badge de Domínio */}
          <div
            title={`${totalDominados} de ${totalProblemas} problemas dominados`}
            className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold"
          >
            <span className="text-amber-400 font-bold">★</span>
            <span>{pctDominio}%</span>
          </div>

          {/* Botão Compartilhar */}
          <button
            onClick={onOpenShare}
            title="Compartilhar app com colegas da OLISP"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Botão Configurações */}
          <button
            onClick={onOpenConfig}
            title="Configurações e data da prova"
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navegação Mobile (Barra Inferior Fixa ou Secundária) */}
      <div className="md:hidden flex items-center justify-around border-t border-slate-800 bg-slate-950/95 py-2 px-2">
        {navItems.map((item) => {
          const isActive = modoAtual === item.modo;
          return (
            <button
              key={item.modo}
              onClick={() => setModoAtual(item.modo)}
              className={`flex flex-col items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                isActive
                  ? 'text-indigo-400 font-semibold bg-indigo-500/10'
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
