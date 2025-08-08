"use client";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";

const orders = [
  { id: "ORD-1001", customer: "John Smith", date: "2025-08-01", amount: "$120.50", status: "Shipped" },
  { id: "ORD-1002", customer: "Sarah Johnson", date: "2025-08-01", amount: "$75.20", status: "Pending" },
  { id: "ORD-1003", customer: "David Lee", date: "2025-07-31", amount: "$210.00", status: "Delivered" },
  { id: "ORD-1004", customer: "Emma Wilson", date: "2025-07-30", amount: "$54.99", status: "Cancelled" }
];

export default function RecentOrders() {
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
          cursor: "default"
        }
      }}
    >
      <Typography variant="h6" gutterBottom>
        Recent Orders
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Order ID</TableCell>
              <TableCell>Customer</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.amount}</TableCell>
                <TableCell>{order.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
