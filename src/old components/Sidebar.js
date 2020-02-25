import React from "react";
import styled from "styled-components"
import Header from "./Header";
import About from "./About";
import Connect from "./Connect";
import Skills from "./Skills";

const StyledSidebar = styled.aside`
    background-color: #282c34;
    color: #999;
    height: calc(100% - 50px);
    text-align: center;
    width: 200px;
    padding: 25px;

    &hr {
      border: 0.5px solid #999;
    }

    @media print {
      padding: 34px;
    }
`

/**
 * This will be a container for: about me, connect, and skills section.
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function Sidebar() {
  return (
    <StyledSidebar >
      <Header />
      <hr />
      <About />
      <hr />
      <Connect />
      <hr />
      <Skills />
    </StyledSidebar>
  );
}

export default Sidebar;
