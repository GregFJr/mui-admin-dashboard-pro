"use client";

import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const GlassChartCard = styled(Paper)(({ theme }) => ({
  borderRadius: 10,
  backdropFilter: "blur(12px)",
  background:
    theme.palette.mode === "light"
      ? "rgba(255, 255, 255, 0.15)"
      : "rgba(255, 255, 255, 0.05)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  padding: theme.spacing(2),
  height: 350,
  marginBottom: theme.spacing(3),
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
    cursor: "pointer",
  },
}));

const chartData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 800 },
  { name: "Wed", users: 600 },
  { name: "Thu", users: 1200 },
  { name: "Fri", users: 900 },
  { name: "Sat", users: 1400 },
  { name: "Sun", users: 1000 },
];

export default function WeeklyUsersChart() {
  return (
    <GlassChartCard>
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
            stroke="#A05AFF"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </GlassChartCard>
  );
}
