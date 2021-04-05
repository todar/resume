import React from "react";
import SectionTitle from "./SectionTitle";
import certLogo from "../../assets/accomplishment.png";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import automationAnywhereLogo from "../../assets/automation-anywhere.png";
import udemyLogo from "../../assets/udemy.jpg";
import microsoftLogo from "../../assets/microsoft.png";

const certificates = [
  {
    name: "MSUS Cloud Skills Challenge Champion",
    issuedBy: "Microsoft",
    issuedDate: "Issued Feb 2021 - No Expiration Date",
    credentialId: "78677b2b-4495-4324-a84b-eada4e7055f8",
    logo: microsoftLogo
  },
  {
    name: "Modern JavaScript From The Beginning",
    issuedBy: "Udemy",
    issuedDate: "Issued Jul 2020 - No Expiration Date",
    credentialId: "UC-428969d4-ac6c-4d87-a29a-04f860fe3aff",
    logo: udemyLogo,
  },
  {
    name: "Advanced RPA Professional",
    issuedBy: "Automation Anywhere",
    issuedDate: "Issued Jul 2018 - No Expiration Date",
    credentialId: "AAADVC-33265922",
    logo: automationAnywhereLogo,
  },
  
];

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
  },
  logo: {
    width: "20px",
    marginRight: 10,
  },
});

const Certificate = ({ name, issuedBy, issuedDate, credentialId, logo }) => (
  <View style={styles.container}>
    <Image style={styles.logo} src={logo} />
    <View>
      <Text>{name}</Text>
      <Text>{issuedBy} - {issuedDate}</Text>
      <Text>Credential ID {credentialId}</Text>
    </View>
  </View>
);

const Certifications = () => (
  <View>
    <SectionTitle icon={certLogo} title="Certifications" />
    {certificates.map(({ name, issuedBy, issuedDate, credentialId, logo }) => (
      <Certificate
        key={name}
        name={name}
        issuedBy={issuedBy}
        issuedDate={issuedDate}
        credentialId={credentialId}
        logo={logo}
      />
    ))}
  </View>
);

export default Certifications;
