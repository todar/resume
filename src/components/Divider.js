import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "#9aa0a6",
    margin: "8px 0 8px",
    width: "100%",
    height: ".5px",
  },
});

const Divider = () => <View style={styles.divider} />;

export default Divider;
