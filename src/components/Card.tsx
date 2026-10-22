import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: React.ReactNode;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'warning' | 'error' | 'info';
  noHover?: boolean;
}

export default function Card({ title, icon, children, className = '', variant = 'default', noHover = false }: CardProps) {
  const variantStyles = {
    default: 'dossier-card',
    warning: 'dossier-card bg-[var(--color-warning-bg)]',
    error: 'dossier-card bg-[var(--color-unverified-bg)]',
    info: 'dossier-card bg-[var(--color-verified-bg)]',
  };

  return (
    <div className={`${variantStyles[variant]} ${noHover ? 'dossier-card--no-hover' : ''} ${className}`}>
      {title && (
        <div className="section-header">
          {icon && <div className="section-header__icon">{icon}</div>}
          <h3 className="section-header__title">{title}</h3>
        </div>
      )}
      <div className="text-[var(--color-ink-light)] leading-relaxed">{children}</div>
    </div>
  );
}
