import React from "react";

import Typography from "@mui/material/Typography";

import AssetsList from "./AssetsList";
import img from "./DRILLHOLES_SATELLITE.JPG";

export default function Summary({ project }) {
  return (
    <>
      <div style={{ display: "flex", marginTop: 16 }}>
        <div style={{ flex: "50%" }}>
          <Typography variant="h4" color="primary" gutterBottom sx={{ mt: 2 }}>
            Project
          </Typography>
          <Typography variant="h6" gutterBottom>
            Name
          </Typography>
          <Typography gutterBottom>{project.name || "-"}</Typography>
          <Typography variant="h6" gutterBottom>
            Country
          </Typography>
          <Typography gutterBottom>{project.country || "-"}</Typography>
          <Typography variant="h6" gutterBottom>
            Description
          </Typography>
          <Typography gutterBottom>{project.description || "-"}</Typography>
          <Typography
            component="h3"
            variant="h6"
            color="primary"
            sx={{ mt: 2 }}
          >
            Products
          </Typography>
        </div>
        <img src={img} width={650} />
      </div>
      <AssetsList assets={project.assets} />
    </>
  );
}
