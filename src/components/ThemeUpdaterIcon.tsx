import { FC, useEffect, useState } from "react";
import { Button, css, MenuItem, Select, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Home from "../../styles/Home.module.css";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div></div>
    );

    let theme_used = resolvedTheme === "light" ? <DarkModeIcon /> : <LightModeIcon />;

  return (
    <div>
      <button
        onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
        className={Home.button_theme}
      >
        {theme_used}
      </button>
    </div>
  );
};

export default ThemeUpdater;
