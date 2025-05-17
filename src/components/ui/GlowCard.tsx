
import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface GlowCardProps extends HTMLAttributes<HTMLDivElement> {
  glowColor?: 'blue' | 'purple' | 'cyan' | 'none';
  isHoverable?: boolean;
}

const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, glowColor = 'none', isHoverable = true, children, ...props }, ref) => {
    const glowClasses = {
      blue: 'hover:shadow-neon-blue',
      purple: 'hover:shadow-neon-purple',
      cyan: 'hover:shadow-neon-cyan',
      none: '',
    };

    return (
      <div
        className={cn(
          'glass-card rounded-lg p-6 transition-all duration-300',
          isHoverable && glowColor !== 'none' && glowClasses[glowColor],
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);

GlowCard.displayName = 'GlowCard';

export default GlowCard;
