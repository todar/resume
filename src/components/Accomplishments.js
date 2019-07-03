import React from "react";
import "./Accomplishments.css";

function Accomplishments() {
  return (
    <div className="Accomplishments">
      <h2 className="title-light">Accomplishments</h2>
      <ul style={{ margin: "0 0 0 12px", padding: "0 4px" }}>
        <li>
          Self taught programmer. Learned from documentation, online videos, and
          StackOverflow.
        </li>
        <li>
          Certified in Robotic Process Automation through Automation Anywhere.
        </li>
        <li>
          Developed tools and queries that have helped increase audit findings
          by over 15 million.
        </li>
        <li>Annually saving over 12,000 work hours through automation.</li>
      </ul>
    </div>
  );
}

export default Accomplishments;
