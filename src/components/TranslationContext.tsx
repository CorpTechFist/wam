import React, { createContext, useContext } from "react";

interface HeroTranslations {
  changeMessage?: string;
  freedomMessage?: string;
  missionDescription?: string;
  visionDescription?: string;
}

interface Translations {
  hero?: HeroTranslations;
}

interface TranslationContextType {
  translations: Translations;
}

const TranslationContext = createContext<TranslationContextType>({
  translations: {},
});

export const useTranslation = () => useContext(TranslationContext);

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const translations: Translations = {
    hero: {
      changeMessage: "BE the Change!",
      freedomMessage: "We are active advocates for FREEDOM and JUSTICE for ALL!",
      missionDescription: "At We All Matter Alliance...",
      visionDescription: "We envision a world...",
    },
  };

  return (
    <TranslationContext.Provider value={{ translations }}>
      {children}
    </TranslationContext.Provider>
  );
};
