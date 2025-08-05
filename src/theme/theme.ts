import { PaletteMode } from "@mui/material";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          primary: { main: "#1976d2" },
          secondary: { main: "#9c27b0" },
          background: {
            default: "linear-gradient(135deg, #f8faff, #e6ecf3)",
            paper: "rgba(255,255,255,0.6)"
          }
        }
      : {
          primary: { main: "#90caf9" },
          secondary: { main: "#ce93d8" },
          background: {
            default: "#1E1E2E",
            paper: "#252836"
          }
        })
  },
  typography: {
    fontFamily: "Inter, Roboto, Arial, sans-serif",
    h1: { fontWeight: 600, fontSize: "2rem" },
    h2: { fontWeight: 500, fontSize: "1.5rem" },
    button: { textTransform: "none", fontWeight: 600 }
  },
  shape: {
    borderRadius: 8
  }
});
