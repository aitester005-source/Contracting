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
  const baseClass = 'font-bold rounded-2xl transition-all duration-500 tracking-wide shadow-lg hover:shadow-2xl hover:-translate-y-1.5 flex items-center justify-center gap-3 active:scale-95';
 
  const variantClass = {
    primary: 'bg-gradient-to-r from-primary-dark to-[#1a2b4d] text-white hover:from-accent hover:to-[#ffd700] hover:text-primary-dark border-none',
    secondary: 'bg-accent text-primary-dark hover:bg-white hover:text-primary-dark border-2 border-accent',
    outline: 'border-2 border-primary-dark/20 text-primary-dark hover:bg-primary-dark hover:text-white backdrop-blur-sm',
  };
 
  const sizeClass = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-9 py-4 text-base',
    lg: 'px-12 py-5 text-lg',
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
