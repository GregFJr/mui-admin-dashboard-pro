"use client";

import { Paper, Typography } from "@mui/material";
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const chartData = [
  { name: "Mon", users: 400 },
  { name: "Tue", users: 800 },
  { name: "Wed", users: 600 },
  { name: "Thu", users: 1200 },
  { name: "Fri", users: 900 },
  { name: "Sat", users: 1400 },
  { name: "Sun", users: 1000 }
];

export default function WeeklyUsersChart() {
  return (
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
          <Line type="monotone" dataKey="users" stroke="#A05AFF" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Paper>
  );
}
