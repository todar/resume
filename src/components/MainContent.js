import React from "react";
import "./MainContent.css";
import WorkExperience from "./WorkExperience";
import WorkReferences from "./WorkReferences";
import Accomplishments from "./Accomplishments";

/**
 * This will be a container for: work experience, references, and acheivement section.
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function MainContent() {
  return (
    <div className="MainContent">
      <WorkExperience />
      <hr />
      <WorkReferences />
      <hr />
      <Accomplishments />
    </div>
  );
}

export default MainContent;
