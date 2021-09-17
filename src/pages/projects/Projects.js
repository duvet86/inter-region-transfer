import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

// import Chart from "./Chart";
import Deposits from "./Deposits";
import ProjectsList from "./ProjectsList";

import chart from "./chart.png";

export default function Dashboard() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ProjectsList />
        </Paper>
      </Grid>
    </Grid>
  );
}
