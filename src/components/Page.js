import React from "react";
import PropTypes from "prop-types";
import "./Page.css";

/**
 * This creates a container that looks similar to a word document.
 * This is not mobile-friendly since this component is a fixed size.
 * I might consider changing that down the road...
 *
 * @author [Robert Todar](https://github.com/todar)
 */
function Page({ children, size = "A4", style }) {
  return (
    <div className={`Page ${size}`} style={style}>
      {children}
    </div>
  );
}

Page.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string,
  style: PropTypes.object
};

export default Page;
