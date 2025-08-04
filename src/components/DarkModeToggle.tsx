"use client";

import { IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

export default function DarkModeToggle({
  mode,
  toggleMode
}: {
  mode: "light" | "dark";
  toggleMode: () => void;
}) {
  return (
    <IconButton color="inherit" onClick={toggleMode}>
      {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  );
}
