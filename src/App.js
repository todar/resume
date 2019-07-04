import React from "react";
import Page from "./components/Page";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

/**
 * My own personal resume.
 * This is not mobile-friendly since the `Page` component is a fixed size.
 * I might consider changing that down the road...
 *
 * @author [Robert Todar](https://github.com/todar)
 * @example An old example can be found on [codepen](https://codepen.io/todar/pen/Epdvbw)
 */
function App() {
  const printToPDF = e => {
    window.print();
  };

  return (
    <div className="App">
      <button className="btn" onClick={printToPDF}>
        Print
      </button>
      <Page style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </Page>
    </div>
  );
}

export default App;
