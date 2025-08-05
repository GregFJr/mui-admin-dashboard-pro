"use client";

import { Typography, Box, Paper, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, BarChart, Bar
} from "recharts";
import StatCards from "@/components/StatCards";
import RecentOrders from "@/components/RecentOrders";
import TopProducts from "@/components/TopProducts";

// ---- Mock Data ----
const stats = [
  { label: "Total Users", value: "1,245" },
  { label: "Orders Today", value: "312" },
  { label: "Avg Spend / User", value: "$4.36" },
  { label: "Active Subs", value: "886" }
];

const chartData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 800 },
  { name: "Wed", users: 600 },
  { name: "Thu", users: 1200 },
  { name: "Fri", users: 900 },
  { name: "Sat", users: 1400 },
  { name: "Sun", users: 1000 }
];

const spendByDay = [
  { day: "Mon", spend: 4.25 },
  { day: "Tue", spend: 5.10 },
  { day: "Wed", spend: 4.80 },
  { day: "Thu", spend: 6.15 },
  { day: "Fri", spend: 5.90 },
  { day: "Sat", spend: 7.25 },
  { day: "Sun", spend: 6.50 }
];

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      {/* ---- Stat Cards ---- */}
      <Grid container spacing={3}>
  <Grid item xs={12} md={8}>
    <StatCards />
    {/* Other main content */}
  </Grid>
  <Grid item xs={12} md={4}>
    {/* Sidebar */}
  </Grid>
</Grid>

      {/* ---- Chart ---- */}
      <Paper sx={{ p: 2, borderRadius: 0.5, height: 350, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Weekly Active Users
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="users" stroke="#1976d2" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </Paper>

      {/* ---- Bar Chart ---- */}
      <Paper sx={{ p: 2, borderRadius: 0.5, height: 350, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Average Spend by Day of Week
        </Typography>
        <ResponsiveContainer width="100%" height="90%">
          <BarChart data={spendByDay}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip formatter={(value: number) => `$${value.toFixed(2)}`} />
            <Bar dataKey="spend" fill="#1976d2" />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* ---- Recent Orders + Top Products ---- */}
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <RecentOrders />
        </Grid>
        <Grid item xs={12} md={4}>
          <TopProducts />
        </Grid>
      </Grid>
    </Box>
  );
}
