"use client";

import { Typography, Box, Paper, CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";

// ---- Mock Data ----
const stats = [
  { label: "Total Users", value: "1,245" },
  { label: "Orders Today", value: "312" },
  { label: "Avg Spend / User", value: "$4.36" },
  { label: "Active Subs", value: "876" }
];

// ---- Styled Components ----
const StatCard = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "200px",
  height: "200px",
  borderRadius: 4,
  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
  backdropFilter: "blur(12px)",
  background: "linear-gradient(to right, #18CFB4, #1a73e8)",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 25px rgba(0,0,0,0.1)",
    cursor: "pointer"
  }
}));

export default function StatCards() {
  return (
    <Grid container spacing={4} mb={3}>
      {stats.map((stat) => (
        <Grid item xs={12} sm={6} md={3} key={stat.label}>
          <StatCard>
            <Typography variant="subtitle2" color="textSecondary" fontWeight={500}>
              {stat.label}
            </Typography>

            {stat.label === "Active Subs" ? (
              <Box sx={{ position: "relative", display: "inline-flex", mt: 1 }}>
                <CircularProgress
                  variant="determinate"
                  value={72} // example %
                  size={80}
                  thickness={5}
                  sx={{ color: "#fff" }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Typography variant="subtitle1" component="div" color="#fff">
                    {`72%`}
                  </Typography>
                </Box>
              </Box>
            ) : (
              <Typography variant="h5" fontWeight={500}>
                {stat.value}
              </Typography>
            )}
          </StatCard>
        </Grid>
      ))}
    </Grid>
  );
}
