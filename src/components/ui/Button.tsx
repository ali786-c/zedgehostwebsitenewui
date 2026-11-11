import type { ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'on-dark';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  block?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  ariaLabel?: string;
  onClick?: () => void;
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  block = false,
  className = '',
  type = 'button',
  ariaLabel,
  onClick,
}: ButtonProps) {
  const classes = [
    'zh-btn',
    `zh-btn--${variant}`,
    size !== 'md' ? `zh-btn--${size}` : '',
    block ? 'zh-btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href) {
    return (
      <a className={classes} href={href} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} aria-label={ariaLabel} onClick={onClick}>
      {children}
    </button>
  );
}
