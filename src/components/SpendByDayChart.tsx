"use client";

import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles"
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from "recharts";

const GlassChartCard = styled(Paper)(({ theme }) => ({
  borderRadius: 10,
  backdropFilter: "blur(12px)",
  background: theme.palette.mode === "light"
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
    cursor: "pointer"
  }
}));

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
<GlassChartCard>
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
</GlassChartCard>
  );
}
