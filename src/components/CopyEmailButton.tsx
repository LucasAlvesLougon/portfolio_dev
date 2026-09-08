import React, { useState } from 'react';

interface CopyEmailButtonProps {
  email?: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email = 'lucas.mal2005@gmail.com',
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2500);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="h-11 px-5 bg-white dark:bg-mono-900 hover:bg-mono-100 dark:hover:bg-mono-850 text-mono-900 dark:text-mono-100 text-xs font-mono font-semibold uppercase flex items-center gap-2 border border-mono-300 dark:border-mono-700 transition-all focus:outline-none"
      title="Copiar endereço de e-mail para a área de transferência"
    >
      <span className="material-symbols-outlined text-base">content_copy</span>
      <span>{copied ? 'Email Copiado! ✓' : 'Copiar Email'}</span>
    </button>
  );
};
