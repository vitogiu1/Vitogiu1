import { FC, useEffect, useState } from "react";
import { Button, css, MenuItem, Select, Typography } from "@mui/material";
import { useTheme } from "next-themes";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const ThemeUpdater: FC<{}> = () => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <div></div>
    );

  return (
    <div
    >
      <Typography variant="h4" gutterBottom>
      </Typography>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        value={theme}
        onChange={(a) => setTheme(a.target.value)}
      >
        <MenuItem value="system">System</MenuItem>
        <MenuItem value="light">Light</MenuItem>
        <MenuItem value="dark">Dark</MenuItem>
      </Select>
    </div>
  );
};

export default ThemeUpdater;
