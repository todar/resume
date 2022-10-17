import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    marginLeft: "30px",
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.2,
    whiteSpace: "pre-wrap",
  },
});

const Article = ({ children }) => (
  <View style={styles.container}>
    <Text>{children}</Text>
  </View>
);

export default Article;
