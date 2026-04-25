"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import en from "@/locales/en.json";
import pt from "@/locales/pt.json";

type Language = "en" | "pt";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const dictionaries = { en, pt };

export const LanguageProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [language, setLanguage] = useState<Language>("en");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    const storedLang = localStorage.getItem("language") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "pt")) {
      setLanguage(storedLang);
    } else {
      setLanguage("en");
    }
    setIsHydrated(true);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
  };

  const t = (keyString: string) => {
    const keys = keyString.split(".");
    const currentLang = isHydrated ? language : "en";
    let current: any = dictionaries[currentLang];

    for (const key of keys) {
      if (current === undefined || current[key] === undefined) {
        return keyString;
      }
      current = current[key];
    }
    return current;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
