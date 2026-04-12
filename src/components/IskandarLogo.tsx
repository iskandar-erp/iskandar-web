interface IskandarLogoProps {
  size?: number;
  className?: string;
  color?: string;
}

export default function IskandarLogo({ size = 40, className = '', color }: IskandarLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 110"
      width={size}
      height={size * 1.1}
      className={className}
      aria-label="Iskandar Logo"
    >
      {/* Network constellation */}
      <g
        stroke={color || 'var(--color-primary)'}
        strokeWidth="1.4"
        strokeLinecap="round"
        fill="none"
      >
        {/* Edges */}
        <line x1="62" y1="6" x2="32" y2="16" />
        <line x1="62" y1="6" x2="80" y2="28" />
        <line x1="62" y1="6" x2="52" y2="32" />
        <line x1="32" y1="16" x2="52" y2="32" />
        <line x1="32" y1="16" x2="10" y2="40" />
        <line x1="32" y1="16" x2="35" y2="46" />
        <line x1="80" y1="28" x2="52" y2="32" />
        <line x1="80" y1="28" x2="65" y2="50" />
        <line x1="52" y1="32" x2="35" y2="46" />
        <line x1="52" y1="32" x2="65" y2="50" />
        <line x1="10" y1="40" x2="35" y2="46" />
        <line x1="10" y1="40" x2="16" y2="66" />
        <line x1="35" y1="46" x2="65" y2="50" />
        <line x1="35" y1="46" x2="16" y2="66" />
        <line x1="35" y1="46" x2="40" y2="70" />
        <line x1="65" y1="50" x2="40" y2="70" />
        <line x1="65" y1="50" x2="58" y2="82" />
        <line x1="16" y1="66" x2="40" y2="70" />
        <line x1="16" y1="66" x2="26" y2="92" />
        <line x1="40" y1="70" x2="58" y2="82" />
        <line x1="40" y1="70" x2="26" y2="92" />
        <line x1="58" y1="82" x2="42" y2="104" />
        <line x1="26" y1="92" x2="42" y2="104" />
      </g>
      {/* Nodes */}
      <g fill={color || 'currentColor'}>
        <circle cx="62" cy="6" r="3" />
        <circle cx="32" cy="16" r="3" />
        <circle cx="80" cy="28" r="3" />
        <circle cx="52" cy="32" r="3.2" />
        <circle cx="10" cy="40" r="3" />
        <circle cx="35" cy="46" r="3.5" />
        <circle cx="65" cy="50" r="3" />
        <circle cx="16" cy="66" r="3" />
        <circle cx="40" cy="70" r="3.2" />
        <circle cx="58" cy="82" r="3" />
        <circle cx="26" cy="92" r="3" />
        <circle cx="42" cy="104" r="3" />
      </g>
    </svg>
  );
}
