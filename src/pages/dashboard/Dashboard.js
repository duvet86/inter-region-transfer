import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import Chart from "./Chart";
import Deposits from "./Deposits";
import ProjectsList from "./ProjectsList";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 300,
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 300,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      {/* Projects List */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ProjectsList />
        </Paper>
      </Grid>
    </Grid>
  );
}
