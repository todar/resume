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
import content from '../../resume.json'

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
  return (
    <View>
      <SectionTitle title={content.titles.about} icon={about} />
      <Article>
        {content.about}
      </Article>
    </View>
  );
};

const WorkExperince = () => {
  return (
    <View>
      <SectionTitle title={content.titles.experience} icon={jobs} />
      <Albertsons />
      <Saguaro />
    </View>
  );
};


const CreateWithNote = () => (
  <Text style={styles.CreateWithNote}>{content.createdNote}</Text>
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
