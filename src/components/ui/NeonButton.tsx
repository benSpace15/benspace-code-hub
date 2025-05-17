
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'blue' | 'purple' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(
  ({ className, variant = 'blue', size = 'md', fullWidth = false, children, ...props }, ref) => {
    const variantClassNames = {
      blue: 'bg-neon-blue/10 text-neon-blue border border-neon-blue/40 hover:bg-neon-blue/20 hover:shadow-neon-blue focus:ring-neon-blue',
      purple: 'bg-neon-purple/10 text-neon-purple border border-neon-purple/40 hover:bg-neon-purple/20 hover:shadow-neon-purple focus:ring-neon-purple',
      cyan: 'bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/40 hover:bg-neon-cyan/20 hover:shadow-neon-cyan focus:ring-neon-cyan',
    };

    const sizeClassNames = {
      sm: 'text-xs px-3 py-1.5',
      md: 'text-sm px-4 py-2',
      lg: 'text-base px-6 py-3',
    };

    return (
      <button
        className={cn(
          'rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark',
          variantClassNames[variant],
          sizeClassNames[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

NeonButton.displayName = 'NeonButton';

export default NeonButton;
