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
  Bar,
} from "recharts";
import StatCards from "@/components/StatCards";
import RecentOrders from "@/components/RecentOrders";
import TopProducts from "@/components/TopProducts";
import MiniPieChart from "@/components/MiniPieChart";
import WeeklyUsersChart from "@/components/WeeklyUsersChart";
import SpendByDayChart from "@/components/SpendByDayChart";

// ---- Mock Data ----
const chartData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 800 },
  { name: "Wed", users: 600 },
  { name: "Thu", users: 1200 },
  { name: "Fri", users: 900 },
  { name: "Sat", users: 1400 },
  { name: "Sun", users: 1000 },
];

const spendByDay = [
  { day: "Mon", spend: 4.25 },
  { day: "Tue", spend: 5.1 },
  { day: "Wed", spend: 4.8 },
  { day: "Thu", spend: 6.15 },
  { day: "Fri", spend: 5.9 },
  { day: "Sat", spend: 7.25 },
  { day: "Sun", spend: 6.5 },
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

          <WeeklyUsersChart />

          {/* Average Spend by Day of Week */}

          <SpendByDayChart />

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
            top: { md: 80 },
          }}
        >
          {/* Mini Pie Chart */}

          <MiniPieChart />

          {/* Top Products Data */}

          <TopProducts />
        </Grid>
      </Grid>
    </Box>
  );
}
