interface IconProps {
  className?: string;
  size?: number;
}

export const Icons = {
  Overview: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <rect x="3" y="3" width="18" height="18" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),

  Trials: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M9 3h6v4l4 10H5l4-10V3z" />
      <line x1="5" y1="17" x2="19" y2="17" />
    </svg>
  ),

  Patients: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
      <circle cx="17" cy="7" r="2" />
      <path d="M21 21v-1a3 3 0 00-3-3h-1" />
    </svg>
  ),

  Warning: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" className={className}>
      <path d="M12 2L2 22h20L12 2z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <circle cx="12" cy="17" r="0.5" fill="currentColor" />
    </svg>
  ),

  Circumstantial: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <circle cx="11" cy="11" r="7" />
      <line x1="16" y1="16" x2="22" y2="22" />
      <line x1="11" y1="8" x2="11" y2="14" />
      <line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  ),

  Technology: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <rect x="4" y="4" width="16" height="16" />
      <rect x="8" y="8" width="8" height="8" />
      <line x1="4" y1="8" x2="2" y2="8" />
      <line x1="4" y1="12" x2="2" y2="12" />
      <line x1="4" y1="16" x2="2" y2="16" />
      <line x1="20" y1="8" x2="22" y2="8" />
      <line x1="20" y1="12" x2="22" y2="12" />
      <line x1="20" y1="16" x2="22" y2="16" />
    </svg>
  ),

  Sources: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M4 4h16v16H4z" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="8" y1="4" x2="8" y2="8" />
    </svg>
  ),

  ArrowRight: ({ className = '', size = 16 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  ),

  ExternalLink: ({ className = '', size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  ),

  Close: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  Check: ({ className = '', size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),

  X: ({ className = '', size = 14 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  ),

  Location: ({ className = '', size = 16 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7z" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  ),

  Document: ({ className = '', size = 16 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),

  Brain: ({ className = '', size = 20 }: IconProps) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" strokeLinejoin="round" className={className}>
      <path d="M12 2a5 5 0 00-5 5v1a5 5 0 00-3 4.5A5 5 0 007 21h10a5 5 0 003-8.5A5 5 0 0017 8V7a5 5 0 00-5-5z" />
      <line x1="12" y1="2" x2="12" y2="21" />
    </svg>
  ),
};
