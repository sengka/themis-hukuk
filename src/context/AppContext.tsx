import React, { createContext, useContext, useState } from 'react';

  interface AppContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
  }

  const AppContext = createContext<AppContextType | undefined>(undefined);

  export function AppProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
      setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    return (
      <AppContext.Provider value={{ theme, toggleTheme }}>
        <div className={theme === 'dark' ? 'bg-black-anthracite text-light-beige' : 'bg-light-beige text-gray-700'}>
          {children}
        </div>
      </AppContext.Provider>
    );
  }

  export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) throw new Error('useAppContext must be used within an AppProvider');
    return context;
  };