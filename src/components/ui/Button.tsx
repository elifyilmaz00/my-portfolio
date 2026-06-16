import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseStyle = 'px-6 py-2.5 rounded-xl font-medium transition-all duration-300 active:scale-95 cursor-pointer text-sm inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/20 hover:shadow-primary/45 hover:opacity-95',
    secondary: 'border border-primary/40 text-primary hover:bg-primary/10 bg-transparent',
    glass: 'glass-effect text-fg-dark/90 hover:bg-white/10 hover:border-white/20',
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
