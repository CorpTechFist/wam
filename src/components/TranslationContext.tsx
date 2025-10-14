import React, { createContext, useContext } from 'react';

// Minimal translation context to prevent errors
const TranslationContext = createContext({});

export function TranslationProvider({ children }: { children: React.ReactNode }) {
  return (
    <TranslationContext.Provider value={{}}>
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  return { translations: {} };
}