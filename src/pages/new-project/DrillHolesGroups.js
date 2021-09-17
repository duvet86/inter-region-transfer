import React from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/system/Box";

import AddIcon from "@mui/icons-material/Add";

import DrillHolesGroupForm from "./DrillHolesGroupForm";

export default function DrillHolesGroups({ drillHolesGroups, setProject }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (newGroup) => () => {
    if (newGroup) {
      setProject((prevState) => ({
        ...prevState,
        drillHolesGroups: [...prevState.drillHolesGroups, newGroup],
      }));
    }
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Group Name</TableCell>
              <TableCell align="right">Number of Rigs</TableCell>
              <TableCell align="right">From</TableCell>
              <TableCell align="right">To</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {drillHolesGroups.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.rigs}</TableCell>
                <TableCell align="right">{row.from}</TableCell>
                <TableCell align="right">{row.to}</TableCell>
              </TableRow>
            ))}
            {drillHolesGroups.length === 0 && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" rowSpan="5">
                  No Groups
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {setProject && (
        <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={handleClickOpen}
          >
            Add a Group
          </Button>
        </Box>
      )}
      {open && <DrillHolesGroupForm open={open} handleClose={handleClose} />}
    </>
  );
}
