import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 1,
  },
  bulletPoint: {
    marginRight: 6,
    marginLeft: 40,
    fontSize: 10,
    color: "#333",
  },
  nestedBulletPoint: {
    marginLeft: 10,
    marginRight: 6,
    fontSize: 10,
    marginTop: 2,
    color: "#333",
  },
  content: {
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 1,
    marginRight: 40,
    whiteSpace: "pre-wrap",
  },
  nestedItem: {
    flexDirection: "row",
    marginLeft: 32,
  },
});

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
);

const ListItem = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Content>{children}</Content>
  </View>
);

export const NestedListItem = ({ children }) => (
  <View style={styles.nestedItem}>
    <Text style={styles.nestedBulletPoint}>&#186;</Text>
    <Content>{children}</Content>
  </View>
);

export default ListItem;
