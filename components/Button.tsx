import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyle = "px-6 py-3 font-bold border-2 border-black transition-all duration-200 brutalist-shadow-hover brutalist-shadow-active";
  
  let variantStyle = "";
  switch (variant) {
    case 'primary':
      variantStyle = "bg-black text-white shadow-[4px_4px_0px_0px_#888] hover:bg-neutral-800";
      break;
    case 'secondary':
      variantStyle = "bg-yellow-400 text-black shadow-[4px_4px_0px_0px_#000]";
      break;
    case 'outline':
      variantStyle = "bg-white text-black shadow-[4px_4px_0px_0px_#000]";
      break;
  }

  return (
    <button 
      className={`${baseStyle} ${variantStyle} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;