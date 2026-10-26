import { X } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';
import { getTranslations, type Locale } from '@/i18n/translations';

interface MobileMenuProps {
  lang?: Locale;
}

export default function MobileMenu({ lang = 'en' }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const t = getTranslations(lang);

  const navigation = [
    { label: t.nav.story, href: t.nav.storyHref },
    { label: t.nav.work, href: t.nav.workHref },
    { label: t.nav.message, href: t.nav.messageHref },
  ];

  const social = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-lougon' },
    { label: 'GitHub', href: 'https://github.com/LucasAlvesLougon' },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`editorial-mobile-menu${isOpen ? ' is-open' : ''}`}>
      <button
        type="button"
        className="editorial-menu-toggle"
        aria-expanded={isOpen}
        aria-controls="mobile-site-index"
        aria-label={isOpen ? t.mobileMenu.closeAria : t.mobileMenu.openAria}
        onClick={() => setIsOpen((current) => !current)}
      >
        <span className="editorial-menu-bars" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      <button
        type="button"
        className="editorial-menu-backdrop"
        aria-label={t.mobileMenu.closeAria}
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-site-index"
        className="editorial-menu-panel"
        aria-label={t.mobileMenu.siteIndex}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="editorial-menu-close"
          aria-label={t.mobileMenu.closeAria}
          tabIndex={isOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <X size={26} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="editorial-menu-section editorial-menu-section-primary">
          <p>{t.mobileMenu.siteIndex}</p>
          <nav aria-label={t.mobileMenu.siteIndex}>
            {navigation.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                style={{ '--menu-index': index } as CSSProperties}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="editorial-menu-section editorial-menu-section-lang">
          <p>{t.mobileMenu.language}</p>
          <nav aria-label={t.mobileMenu.language}>
            <a
              href="/"
              tabIndex={isOpen ? 0 : -1}
              className={lang === 'en' ? 'is-current-lang' : ''}
              onClick={closeMenu}
            >
              English {lang === 'en' ? '✓' : ''}
            </a>
            <a
              href="/pt/"
              tabIndex={isOpen ? 0 : -1}
              className={lang === 'pt' ? 'is-current-lang' : ''}
              onClick={closeMenu}
            >
              Português BR {lang === 'pt' ? '✓' : ''}
            </a>
          </nav>
        </div>

        <div className="editorial-menu-section editorial-menu-section-social">
          <p>{t.mobileMenu.findMe}</p>
          <nav aria-label={t.nav.socialLinks}>
            {social.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                target="_blank"
                rel="noreferrer"
                style={{ '--menu-index': index } as CSSProperties}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
