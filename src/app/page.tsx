"use client";

import { Typography, Box, Paper } from "@mui/material";
import Grid from "@mui/material/Grid";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar
} from "recharts";
import StatCards from "@/components/StatCards";
import RecentOrders from "@/components/RecentOrders";
import TopProducts from "@/components/TopProducts";
import MiniPieChart from "@/components/MiniPieChart";

// ---- Mock Data ----
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
  { day: "Tue", spend: 5.1 },
  { day: "Wed", spend: 4.8 },
  { day: "Thu", spend: 6.15 },
  { day: "Fri", spend: 5.9 },
  { day: "Sat", spend: 7.25 },
  { day: "Sun", spend: 6.5 }
];

export default function DashboardPage() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* ---- Main Content ---- */}
        <Grid item xs={12} md={9}>
          {/* Stat Cards */}
          <StatCards />

          {/* Weekly Active Users Chart */}
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
                <Line
                  type="monotone"
                  dataKey="users"
                  stroke="#1976d2"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </Paper>

          {/* Average Spend by Day of Week */}
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
                <Bar dataKey="spend" fill="#A05AFF" />
              </BarChart>
            </ResponsiveContainer>
          </Paper>

          {/* Recent Orders */}
          <RecentOrders />
        </Grid>

        {/* ---- Right Sidebar ---- */}
        <Grid
          item
          xs={12}
          md={3}
          sx={{
            position: { md: "sticky" },
            top: { md: 80 }
          }}
        >
          <MiniPieChart />
          <TopProducts />
        </Grid>
      </Grid>
    </Box>
  );
}
