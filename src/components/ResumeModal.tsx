import React, { useEffect, useState } from 'react';

export const ResumeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('open-resume-modal', handleOpen);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('open-resume-modal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div onClick={() => setIsOpen(false)} className="absolute inset-0" />

      <div className="relative z-10 w-full max-w-4xl max-h-[90vh] bg-white dark:bg-mono-950 border border-mono-300 dark:border-mono-800 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto custom-scroll modal-enter shadow-2xl">
        <div className="flex justify-between items-start pb-6 border-b border-mono-200 dark:border-mono-800">
          <div>
            <span className="text-xs font-mono text-mono-500 uppercase tracking-widest">
              // DOCUMENTO OFICIAL
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-headline text-mono-900 dark:text-white uppercase mt-1">
              Lucas Mateus Alves Lougon
            </h3>
            <p className="text-xs font-mono text-mono-500 mt-1">
              Desenvolvedor de Software Backend & Fullstack • Espírito Santo, Brasil
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/curriculo.pdf"
              download="Curriculo_Lucas_Lougon.pdf"
              className="px-4 py-2 bg-mono-900 dark:bg-white text-white dark:text-mono-950 text-xs font-mono font-bold transition-all flex items-center gap-1.5 shadow-sm"
            >
              <span>BAIXAR PDF</span>
              <span className="material-symbols-outlined text-sm">download</span>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 bg-mono-100 dark:bg-mono-900 border border-mono-300 dark:border-mono-700 flex items-center justify-center text-mono-600 dark:text-mono-400 hover:text-mono-900 dark:hover:text-white transition-all font-mono text-sm"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Structured Resume Content */}
        <div className="py-6 space-y-6 text-sm text-mono-700 dark:text-mono-300 font-normal leading-relaxed">
          <div>
            <h4 className="text-xs font-mono font-bold text-mono-900 dark:text-white uppercase tracking-wider pb-1 border-b border-mono-200 dark:border-mono-800 mb-2">
              1. Perfil & Síntese de Qualificações
            </h4>
            <p>
              Desenvolvedor de software com foco em arquitetura backend escalável, desenvolvimento de APIs REST/SOAP,
              modelagem de dados relacional e comunicação em tempo real com WebSockets. Experiência sólida na construção de
              sistemas com <strong>Python (FastAPI)</strong>, <strong>TypeScript (Node.js/React 19)</strong> e
              <strong> PostgreSQL</strong>, aplicando princípios de Clean Architecture, Inversão de Dependência e suítes
              abrangentes de testes automatizados (Pytest e Vitest).
            </p>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-mono-900 dark:text-white uppercase tracking-wider pb-1 border-b border-mono-200 dark:border-mono-800 mb-2">
              2. Competências Técnicas
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
              <div className="bg-mono-50 dark:bg-mono-900 p-3 border border-mono-200 dark:border-mono-800">
                <strong className="text-mono-900 dark:text-white block mb-1">// BACKEND & DADOS</strong>
                Python 3.11, FastAPI, SQLAlchemy 2.0, Node.js, Express, TypeScript, PostgreSQL, Migrações (Alembic/Prisma), WebSockets, REST & SOAP APIs, Cache em Memória.
              </div>
              <div className="bg-mono-50 dark:bg-mono-900 p-3 border border-mono-200 dark:border-mono-800">
                <strong className="text-mono-900 dark:text-white block mb-1">// FRONTEND & ENGENHARIA</strong>
                React 19, Vite, Tailwind CSS, PWA, Vitest, Pytest, Clean Architecture, Git Flow, Conventional Commits, ADRs, Docker básico.
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-mono-900 dark:text-white uppercase tracking-wider pb-1 border-b border-mono-200 dark:border-mono-800 mb-2">
              3. Principais Projetos em Destaque
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="p-3 bg-mono-50 dark:bg-mono-900 border border-mono-200 dark:border-mono-800">
                <span className="font-bold text-mono-900 dark:text-white font-mono uppercase">Cine Random — Plataforma Colaborativa & PWA</span>
                <p className="mt-1 text-mono-600 dark:text-mono-400">
                  Backend em FastAPI com Clean Architecture, salas sincronizadas em tempo real via WebSockets para votação coletiva em filmes, frontend PWA em React 19 e 54+ testes automatizados (Pytest + Vitest).
                </p>
              </li>
              <li className="p-3 bg-mono-50 dark:bg-mono-900 border border-mono-200 dark:border-mono-800">
                <span className="font-bold text-mono-900 dark:text-white font-mono uppercase">Gestão de Ponto — Controle de Horas para Autônomos</span>
                <p className="mt-1 text-mono-600 dark:text-mono-400">
                  Sistema com TypeScript, React, Node.js e PostgreSQL para controle de horas de trabalho, cálculo automático de saldos de jornada com precisão UTC e relatórios para exportação.
                </p>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono font-bold text-mono-900 dark:text-white uppercase tracking-wider pb-1 border-b border-mono-200 dark:border-mono-800 mb-2">
              4. Contato & Links Profissionais
            </h4>
            <p className="text-xs font-mono">
              Email: <a href="mailto:lucas.mal2005@gmail.com" className="text-mono-900 dark:text-white font-semibold underline">lucas.mal2005@gmail.com</a> •
              LinkedIn: <a href="https://www.linkedin.com/in/lucas-lougon" target="_blank" rel="noreferrer" className="text-mono-900 dark:text-white font-semibold underline">linkedin.com/in/lucas-lougon</a> •
              GitHub: <a href="https://github.com/LucasAlvesLougon" target="_blank" rel="noreferrer" className="text-mono-900 dark:text-white font-semibold underline">github.com/LucasAlvesLougon</a>
            </p>
          </div>
        </div>

        <div className="pt-4 border-t border-mono-200 dark:border-mono-800 flex justify-end">
          <button
            onClick={() => setIsOpen(false)}
            className="px-6 py-2 bg-mono-100 dark:bg-mono-900 text-mono-800 dark:text-mono-200 text-xs font-mono font-semibold hover:bg-mono-200 dark:hover:bg-mono-800 transition-all"
          >
            FECHAR
          </button>
        </div>
      </div>
    </div>
  );
};
