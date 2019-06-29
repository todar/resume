import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Connect.css";

function Connect() {
  return (
    <div className="Connect">
      <h2>Connect</h2>
      <FontAwesomeIcon icon="map-marker-alt" size="2x" className="light-blue" />
      <p>Phoenix, Arizona</p>
      <FontAwesomeIcon icon="mobile-alt" size="2x" className="light-blue" />
      <p>602 - 935 - 5076</p>
      <FontAwesomeIcon icon="envelope" size="2x" className="light-blue" />
      <p>robert@roberttodar.com</p>
      <FontAwesomeIcon icon="laptop-code" size="2x" className="light-blue" />
      <p>www.roberttodar.com</p>
    </div>
  );
}

export default Connect;
