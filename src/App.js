import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import {
  PDFViewer,
  Document,
  Page,
  StyleSheet,
  Font
} from "@react-pdf/renderer";

Font.register({
  family: "Oepn Sans",
  src: "https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf"
});

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  section: {
    flexGrow: 1
  },
  viewer: {
    width: "100%",
    height: "100vh"
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
