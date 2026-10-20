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
            <p>Professional summary</p>
            <h2 id="resume-title">Lucas Mateus Alves Lougon</h2>
            <span>Software engineering, backend, and full stack</span>
          </div>
          <button ref={closeRef} type="button" className="resume-close" onClick={() => setIsOpen(false)} aria-label="Close resume">Close</button>
        </header>

        <div className="resume-content">
          <p>This portfolio covers APIs, React interfaces, relational databases, real-time communication, and automated testing. The case studies document the problem and technical decisions behind each delivery.</p>

          <div className="resume-projects">
            <h3>Recent projects</h3>
            <div>
              <h4>MuPonto</h4>
              <p>Production time tracking with a React interface, Laravel API, MySQL persistence, balance calculations, and an auditable history.</p>
              <a href="/projetos/gestao-de-ponto">Read case study</a>
            </div>
            <div>
              <h4>Cine Random</h4>
              <p>Collaborative application with FastAPI, React, PostgreSQL, and movie voting synchronized through WebSockets.</p>
              <a href="/projetos/cine-random">Read case study</a>
            </div>
            <div>
              <h4>GovIntel AI</h4>
              <p>Local tender-analysis MVP with asynchronous processing, semantic search, and verifiable citations.</p>
              <a href="/projetos/govintel-ai">Read case study</a>
            </div>
          </div>
        </div>

        <footer className="resume-footer">
          <a href="/curriculo.pdf" download="Resume_Lucas_Lougon.pdf" className="resume-download">Download resume PDF</a>
          <a href="mailto:lucas.mal2005@gmail.com">Get in touch</a>
        </footer>
      </section>
    </div>
  );
};
