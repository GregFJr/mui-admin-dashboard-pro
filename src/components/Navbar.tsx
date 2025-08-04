"use client";

import { AppBar, Toolbar, Typography, IconButton, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240; // same width as your Sidebar

export default function Navbar({
  onMenuClick,
  rightContent
}: {
  onMenuClick: () => void;
  rightContent?: React.ReactNode;
}) {
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        background: "#A05AFF",
        ml: { sm: `${drawerWidth}px` }
      }}
    >
      <Toolbar>
        {/* Mobile Menu Button */}
        <IconButton
          color="inherit"
          edge="start"
          onClick={onMenuClick}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>

        {/* App Title */}
        <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
          Admin Dashboard
        </Typography>

        {/* Right Content (Dark Mode Toggle) */}
        {rightContent && <Box>{rightContent}</Box>}
      </Toolbar>
    </AppBar>
  );
}
