"use client";

import { Paper, Typography } from "@mui/material";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const spendByDay = [
  { day: "Mon", spend: 4.25 },
  { day: "Tue", spend: 5.10 },
  { day: "Wed", spend: 4.80 },
  { day: "Thu", spend: 6.15 },
  { day: "Fri", spend: 5.90 },
  { day: "Sat", spend: 7.25 },
  { day: "Sun", spend: 6.50 }
];

export default function SpendByDayChart() {
  return (
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
  );
}
