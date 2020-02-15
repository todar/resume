import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledPage = styled.div`
    background: white;
    display: block;
    margin: 0 auto;
    margin-bottom: 0.5cm;
    margin-top: 0.5cm;
    box-shadow: 0 0 0.5cm rgba(0, 0, 0, 0.5);
    width: 21cm;
    height: 29.7cm;
    display: flex;

  @media print {
    margin: 0;
    padding: 0;
    box-shadow: 0;
    width: 100%;
    height: 100%;
  }
`

/**
 * This creates a container that looks similar to a word document.
 * This is not mobile-friendly since this component is a fixed size.
 * I might consider changing that down the road...
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function Page({ children }) {
  return (
    <StyledPage>
      {children}
    </StyledPage>
  );
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Page;
