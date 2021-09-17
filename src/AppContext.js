import React from "react";

const ProjectsStateContext = React.createContext();
const ProjectsUpdaterContext = React.createContext();

function ProjectsProvider(props) {
  const [projects, setProjects] = React.useState([
    {
      name: "Project 1",
      country: "Australia",
      description: "First project",
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
      ],
    },
    {
      name: "Important Project",
      country: "USA",
      description: "Very important project",
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
          name: "EzyTrac",
          quantity: 10,
          from: "2021-09-10",
          to: "2021-09-10",
          location: "USA",
        },
        {
          name: "EzyGiro",
          quantity: 10,
          from: "2021-09-10",
          to: "2021-09-10",
          location: "USA",
        },
      ],
    },
    {
      name: "Winning Project",
      country: "Balcatta",
      description: "Give me the prize",
      assets: [
        {
          name: "DA MONEY",
          quantity: 500,
          from: "2021-09-10",
          to: "2021-09-10",
          location: "Balcatta",
        },
      ],
    },
  ]);

  return (
    <ProjectsStateContext.Provider value={projects}>
      <ProjectsUpdaterContext.Provider value={setProjects}>
        {props.children}
      </ProjectsUpdaterContext.Provider>
    </ProjectsStateContext.Provider>
  );
}

function useProjectsState() {
  const projectsState = React.useContext(ProjectsStateContext);
  if (typeof projectsState === "undefined") {
    throw new Error("useProjectsState must be used within a ProjectsProvider");
  }

  return projectsState;
}

function useProjectsUpdater() {
  const setProjects = React.useContext(ProjectsUpdaterContext);
  if (typeof setProjects === "undefined") {
    throw new Error(
      "useProjectsUpdater must be used within a ProjectsProvider"
    );
  }

  const addProject = React.useMemo(
    () => (newProj) => {
      setProjects((prevState) => [...prevState, newProj]);
    },
    [setProjects]
  );

  return addProject;
}

export { ProjectsProvider, useProjectsState, useProjectsUpdater };
