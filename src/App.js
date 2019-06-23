import React from "react";
import Page from "./components/Page";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Page style={{ display: "flex" }}>
        <Sidebar />
        <MainContent />
      </Page>
    </div>
  );
}

export default App;
