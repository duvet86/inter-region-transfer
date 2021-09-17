import React from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const assetsList = [
  "Act3",
  "Sprint",
  "EzyTrac",
  "EzyGiro",
  "AMC TORQUE",
  "GUARD",
  "AMC EZEE DRILL",
  "AMC CR 650",
  "AMC GEL",
  "AMC ROD GREASE XTRA TACKY",
];

export default function AssetsFormDialog({ open, handleClose }) {
  const [asset, setAsset] = React.useState({
    name: "",
    quantity: 0,
    from: "",
    to: "",
    location: "",
  });

  const handleChangeAssetName = (event, name) => {
    setAsset({
      ...asset,
      name,
    });
  };

  const handleChangeQuantity = (event) => {
    setAsset({
      ...asset,
      quantity: event.target.value,
    });
  };

  const handleChangeFrom = (event) => {
    setAsset({
      ...asset,
      from: event.target.value,
    });
  };

  const handleChangeTo = (event) => {
    setAsset({
      ...asset,
      to: event.target.value,
    });
  };

  const handleChangeLocation = (event) => {
    setAsset({
      ...asset,
      location: event.target.value,
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
        Add Product
      </DialogTitle>
      <DialogContent>
        <Box
          sx={{
            pt: 2,
          }}
        >
          <Autocomplete
            value={asset.name}
            onChange={handleChangeAssetName}
            disablePortal
            options={assetsList}
            renderInput={(params) => (
              <TextField {...params} label="Product Name" />
            )}
            sx={{ mb: 2 }}
          />
          <TextField
            value={asset.quantity}
            onChange={handleChangeQuantity}
            fullWidth
            label="Quantity"
            variant="outlined"
            type="number"
            sx={{ mb: 2 }}
          />
          <TextField
            value={asset.from}
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
            value={asset.to}
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
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel id="location">Dispatch Location</InputLabel>
            <Select
              labelId="location"
              value={asset.location}
              label="Dispatch Location"
              onChange={handleChangeLocation}
            >
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="canada">Canada</MenuItem>
              <MenuItem value="brazil">Brazil</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </DialogContent>
      <DialogActions sx={{ mb: 2 }}>
        <Button onClick={handleClose()} sx={{ width: 120 }}>
          Cancel
        </Button>
        <Button
          onClick={handleClose(asset)}
          variant="contained"
          sx={{ width: 120 }}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
