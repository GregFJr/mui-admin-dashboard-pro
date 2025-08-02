"use client";

import { useState } from "react";
import { ThemeProvider, CssBaseline, Box, Toolbar } from "@mui/material";
import theme from "@/theme/theme";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleMenuClick = () => setMobileOpen(!mobileOpen);

  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar onMenuClick={handleMenuClick} />
          <Sidebar mobileOpen={mobileOpen} onClose={handleMenuClick} />
          <Box component="main" sx={{ flexGrow: 1, p: 3, ml: { sm: "240px" } }}>
            <Toolbar />
            {children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
