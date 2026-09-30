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
      className="contact-copy"
      title="Copiar endereço de e-mail para a área de transferência"
    >
      <span aria-live="polite">{copied ? 'E-mail copiado' : 'Copiar e-mail'}</span>
    </button>
  );
};
