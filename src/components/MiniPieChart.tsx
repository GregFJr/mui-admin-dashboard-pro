"use client";

import { Paper, Typography } from "@mui/material";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

// Example data
const data = [
  { name: "New Users", value: 400 },
  { name: "Returning Users", value: 300 },
  { name: "Guest Users", value: 200 },
];

const COLORS = ["#1976d2", "#A05AFF", "#18CFB4"];

export default function MiniPieChart() {
  return (
    <Paper
      sx={{
        p: 2,
        borderRadius: 2,
        mb: 3,
        background: (theme) =>
          theme.palette.mode === "light"
            ? "rgba(255, 255, 255, 0.15)"
            : "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
    >
      <Typography variant="h6" gutterBottom>
        User Breakdown
      </Typography>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={70}
            fill="#8884d8"
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </Paper>
  );
}
