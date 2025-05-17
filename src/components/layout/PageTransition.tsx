
import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '0';
      ref.current.style.transform = 'translateY(10px)';

      // Trigger animation
      const timer = setTimeout(() => {
        if (ref.current) {
          ref.current.style.opacity = '1';
          ref.current.style.transform = 'translateY(0)';
        }
      }, 50);

      return () => clearTimeout(timer);
    }
  }, [location.pathname]);

  return (
    <div 
      ref={ref}
      className="transition-all duration-500 ease-in-out"
      style={{ opacity: 0, transform: 'translateY(10px)' }}
    >
      {children}
    </div>
  );
};

export default PageTransition;
