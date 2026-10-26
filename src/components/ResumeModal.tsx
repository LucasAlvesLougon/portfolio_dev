import React, { useEffect, useRef, useState } from 'react';
import { getTranslations, type Locale } from '@/i18n/translations';

interface ResumeModalProps {
  lang?: Locale;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ lang = 'en' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const t = getTranslations(lang).resumeModal;

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
            <p>{t.title}</p>
            <h2 id="resume-title">Lucas Mateus Alves Lougon</h2>
            <span>{t.subtitle}</span>
          </div>
          <button ref={closeRef} type="button" className="resume-close" onClick={() => setIsOpen(false)} aria-label={t.closeAria}>{t.closeText}</button>
        </header>

        <div className="resume-content">
          <p>{t.description}</p>

          <div className="resume-projects">
            <h3>{t.recentProjects}</h3>
            <div>
              <h4>MuPonto</h4>
              <p>{t.mupontoDesc}</p>
              <a href={t.mupontoHref}>{t.readCase}</a>
            </div>
            <div>
              <h4>Cine Random</h4>
              <p>{t.cineDesc}</p>
              <a href={t.cineHref}>{t.readCase}</a>
            </div>
            <div>
              <h4>GovIntel AI</h4>
              <p>{t.govintelDesc}</p>
              <a href={t.govintelHref}>{t.readCase}</a>
            </div>
          </div>
        </div>

        <footer className="resume-footer">
          <a href={t.pdfHref} download={t.pdfFilename} className="resume-download">{t.downloadPdf}</a>
          <a href="mailto:lucas.mal2005@gmail.com">{t.getInTouch}</a>
        </footer>
      </section>
    </div>
  );
};
