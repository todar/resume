import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import Main from "./components/main/Main";
import { PDFViewer, Document, Page, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row"
  },
  section: {
    flexGrow: 1
  },
  viewer: {
    width: "100vw",
    height: "100vh"
  }
});

/**
 * This resume is all around using [react-pdf](https://www.npmjs.com/package/@react-pdf/renderer) as it
 * works great for quality printing.
 * I origianlly created this using normal JSX components but found that printing HTML to be very
 * poor quality. I was either taking an image of the page and saving it to pdf, or a few tools
 * that converted HTML to a canvas and converted that to an image. Neither worked for me.
 *
 * The one issue I found with react-pdf is that the components are very limited, and styling doesn't
 * work quite the way I would expect. For instance, `fontSize` doesn't work with `px`.
 *
 * With that said I'm happy with this so far, and it was a good learning expereince. This is not hosted
 * anywhere at the moment but I might add it to my website after I clean it up a bit.
 */
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
