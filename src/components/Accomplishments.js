import React from "react";
import styled from "styled-components"


const List = styled.div`
  list-style: none;
  padding: 0;
  margin: 0 0 0 12px;
  padding: 0 4px;

  &li {
    padding: 2px 0;
  }

  &li:before {
    content: "\2022";
    color: rgb(121, 182, 242); /* or whatever color you prefer */
    display: inline-block;
    width: 1em;
    font-weight: bold;
    margin-left: -1em;
  }
`

function Accomplishments() {
  return (
    <div>
      <h2 className="title-light">Accomplishments</h2>
      <List>
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
      </List>
    </div>
  );
}

export default Accomplishments;
