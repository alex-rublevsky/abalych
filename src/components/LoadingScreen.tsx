import React from 'react';
import SymbolA from './SymbolA';

interface LoadingScreenProps {
  isVisible: boolean;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ isVisible }) => {
  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: 'var(--background)' }}
    >
      <div className="flex flex-col items-center space-y-8">
        <div className="relative">
          <div style={{ animation:"pulseSymbolA 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}>
            <SymbolA
              className="h-24 w-24"
              color="currentColor"
            />
          </div>
        </div>
        
        {/* Optional loading text */}
        <p className="text-sm text-gray-600 dark:text-gray-400 font-light">
          Loading...
        </p>
      </div>
    </div>
  );
};
