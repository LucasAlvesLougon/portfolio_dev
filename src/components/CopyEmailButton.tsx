import React, { useState } from 'react';

interface CopyEmailButtonProps {
  email?: string;
  copyLabel?: string;
  copiedLabel?: string;
  title?: string;
}

export const CopyEmailButton: React.FC<CopyEmailButtonProps> = ({
  email = 'lucas.mal2005@gmail.com',
  copyLabel = 'Copy email',
  copiedLabel = 'Email copied',
  title = 'Copy email address to clipboard',
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
      title={title}
    >
      <span aria-live="polite">{copied ? copiedLabel : copyLabel}</span>
    </button>
  );
};
