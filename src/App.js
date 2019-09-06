import React from "react";
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./contexts";

export const App = () => {
  return (
    <SelectedProjectProvider>
      <ProjectsProvider>
        <div className="App">
          <Header />
          <Sidebar />
          <Content />
        </div>
      </ProjectsProvider>
    </SelectedProjectProvider>
  );
};
