"use client";

import {
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar
} from "@mui/material";

const topProducts = [
  { name: "Wireless Headphones", sales: 245, icon: "🎧" },
  { name: "Smartwatch", sales: 198, icon: "⌚" },
  { name: "Gaming Mouse", sales: 156, icon: "🖱️" },
  { name: "4K Monitor", sales: 142, icon: "🖥️" },
  { name: "Bluetooth Speaker", sales: 120, icon: "🔊" }
];

export default function TopProducts() {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        mt: 3,
        background: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-2px)",
          boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
          cursor: "pointer"
        }
      }}
    >
      <Typography variant="h6" gutterBottom>
        Top Products
      </Typography>
      <List>
        {topProducts.map((product) => (
          <ListItem key={product.name}>
            <ListItemAvatar>
              <Avatar sx={{ fontSize: "1.2rem" }}>{product.icon}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={product.name}
              secondary={`Sales: ${product.sales}`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
