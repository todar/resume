import React from "react";
import { Text, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  content: {
    fontSize: 10,
    marginBottom: "8px",
    // fontFamily: "Oepn Sans"
  },
});

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
);

export default Content;
