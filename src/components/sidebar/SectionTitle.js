import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 15,
    color: "#fff",
    marginBottom: "8px"
  }
});

const SectionTitle = ({ children }) => (
  <Text style={styles.sectionTitle}>{children}</Text>
);

export default SectionTitle;
