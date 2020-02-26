import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10
  },
  logo: {
    width: "25px",
    marginRight: 10
  },
  title: {
    color: "#000",
    fontSize: 10
  },
  content: {
    fontSize: 10,
    color: "#333"
  }
});

const JobHeader = ({ src, alt, title, company, timeframe }) => (
  <View style={styles.header}>
    <View>
      <Image style={styles.logo} src={src} alt={alt} />
    </View>
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{company}</Text>
      <Text style={styles.content}>{timeframe}</Text>
    </View>
  </View>
);

export default JobHeader;
