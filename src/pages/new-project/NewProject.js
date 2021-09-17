import React from "react";
import { useHistory } from "react-router-dom";

import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

import { useProjectsUpdater } from "../../AppContext";
import ProjectForm from "./ProjectForm";
import DrillHolesGroups from "./DrillHolesGroups";
import AssetsList from "./AssetsList";
import Summary from "./Summary";

const steps = [
  "Create a Project",
  "Add Drill Holes Group",
  "Summary",
  "Select the Products",
];

export default function NewProject() {
  const history = useHistory();
  const addProject = useProjectsUpdater();
  const [activeStep, setActiveStep] = React.useState(0);
  const [project, setProject] = React.useState({
    name: "",
    country: "",
    description: "",
    drillHolesGroups: [],
    assets: [],
  });

  const handleNext = (step) => () => {
    if (step === 1) {
      setProject((prevState) => ({
        ...prevState,
        assets: [
          {
            name: "Act3",
            quantity: 3,
            from: "2021-09-10",
            to: "2021-09-10",
            location: "Canada",
          },
          {
            name: "Sprint",
            quantity: 10,
            from: "2021-09-10",
            to: "2021-09-10",
            location: "USA",
          },
          {
            name: "AMC GEL",
            quantity: 1000,
            from: "2021-09-10",
            to: "2021-09-10",
            location: "USA",
          },
        ],
      }));
    } else if (step === 2 || step === 3) {
      addProject(project);
      history.push("/");
      return;
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepComponent = (step) => {
    switch (step) {
      case 0:
        return <ProjectForm project={project} setProject={setProject} />;
      case 1:
        return (
          <DrillHolesGroups
            drillHolesGroups={project.drillHolesGroups}
            setProject={setProject}
          />
        );
      case 2:
        return <Summary project={project} />;
      case 3:
        return <AssetsList assets={project.assets} setProject={setProject} />;
      default:
        return null;
    }
  };

  const getLabel = (step) => {
    switch (step) {
      case 0:
        return "Next";
      case 1:
        return "Generate Resources";
      case 2:
        return "Finish";
      case 3:
        return "Finish";
      default:
        return null;
    }
  };

  return (
    <Box sx={{ width: "100%", bgcolor: "background.paper", p: 2 }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <>
        {getStepComponent(activeStep)}
        <Divider sx={{ mt: 2 }} />
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length - 2 && (
            <Button sx={{ mr: 2 }} onClick={handleNext()}>
              Edit Products
            </Button>
          )}
          <Button onClick={handleNext(activeStep)} variant="contained">
            {getLabel(activeStep)}
          </Button>
        </Box>
      </>
    </Box>
  );
}
