import { ReactNode } from 'react';

interface CardProps {
  title?: string;
  icon?: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'warning' | 'error' | 'info';
}

export default function Card({ title, icon, children, className = '', variant = 'default' }: CardProps) {
  const variantStyles = {
    default: 'bg-gray-800/50 border-gray-700',
    warning: 'bg-amber-900/20 border-amber-800/30',
    error: 'bg-red-900/20 border-red-800/30',
    info: 'bg-blue-900/20 border-blue-800/30',
  };

  return (
    <div className={`rounded-xl border p-6 ${variantStyles[variant]} ${className}`}>
      {title && (
        <div className="flex items-center gap-3 mb-4">
          {icon && <span className="text-2xl">{icon}</span>}
          <h3 className="text-lg font-bold text-white">{title}</h3>
        </div>
      )}
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </div>
  );
}
