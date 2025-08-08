import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SettingsIcon from "@mui/icons-material/Settings";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import PersonIcon from "@mui/icons-material/Person";

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Users", icon: <PeopleIcon />, path: "/users" },
  { text: "Products", icon: <InventoryIcon />, path: "/products" },
  { text: "Orders", icon: <ShoppingCartIcon />, path: "/orders" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

export default function Sidebar({
  mobileOpen,
  onClose,
}: {
  mobileOpen: boolean;
  onClose: () => void;
}) {
  const drawerWidth = 240;

  const drawer = (
    <List>
      {menuItems.map((item) => (
        <ListItemButton key={item.text}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  );

  return (
    <>
      <Typography>Profile</Typography>
      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { width: drawerWidth, boxSizing: "border-box" },
        }}
        open
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            py: 2,
            borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        >
          <Avatar
            alt="Greg FInney"
            src="/avatar.jpg"
            sx={{ width: 64, height: 64, mb: 1, bgcolor: "primary.main" }}
          >
            <PersonIcon />
          </Avatar>
          <VerifiedUserIcon fontSize="small" color="primary" />
        </Box>
        {drawer}
      </Drawer>
    </>
  );
}
