import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Content = styled.p`
  margin: 2px 0 12px;
`

function Connect() {
  return (
    <div>
      <h2>Connect</h2>
      <FontAwesomeIcon icon="map-marker-alt" size="2x" className="light-blue" />
      <Content>Phoenix, Arizona</Content>
      <FontAwesomeIcon icon="mobile-alt" size="2x" className="light-blue" />
      <Content>602 - 935 - 5076</Content>
      <FontAwesomeIcon icon="envelope" size="2x" className="light-blue" />
      <Content>robert@roberttodar.com</Content>
      <FontAwesomeIcon icon="laptop-code" size="2x" className="light-blue" />
      <Content>www.roberttodar.com</Content>
    </div>
  );
}

export default Connect;
