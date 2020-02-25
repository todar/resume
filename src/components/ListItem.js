import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    marginBottom: 0
  },
  bulletPoint: {
    marginRight: 6,
    fontSize: 9,
    color: '#2a2b2e',
  },
  content: {
    fontSize: 10,
    color: '#2a2b2e',
    lineHeight: 1.2
  },
  nestedItem: {
    flexDirection: 'row',
    marginLeft: 32
  }
});

const Content = ({ children }) => (
  <Text style={styles.content}>{children}</Text>
)

const ListItem = ({ children }) => (
  <View style={styles.item}>
    <Text style={styles.bulletPoint}>•</Text>
    <Content style={styles.itemContent}>{children}</Content>
  </View>
);

export const NestedListItem = ({ children }) => (
  <View style={styles.nestedItem}>
    <Text style={styles.bulletPoint}>o</Text>
    <Content style={styles.itemContent}>{children}</Content>
  </View>
);

export default ListItem;

