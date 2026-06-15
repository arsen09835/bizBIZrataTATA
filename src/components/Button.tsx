import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';

type Variant = 'primary' | 'white';

type ButtonProps = {
  variant?: Variant;
  /** Render a trailing arrow icon. */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
  /** Router link target. */
  to?: string;
  /** Plain anchor target (tel:, mailto:, external). */
  href?: string;
  /** Native button props (used when neither `to` nor `href` is given). */
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
};

// One canonical size/padding/radius for every variant (the nav "Contattami" button).
const base =
  'inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

const variantClass: Record<Variant, string> = {
  primary: 'bg-brand-blue text-white hover:bg-brand-blue-dark focus-visible:ring-brand-blue',
  white: 'bg-white text-ink hover:bg-white/90 focus-visible:ring-white/70',
};

export function Button({
  variant = 'primary',
  arrow = false,
  className = '',
  children,
  to,
  href,
  type = 'button',
  onClick,
  disabled,
}: ButtonProps) {
  const cls = `${base} ${variantClass[variant]} ${className}`.trim();
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight className="w-4 h-4" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} onClick={onClick} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {inner}
    </button>
  );
}

export default Button;
