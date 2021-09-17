import React from "react";
import { NavLink as RouterLink } from "react-router-dom";

import { useTheme } from "@mui/material/styles";

import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Fab from "@mui/material/Fab";

import DashboardIcon from "@mui/icons-material/Dashboard";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddIcon from "@mui/icons-material/Add";

function ListItemLink({ icon, primary, to }) {
  const theme = useTheme();

  const renderLink = React.useMemo(
    () =>
      React.forwardRef(function Link(itemProps, ref) {
        return (
          <RouterLink
            to={to}
            ref={ref}
            {...itemProps}
            role={undefined}
            activeStyle={{
              fontWeight: "bold",
              color: theme.palette.primary.dark,
            }}
          />
        );
      }),
    [theme.palette.primary.dark, to]
  );

  return (
    <ListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </ListItem>
  );
}

export function MainListItems({ open, to }) {
  return (
    <List component="nav">
      <ListItem component="div">
        {open ? (
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            component={RouterLink}
            to="/inter-region-transfer/new-project"
          >
            New Project
          </Button>
        ) : (
          <Fab
            size="small"
            color="primary"
            component={RouterLink}
            to="/inter-region-transfer/new-project"
          >
            <AddIcon />
          </Fab>
        )}
      </ListItem>
      <ListItemLink
        to="/inter-region-transfer"
        primary="Dashboard"
        icon={<DashboardIcon />}
      />
      <ListItemLink
        to="/inter-region-transfer/projects"
        primary="Projects"
        icon={<WorkOutlineIcon />}
      />
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Products" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Reports" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Integrations" />
      </ListItem>
    </List>
  );
}

export const secondaryListItems = (
  <>
    <ListSubheader component="div" inset>
      Quick Reports
    </ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current Date" />
    </ListItem>
  </>
);
