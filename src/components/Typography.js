import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

/**
 * This is not in use!
 * The thought about this is to make all text uniform throughout this application.
 * As the resume looks good now this will be a task to come back to refactor and
 * clean up the code a bit!
 */

const styles = StyleSheet.create({
  p: {},
  h1: {
    fontSize: 15,
    color: "#2a2b2e"
  },
  sectionTitle: {
    fontSize: 15,
    color: "#fff",
    marginBottom: "8px"
  },
  title: {
    fontSize: "15"
  },
  content: {
    fontSize: 10,
    marginBottom: "8px"
  },
  content: {
    fontSize: 9,
    lineHeight: 1.35
  }
});

export const P = ({ children, onDark = false }) => (
  <Text
    style={{
      fontFamily: "Open Sans",
      fontSize: 10,
      lineHeight: "1.2px",
      marginBottom: 0,
      paddingBottom: 0,
      color: onDark ? "#9aa0a6" : "#333"
    }}
  >
    {children}
  </Text>
);

export const H1 = ({ children, onDark = false }) => (
  <Text
    style={{
      fontFamily: "Open Sans",
      fontSize: 18,
      lineHeight: "1.2px",
      marginBottom: 0,
      paddingBottom: 0,
      color: onDark ? "#fff" : "#333"
    }}
  >
    {children}
  </Text>
);

export const H2 = ({ children, onDark = false }) => (
  <Text
    style={{
      fontFamily: "Open Sans",
      fontSize: 15,
      lineHeight: "1.2px",
      marginBottom: 0,
      paddingBottom: 0,
      color: onDark ? "#fff" : "#333"
    }}
  >
    {children}
  </Text>
);

const Typography = () => <Text></Text>;

export default Typography;
