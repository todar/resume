import React from "react";
import SectionTitle from "./SectionTitle";
import certLogo from "../../assets/accomplishment.png";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import content from '../../resume.json'


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

const Certificate = ({ name, issuedBy, issuedDate, expires, credentialId, logo }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} src={require(`../../assets/${logo}`)} />
      <View>
        <Text>{name}</Text>
        <Text>{issuedBy} - {issuedDate} - {expires}</Text>
        <Text>Credential ID {credentialId}</Text>
      </View>
    </View>
  )
};

const Certifications = () => (
  <View>
    <SectionTitle icon={certLogo} title="Certifications" />
    {content.certifications.map(({ name, issuer, issued, expires, credential, logo }) => (
      <Certificate
        key={name}
        name={name}
        issuedBy={issuer}
        issuedDate={issued}
        expires={expires}
        credentialId={credential}
        logo={logo}
      />
    ))}
  </View>
);

export default Certifications;
