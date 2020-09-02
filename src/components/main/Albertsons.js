import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import albertsonsLogo from "../../assets/Albertsons-50x50.png";
import { useContent } from "../../stores/content";
import PositionTitle from "./PositionTitle";
import Article from "./Article";

const styles = StyleSheet.create({
  content: {
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
  },
  jobPosition: {
    marginBottom: 8,
  },
  timeline: {
    position: "absolute",
    height: 159,
    width: "1px",
    left: 9,
    top: 51,
    backgroundColor: "#e9e9e9",
  },
  timelineDot1: {
    position: "absolute",
    borderRadius: 500,
    height: "8px",
    width: "8px",
    left: 5.5,
    top: 40,
    backgroundColor: "#cfcfcf",
  },
  timelineDot2: {
    position: "absolute",
    borderRadius: 500,
    height: "8px",
    width: "8px",
    left: 5.5,
    top: 214,
    backgroundColor: "#cfcfcf",
  },
});

const Albertsons = () => {
  const {
    workExperience: {
      jobs: [{ company, timeframe }],
    },
  } = useContent();

  return (
    <View style={{ marginBottom: 10 }}>
      <View style={styles.jobPosition}>
        <JobHeader
          src={albertsonsLogo}
          company={company}
          timeframe={timeframe}
        />
        <View style={styles.timelineDot1} />
        <View style={styles.timeline} />
        <View style={styles.timelineDot2} />
        <PositionTitle
          title={"Digital Workforce Analyst II"}
          timeframe={"Aug 2020 – Present"}
        />
        <Article>
          The lead for creating a standardization of a DevOps workflow using
          automation.
        </Article>
        <ListItem>
          Implementing setup and training to move towards using Git and GitHub
          Enterprise for source control, in order to help manage, track, and
          document all the current and future code sources.
        </ListItem>
        <ListItem>
          Creating and documenting a DevOps workflow using GitHub actions for
          continuous integration and continuous deployment. This will include
          automating the testing, building, and deployment of code.
        </ListItem>
        <ListItem>
          Creating documentation for best practices in writing Python including
          a thorough guideline for writing unit tests.
        </ListItem>
        <ListItem>
          Performing code review of VBA and Python to ensure coding standards
          are followed as well as looking for any opportunities for
          optimizations.
        </ListItem>
      </View>
      <View>
        <PositionTitle
          title={"Business Analyst"}
          timeframe={"Dec 2015 – Aug 2020"}
        />
        <Article>
          The lead software developer for internal auditing within product
          allowances.
        </Article>
        <ListItem>
          Built a fullstack CRUD application that is used as the primary tool
          for data analysis and process automation. This application has aided
          in increasing overall audit findings by over 10% and saves over 46,000
          labor hours annually.
        </ListItem>
        <ListItem>
          Reviewed a key audit process and identified that a substantial amount
          of data was being missed by the audit. Implemented new query designs
          that captured all missing data, resulting in a 60% increase of dollar
          findings for that audit.
        </ListItem>
        <ListItem>
          Created and maintained a system of writing thorough documentation for
          the coding style guide, best practices, and all release notes.
        </ListItem>
      </View>
    </View>
  );
};

export default Albertsons;
