"use client";

import { useColor, ColorPreset } from "@/context/ColorContext";
import styles from "./ColorSwitcher.module.css";
import { useEffect, useState, useRef } from "react";
import { FaPalette } from "react-icons/fa";

const COLORS: { name: ColorPreset; hex: string }[] = [
  { name: "red", hex: "#ef4444" },
  { name: "purple", hex: "#bc3ee2" },
  { name: "blue", hex: "#3b82f6" },
  { name: "green", hex: "#10b981" },
  { name: "orange", hex: "#f97316" },
];

export default function ColorSwitcher() {
  const { color, setColor } = useColor();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!mounted) {
    return <div className={styles.placeholder} />;
  }

  const handleSelect = (cName: ColorPreset) => {
    setColor(cName);
    setIsOpen(false);
  };

  return (
    <div className={styles.wrapper} ref={menuRef}>
      {isOpen && (
        <div className={styles.menu}>
          {COLORS.map((c) => (
            <button
              key={c.name}
              onClick={() => handleSelect(c.name)}
              className={`${styles.colorButton} ${
                color === c.name ? styles.active : ""
              }`}
              style={{ backgroundColor: c.hex }}
              aria-label={`Set theme color to ${c.name}`}
              title={c.name}
            />
          ))}
        </div>
      )}
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Color Picker"
      >
        <FaPalette className={styles.icon} />
      </button>
    </div>
  );
}
