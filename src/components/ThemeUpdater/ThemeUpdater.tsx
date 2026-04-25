"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import styles from "./ThemeUpdater.module.css";

export default function ThemeUpdater() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <FaSun className={styles.icon} />
      ) : (
        <FaMoon className={styles.icon} />
      )}
    </button>
  );
}
