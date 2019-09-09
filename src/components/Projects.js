import React, { useState } from "react";
import { useSelectedProjectsValue, useProjectsValue } from "../contexts";

export const Projects = ({ activeValue = null }) => {
  const [active, setActive] = useState(activeValue);
  const { setSelectedProjects } = useSelectedProjectsValue();
  const { projects } = useProjectsValue();

  return (
    projects &&
    projects.map(project => (
      <li
        key={project.projectId}
        data-testid="project-action-parent"
        data-doc-id={project.docId}
        className={
          active === project.projectId 
          ? 'active sidebar__project'
            : 'sidebar__project'
        }
        onKeyDown={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
        onClick={() => {
          setActive(project.projectId);
          setSelectedProjects(project.projectId);
        }}
      >{('Project', JSON.stringify(project))}</li>
  ))
  );
};
