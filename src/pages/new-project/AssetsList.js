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

import AssetsFormDialog from "./AssetsFormDialog";

export default function AssetsList({ assets, setAssets }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (asset) => () => {
    console.log(asset);
    if (asset) {
      setAssets([asset]);
    }
    setOpen(false);
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ mt: 3 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Asset Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">From</TableCell>
              <TableCell align="right">To</TableCell>
              <TableCell align="right">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.quantity}</TableCell>
                <TableCell align="right">{row.from}</TableCell>
                <TableCell align="right">{row.to}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
              </TableRow>
            ))}
            {assets.length === 0 && (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" rowSpan="5">
                  No Assets
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ mt: 2, display: "flex", justifyContent: "end" }}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={handleClickOpen}
        >
          Add an Asset
        </Button>
      </Box>
      {open && <AssetsFormDialog open={open} handleClose={handleClose} />}
    </>
  );
}
