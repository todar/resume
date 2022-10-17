import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginLeft: "30px",
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.2,
    marginBottom: 4,
    whiteSpace: "pre-wrap",
  },
  title: {
    fontWeight: "bold",
    color: "#111",
    fontSize: 10,
  },
});

const PositionTitle = ({ title, timeframe }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text>{timeframe}</Text>
  </View>
);

export default PositionTitle;
