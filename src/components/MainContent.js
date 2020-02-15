import React from "react";
import styled from 'styled-components';
import WorkExperience from "./WorkExperience";
import WorkReferences from "./WorkReferences";
import Accomplishments from "./Accomplishments";

const Main = styled.div`
  padding: 0 25px;
  flex-grow: 1;
  width: 100px;
`

/**
 * This will be a container for: work experience, references, and acheivement section.
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function MainContent() {
  return (
    <Main>
      <WorkExperience />
      <hr />
      <WorkReferences />
      <hr />
      <Accomplishments />
    </Main>
  );
}

export default MainContent;
