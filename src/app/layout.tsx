"use client";

import { useState, useMemo } from "react";
import { ThemeProvider, CssBaseline, Box, Toolbar, createTheme } from "@mui/material";
import { getDesignTokens } from "@/theme/theme";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DarkModeToggle from "@/components/DarkModeToggle";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const handleToggleMode = () => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  };

  const [mobileOpen, setMobileOpen] = useState(false);
  const handleMenuClick = () => setMobileOpen(!mobileOpen);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box
            sx={{
    minHeight: "100vh",
    background:
      mode === "light"
        ? "linear-gradient(135deg, #f8faff, #e6ecf3)" // Light mode
        : "linear-gradient(135deg, #1E1E2E, #252836)", // Dark mode
    backgroundAttachment: "fixed"
            }}
          >
            <Navbar
              onMenuClick={handleMenuClick}
              rightContent={<DarkModeToggle mode={mode} toggleMode={handleToggleMode} />}
            />
            <Sidebar mobileOpen={mobileOpen} onClose={handleMenuClick} />
            <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { sm: "240px" } }}>
              <Toolbar />
              {children}
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
