import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Card from "@mui/material/Card";

import img from "./DRILLHOLES_SATELLITE.JPG";

const holes = [
  {
    name: "Hole 1",
    depth: 10,
    status: "Drilled",
  },
  {
    name: "Hole 2",
    depth: 12,
    status: "Drilled",
  },
  {
    name: "Hole 3",
    depth: 80,
    status: "Logged",
  },
  {
    name: "Hole 4",
    depth: 30,
    status: "Logged",
  },
  {
    name: "Hole 5",
    depth: 40,
    status: "Logged",
  },
];

export default function DrillHolesGroupForm({ open, handleClose }) {
  const [group, setGroup] = React.useState({
    name: "",
    rigs: 0,
    from: "",
    to: "",
  });

  const handleChangeName = (event) => {
    setGroup({
      ...group,
      name: event.target.value,
    });
  };

  const handleChangeRigs = (event) => {
    setGroup({
      ...group,
      rigs: event.target.value,
    });
  };

  const handleChangeFrom = (event) => {
    setGroup({
      ...group,
      from: event.target.value,
    });
  };

  const handleChangeTo = (event) => {
    setGroup({
      ...group,
      to: event.target.value,
    });
  };

  return (
    <Dialog open={open} onClose={handleClose()} fullScreen>
      <DialogTitle
        id="form-dialog-title"
        sx={{
          bgcolor: "primary.main",
          color: "common.white",
        }}
      >
        Add Group
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            pt: 2,
          }}
        >
          <TextField
            value={group.name}
            onChange={handleChangeName}
            fullWidth
            label="Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            value={group.rigs}
            onChange={handleChangeRigs}
            fullWidth
            label="Number of Rigs"
            variant="outlined"
            type="number"
            sx={{ mb: 2 }}
          />
          <TextField
            value={group.from}
            onChange={handleChangeFrom}
            fullWidth
            label="Required From"
            variant="outlined"
            type="date"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            value={group.to}
            onChange={handleChangeTo}
            fullWidth
            label="Required Until"
            variant="outlined"
            type="date"
            sx={{ mb: 2 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ mb: 2 }}>
        <Button onClick={handleClose()} sx={{ width: 120 }}>
          Cancel
        </Button>
        <Button
          onClick={handleClose(group)}
          variant="contained"
          sx={{ width: 120 }}
        >
          Add
        </Button>
      </DialogActions>
      <Typography
        component="h2"
        variant="h6"
        color="primary"
        sx={{ ml: 2 }}
        gutterBottom
      >
        Current Drill Holes
      </Typography>
      <Card sx={{ display: "flex", justifyContent: "center", p: 2 }}>
        <TableContainer sx={{ mr: 2 }}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Depth</TableCell>
                <TableCell align="right">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {holes.map((row) => (
                <TableRow key={row.name}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.depth}m</TableCell>
                  <TableCell align="right">{row.status}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <img src={img} width={650} />
      </Card>
    </Dialog>
  );
}
