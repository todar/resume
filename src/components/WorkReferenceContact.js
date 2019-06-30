import React from "react";
import PropTypes from "prop-types";
import "./WorkReferenceContact.css";

function WorkReferenceContact({ name, title, email }) {
  return (
    <div className="WorkReferenceContact">
      <h3 className="WorkReferenceContact-name">{name}</h3>
      <h4 className="WorkReferenceContact-title">{title}</h4>
      <p className="WorkReferenceContact-email">{email}</p>
    </div>
  );
}

WorkReferenceContact.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default WorkReferenceContact;
