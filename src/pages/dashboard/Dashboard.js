import React from "react";

import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

// import Chart from "./Chart";
import Deposits from "./Deposits";
// import ProjectsList from "./ProjectsList";

import chart from "./chart.png";

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
            height: 370,
          }}
        >
          {/* <Chart /> */}
          <div>
            <FormControl sx={{ width: 150, mr: 2 }}>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Product"
                defaultValue="EzyTrac"
              >
                <MenuItem value="EzyTrac">EzyTrac</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ width: 150 }}>
              <InputLabel id="demo-simple-select-label">Location</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Location"
                defaultValue="Balcatta"
              >
                <MenuItem value="Balcatta">Balcatta</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </div>
          <img src={chart} height={282} />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            height: 370,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      {/* Projects List */}
      {/* <Grid item xs={12}>
        <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
          <ProjectsList />
        </Paper>
      </Grid> */}
    </Grid>
  );
}
