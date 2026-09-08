import React, { useEffect, useState } from 'react';

export const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkDark = document.documentElement.classList.contains('dark');
    setIsDark(checkDark);
  }, []);

  const toggleTheme = () => {
    const nextIsDark = !document.documentElement.classList.contains('dark');
    if (nextIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setIsDark(nextIsDark);
  };

  if (!mounted) {
    return (
      <div className="w-8 h-8 bg-mono-100 dark:bg-mono-900 border border-mono-300 dark:border-mono-700" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center w-8 h-8 bg-mono-100 dark:bg-mono-900 text-mono-700 dark:text-mono-300 hover:bg-mono-200 dark:hover:bg-mono-800 border border-mono-300 dark:border-mono-700 transition-all focus:outline-none"
      title={isDark ? 'Alternar para Tema Claro' : 'Alternar para Tema Escuro'}
      aria-label="Alternar Tema"
    >
      {isDark ? (
        // Minimalist Sun Icon (when in dark mode, click to switch to light)
        <svg
          className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.8]"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      ) : (
        // Minimalist Moon Icon (when in light mode, click to switch to dark)
        <svg
          className="w-3.5 h-3.5 stroke-current fill-none stroke-[1.8]"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
        </svg>
      )}
    </button>
  );
};
