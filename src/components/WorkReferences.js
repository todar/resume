import React from "react";
import styled from "styled-components"
import WorkReferenceContact from "./WorkReferenceContact";

const References = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

function WorkReferences() {
  return (
    <>
      <h2 className="title-light">REFERENCES</h2>
      <References>
      <WorkReferenceContact
        name="Greg Rousseau"
        title="Group VP National Service Center"
        email="greg.rousseau@albertsons.com"
        company="Albertsons Companies"
      />
      <WorkReferenceContact
        name="Tracey Schmitz"
        title="Director of Allowance Billing"
        company="Albertsons Companies"
        email="tracey.schmitz@albertsons.com"
      />
      <WorkReferenceContact
        name="David Lehn"
        title="Manager of Allowance Audit"
        company="Albertsons Companies"
        email="david.lehn@albertsons.com"
      />
      <WorkReferenceContact
        name="Amber Pampas"
        title="Director"
        company="Saguaro Drywall"
        email="amber.pampas@saguharo.com"
      />
      </References>
    </>
  );
}

export default WorkReferences;
