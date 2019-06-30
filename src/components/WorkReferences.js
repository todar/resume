import React from "react";
import WorkReferenceContact from "./WorkReferenceContact";

function WorkReferences() {
  return (
    <div>
      <h2 className="title-light">REFERENCES</h2>
      <WorkReferenceContact
        name="Greg Rousseau"
        title="Group VP National Service Center at Albertsons Companies"
        email="greg.rousseau@salbertsons.com"
      />
      <WorkReferenceContact
        name="Tracey Schmitz"
        title="Director of Allowance Billing at Albertsons Companies"
        email="tracey.schmitz@albertsons.com"
      />
      <WorkReferenceContact
        name="David Lehn"
        title="Manager of Allowance Audit at Albertsons Companies"
        email="david.lehn@albertsons.com"
      />
      <WorkReferenceContact
        name="Amber Pampas"
        title="Director at Saguaro Drywall"
        email="amber.pampas@saguharo.com"
      />
    </div>
  );
}

export default WorkReferences;
