import React from "react";

const ProjectsStateContext = React.createContext();
const ProjectsUpdaterContext = React.createContext();

function ProjectsProvider(props) {
  const [projects, setProjects] = React.useState([
    {
      name: "Project 1",
      country: "Australia",
      description: "Important Project",
      assets: [
        {
          name: "DR304",
          quantity: 3,
          from: "1/1/2015",
          to: "1/6/2015",
          location: "Canada",
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

  const increment = React.useCallback(
    () => (newProj) => setProjects((prevState) => [...prevState, newProj]),
    [setProjects]
  );

  return increment;
}

export { ProjectsProvider, useProjectsState, useProjectsUpdater };
