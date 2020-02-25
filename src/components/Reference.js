import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  root: {
    fontSize: 8,
    lineHeight: 1.25,
    flexGrow: 1,
    flexBasis: 100,
    marginBottom: 10
  },
  name: {
    fontWeight: 'extraBold',
    fontSize: 10,
    color: '#000'
  },
  content: {},
});

const Reference = ({ name, title, company, email }) => (
  <View style={styles.root}>
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.content}>{title}</Text>
    <Text style={styles.content}>{company}</Text>
    <Text style={styles.content}>{email}</Text>
  </View>
);

export default Reference;