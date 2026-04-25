"use client";

import { useState, useEffect, useRef } from "react";
import { FaCog } from "react-icons/fa";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import ThemeUpdater from "../ThemeUpdater/ThemeUpdater";
import ColorSwitcher from "../ColorSwitcher/ColorSwitcher";
import styles from "./SettingsManager.module.css";

export default function SettingsManager() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <div className={styles.container}>
      <div className={`${styles.topBar} ${scrolled ? styles.hidden : ""}`}>
        <LanguageSwitcher />
        <ThemeUpdater />
        <ColorSwitcher direction="down" />
      </div>

      <div
        ref={menuRef}
        className={`${styles.fabContainer} ${scrolled ? styles.visible : ""}`}
      >
        {menuOpen && (
          <div className={styles.fabMenu}>
            <LanguageSwitcher />
            <ThemeUpdater />
            <ColorSwitcher direction="left" />
          </div>
        )}
        <button
          className={styles.fab}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Settings"
          title="Settings"
        >
          <FaCog
            className={`${styles.icon} ${menuOpen ? styles.rotate : ""}`}
          />
        </button>
      </div>
    </div>
  );
}
