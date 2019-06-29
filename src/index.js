import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { library } from "@fortawesome/fontawesome-svg-core";
// import { faEnvelope } from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope,
  faLaptopCode
} from "@fortawesome/free-solid-svg-icons";

library.add(faMobileAlt, faMapMarkerAlt, faEnvelope, faLaptopCode);

ReactDOM.render(<App />, document.getElementById("root"));
