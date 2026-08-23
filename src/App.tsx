import React, { useState } from 'react';
import { useAppStore } from './store/useAppStore';
import { Navbar } from './components/Navbar';
import { Dashboard } from './components/Dashboard';
import { ModoEstudoRapido } from './components/ModoEstudoRapido';
import { ModoRevisao } from './components/ModoRevisao';
import { ModoSimulado } from './components/ModoSimulado';
import { Estatisticas } from './components/Estatisticas';
import { ModoUltimosDias } from './components/ModoUltimosDias';
import { ShareModal } from './components/ShareModal';
import { ConfigModal } from './components/ConfigModal';

export const App: React.FC = () => {
  const { modoAtual } = useAppStore();
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-indigo-600 selection:text-white font-sans antialiased">
      {/* Barra de Navegação Superior */}
      <Navbar
        onOpenShare={() => setIsShareOpen(true)}
        onOpenConfig={() => setIsConfigOpen(true)}
      />

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6 pt-5 sm:pt-8">
        {modoAtual === 'dashboard' && (
          <Dashboard
            onOpenConfig={() => setIsConfigOpen(true)}
            onOpenShare={() => setIsShareOpen(true)}
          />
        )}

        {modoAtual === 'estudo_rapido' && <ModoEstudoRapido />}

        {modoAtual === 'revisao' && <ModoRevisao />}

        {modoAtual === 'simulado' && <ModoSimulado />}

        {modoAtual === 'estatisticas' && <Estatisticas />}

        {modoAtual === 'ultimos_dias' && <ModoUltimosDias />}
      </main>

      {/* Rodapé Minimalista */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500 max-w-6xl mx-auto w-full px-4 space-y-1 mt-auto">
        <p className="font-semibold text-slate-400">
          OLISP Treino & Revisão • Olimpíada de Linguística de São Paulo • 1ª Série Ensino Médio
        </p>
        <p className="text-[11px] text-slate-600">
          Base de dados extraída e adaptada do material oficial dos Volumes 1, 2 e 3 (Seduc-SP) • 100% offline & client-side
        </p>
      </footer>

      {/* Modais Globais */}
      <ShareModal isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
      <ConfigModal isOpen={isConfigOpen} onClose={() => setIsConfigOpen(false)} />
    </div>
  );
};

export default App;
