import React from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function Button({
  type = 'button',
  variant = 'primary',
  size = 'md',
  children,
  onClick,
  disabled = false,
  className = '',
}: ButtonProps) {
  const baseClass = 'font-bold rounded-2xl transition-all duration-500 tracking-wide shadow-md hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2';

  const variantClass = {
    primary: 'bg-primary-dark text-white hover:bg-primary-light border-2 border-transparent',
    secondary: 'bg-accent text-primary-dark hover:bg-white hover:text-primary-dark border-2 border-accent',
    outline: 'border-2 border-primary-dark text-primary-dark hover:bg-primary-dark hover:text-white',
  };

  const sizeClass = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4.5 text-lg',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${variantClass[variant]} ${sizeClass[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
}
