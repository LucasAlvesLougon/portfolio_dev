import { X } from 'lucide-react';
import type { CSSProperties } from 'react';
import { useEffect, useRef, useState } from 'react';

const navigation = [
  { label: 'Story', href: '#about' },
  { label: 'Work', href: '#featured-projects' },
  { label: 'Message', href: '#contact' },
];

const social = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/lucas-lougon' },
  { label: 'GitHub', href: 'https://github.com/LucasAlvesLougon' },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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
        aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
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
        aria-label="Close navigation menu"
        aria-hidden={!isOpen}
        tabIndex={isOpen ? 0 : -1}
        onClick={closeMenu}
      />

      <aside
        id="mobile-site-index"
        className="editorial-menu-panel"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="editorial-menu-close"
          aria-label="Close navigation menu"
          tabIndex={isOpen ? 0 : -1}
          onClick={closeMenu}
        >
          <X size={26} strokeWidth={1.5} aria-hidden="true" />
        </button>

        <div className="editorial-menu-section editorial-menu-section-primary">
          <p>Site Index</p>
          <nav aria-label="Site index">
            {navigation.map((item, index) => (
              <a key={item.href} href={item.href} tabIndex={isOpen ? 0 : -1} style={{ '--menu-index': index } as CSSProperties} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="editorial-menu-section editorial-menu-section-social">
          <p>Find Me</p>
          <nav aria-label="Social links">
            {social.map((item, index) => (
              <a key={item.href} href={item.href} tabIndex={isOpen ? 0 : -1} target="_blank" rel="noreferrer" style={{ '--menu-index': index } as CSSProperties} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}
