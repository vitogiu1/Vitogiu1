"use client";

import { useLanguage } from "@/context/LanguageContext";
import { useEffect, useState } from "react";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "pt" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageToggle}
      aria-label="Toggle Language"
      title={language === "en" ? "Mudar para Português" : "Switch to English"}
    >
      {language === "en" ? "EN" : "PT"}
    </button>
  );
}
