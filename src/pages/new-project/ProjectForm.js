import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ProjectForm({ project, setProject }) {
  const handleNameChange = (event) => {
    setProject((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const handleCountryChange = (event) => {
    setProject((prevState) => ({
      ...prevState,
      country: event.target.value,
    }));
  };

  const handleDescriptionChange = (event) => {
    setProject((prevState) => ({
      ...prevState,
      description: event.target.value,
    }));
  };

  return (
    <Box
      sx={{
        pt: 2,
      }}
    >
      <TextField
        fullWidth
        label="Project Name"
        variant="outlined"
        sx={{ mb: 2 }}
        value={project.name}
        onChange={handleNameChange}
      />
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="country">Country</InputLabel>
        <Select
          labelId="country"
          label="Country"
          value={project.country}
          onChange={handleCountryChange}
        >
          <MenuItem value="USA">USA</MenuItem>
          <MenuItem value="canada">Canada</MenuItem>
          <MenuItem value="brazil">Brazil</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        id="description"
        label="Description"
        multiline
        rows={4}
        sx={{ mb: 2 }}
        value={project.description}
        onChange={handleDescriptionChange}
      />
    </Box>
  );
}
