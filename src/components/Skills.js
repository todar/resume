import React from "react";
import styled from "styled-components"

const Content = styled.p`
  margin: 8px;
`

function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <Content>VBA</Content>
      <Content>SQL</Content>
      <Content>RPA</Content>
      <Content>HTML</Content>
      <Content>CSS</Content>
      <Content>JavaScript</Content>
      <Content>ReactJs</Content>
    </div>
  );
}

export default Skills;
