import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

import jobs from "../../assets/jobs.png";
import about from "../../assets/About.png";

import Divider from "../Divider";
import Albertsons from "./Albertsons";
import Saguaro from "./Saguaro";
import Article from "./Article";

import SectionTitle from "./SectionTitle";

import Certifications from "./Certifications";
import { useContent } from "../../stores/content";

/**
 * Yikes, a bit a a mess!😞
 * This is all here, but need to refactor and get this code looking good!
 * Really this file just contains several components that need to be in their own file.
 */
const styles = StyleSheet.create({
  main: {
    padding: "18px 18px 18px 18px",
    flexBasis: "400px",
    color: "#333",
  },
  mainTitle: {
    fontSize: 15,
    color: "#2a2b2e",
  },
  referenceGroup: {
    flexDirection: "row",
  },
  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: "20px",
    height: "20px",
    marginRight: 10,
  },
  CreateWithNote: {
    fontSize: 8,
    position: "absolute",
    bottom: "18px",
    right: "18px",
    color: "#70757a",
    fontStyle: "italic",
  },
  content: {
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
  },
  contentGroup: {
    marginLeft: "30px",
  },
});

const About = () => {
  const { aboutSection: { title, content } } = useContent();
  return (
    <View>
      <SectionTitle title={title} icon={about} />
      <Article>
        {content}
      </Article>
    </View>
  );
};

const WorkExperince = () => {
  const { workExperience: { title } } = useContent();
  return (
    <View>
      <SectionTitle title={title} icon={jobs} />
      <Albertsons />
      <Saguaro />
    </View>
  );
};

// const Accomplishments = () => (
//   <View>
//     <View style={styles.titleGroup}>
//       <Image style={styles.logo} src={accomplishment} alt="" />
//       <Text style={styles.mainTitle}>Accomplishments</Text>
//     </View>
//     <ListItem>
//       Created a full software application within VBA that has custom-built:
//     </ListItem>
//     <NestedListItem>version control</NestedListItem>
//     <NestedListItem>distribution system</NestedListItem>
//     <NestedListItem>user analytics</NestedListItem>
//     <NestedListItem>event logging</NestedListItem>
//     <NestedListItem>data caching</NestedListItem>
//     <NestedListItem>
//       and full CRUD capabilities to multiple data sources
//     </NestedListItem>
//     <ListItem>
//       Major contributor in increasing allowance audit findings by millions of
//       dollars each year.
//     </ListItem>
//     <ListItem>
//       Certified in Robotic Process Automation through Automation Anywhere.
//     </ListItem>
//   </View>
// );

const CreateWithNote = () => (
  <Text style={styles.CreateWithNote}>*This resume was made using React</Text>
);

const Main = () => (
  <View style={styles.main}>
    <About />
    <Divider />
    <WorkExperince />
    <Divider />
    <Certifications />
    <CreateWithNote />
  </View>
);

export default Main;
