import React from "react";
import Sidebar from "./components/Sidebar"
import Main from "./components/Main"
import { PDFViewer, Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  section: {
    flexGrow: 1
  },
  viewer: {
    width: '100%',
    height: '100vh'
  }
});

const App = () => (
  <PDFViewer style={styles.viewer}>
    <Document>
      <Page size="A4" style={styles.page}>
        <Sidebar />
        <Main />
      </Page>
    </Document>
  </PDFViewer>
);

export default App;