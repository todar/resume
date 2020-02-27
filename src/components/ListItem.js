import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginBottom: 0
  },
  bulletPoint: {
    marginRight: 6,
    fontSize: 10,
    color: "#333"
  },
  nestedBulletPoint: {
    marginRight: 6,
    fontSize: 10,
    marginTop: 2,
    color: "#333"
  },
  content: {
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 1
  },
  nestedItem: {
    flexDirection: "row",
    marginLeft: 32
  }
});

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
);

const ListItem = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Content style={styles.itemContent}>{children}</Content>
  </View>
);

export const NestedListItem = ({ children }) => (
  <View style={styles.nestedItem}>
    <Text style={styles.nestedBulletPoint}>&#186;</Text>
    <Content style={styles.itemContent}>{children}</Content>
  </View>
);

export default ListItem;
