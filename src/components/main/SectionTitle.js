import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  mainTitle: {
    fontSize: 15,
    color: "#2a2b2e",
  },
  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  logo: {
    width: "20px",
    height: "20px",
    marginRight: 10,
  },
});

const SectionTitle = ({ title, icon }) => (
  <View style={styles.titleGroup}>
    <Image style={styles.logo} src={icon} />
    <Text style={styles.mainTitle}>{title}</Text>
  </View>
);

export default SectionTitle;
