import React from "react";
import styled from "styled-components"
import PropTypes from "prop-types";

const ContactSection = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0;

    & > * {
      margin: 0;
    }
`

const ContactName = styled.h3`
  font-weight: 500;
`
const ContactTitle = styled.h4`
  font-weight: 400;
`
const Company = styled.h4`
  font-weight: 400;
`

function WorkReferenceContact({ name, title, email, company }) {
  return (
    <ContactSection>
      <ContactName>{name}</ContactName>
      <ContactTitle>{title}</ContactTitle>
      <Company>{company}</Company>
      <p>{email}</p>
    </ContactSection>
  );
}

WorkReferenceContact.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
};

export default WorkReferenceContact;
