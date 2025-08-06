"use client";

import { Paper, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from "@mui/material";

const topProducts = [
  { name: "Wireless Headphones", sales: 245, icon: "🎧" },
  { name: "Smartwatch", sales: 198, icon: "⌚" },
  { name: "Gaming Mouse", sales: 156, icon: "🖱️" },
  { name: "4K Monitor", sales: 142, icon: "🖥️" },
  { name: "Bluetooth Speaker", sales: 120, icon: "🔊" }
];

export default function TopProducts() {
  return (
    <Paper sx={{ p: 2, borderRadius: 2 }}>
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
