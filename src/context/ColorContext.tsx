"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type ColorPreset = "purple" | "blue" | "green" | "red" | "orange";

interface ColorContextType {
  color: ColorPreset;
  setColor: (color: ColorPreset) => void;
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const ColorProvider = ({ children }: { children: React.ReactNode }) => {
  const [color, setColorState] = useState<ColorPreset>("red");

  useEffect(() => {
    const storedColor = localStorage.getItem("theme-color") as ColorPreset;
    if (
      storedColor &&
      ["purple", "blue", "green", "red", "orange"].includes(storedColor)
    ) {
      setColorState(storedColor);
      document.documentElement.setAttribute("data-color", storedColor);
    } else {
      document.documentElement.setAttribute("data-color", "red");
    }
  }, []);

  const handleSetColor = (newColor: ColorPreset) => {
    setColorState(newColor);
    localStorage.setItem("theme-color", newColor);
    document.documentElement.setAttribute("data-color", newColor);
  };

  return (
    <ColorContext.Provider value={{ color, setColor: handleSetColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const useColor = () => {
  const context = useContext(ColorContext);
  if (context === undefined) {
    throw new Error("useColor must be used within a ColorProvider");
  }
  return context;
};
