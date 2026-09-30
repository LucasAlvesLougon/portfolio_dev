import React, { useEffect, useRef, useState } from 'react';

export const ResumeModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-resume-modal', handleOpen);
    return () => window.removeEventListener('open-resume-modal', handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }

      if (event.key === 'Tab') {
        const focusable = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="resume-overlay">
      <div className="resume-backdrop" onClick={() => setIsOpen(false)} aria-hidden="true" />
      <section ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby="resume-title" className="resume-dialog">
        <header className="resume-header">
          <div>
            <p>Resumo profissional</p>
            <h2 id="resume-title">Lucas Mateus Alves Lougon</h2>
            <span>Engenharia de software, backend e full stack</span>
          </div>
          <button ref={closeRef} type="button" className="resume-close" onClick={() => setIsOpen(false)} aria-label="Fechar currículo">Fechar</button>
        </header>

        <div className="resume-content">
          <p>Os projetos deste portfólio abrangem APIs, interfaces React, bancos relacionais, comunicação em tempo real e testes automatizados. Os estudos de caso documentam o problema e as decisões técnicas de cada entrega.</p>

          <div className="resume-projects">
            <h3>Projetos recentes</h3>
            <div>
              <h4>MuPonto</h4>
              <p>Controle de ponto em produção com interface React, API Laravel, persistência MySQL, cálculo de saldo e histórico auditável.</p>
              <a href="/projetos/gestao-de-ponto">Ler estudo de caso</a>
            </div>
            <div>
              <h4>Cine Random</h4>
              <p>Aplicação colaborativa com FastAPI, React, PostgreSQL e votação de filmes sincronizada por WebSockets.</p>
              <a href="/projetos/cine-random">Ler estudo de caso</a>
            </div>
          </div>
        </div>

        <footer className="resume-footer">
          <a href="/curriculo.pdf" download="Curriculo_Lucas_Lougon.pdf" className="resume-download">Baixar currículo em PDF</a>
          <a href="mailto:lucas.mal2005@gmail.com">Entrar em contato</a>
        </footer>
      </section>
    </div>
  );
};
