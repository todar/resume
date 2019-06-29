import React from "react";
import Header from "./Header";
import About from "./About";
import Connect from "./Connect";
import Skills from "./Skills";

import "./Sidebar.css";

/**
 * This will be a container for: about me, connect, and skills section.
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function Sidebar() {
  return (
    <aside className="Sidebar">
      <Header />
      <hr />
      <About />
      <hr />
      <Connect />
      <hr />
      <Skills />
    </aside>
  );
}

export default Sidebar;
