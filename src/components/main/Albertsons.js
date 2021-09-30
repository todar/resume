import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import PositionTitle from "./PositionTitle";
import Article from "./Article";
import content from '../../resume.json'
const {logo, company, startdate, enddate, positions} = content.experience[0]

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
    height: 180,
    width: "1px",
    left: 9,
    top: 48,
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
    top: 225,
    backgroundColor: "#cfcfcf",
  },
});

const Albertsons = () => {
  return (
    <View>
      <View>
        <JobHeader
          src={require(`../../assets/${logo}`)}
          company={company}
          timeframe={`${startdate} - ${enddate}`}
        />
        <View style={styles.timelineDot1} />
        <View style={styles.timeline} />
        <View style={styles.timelineDot2} />
      </View>

        {positions.map(position => (
          <View style={styles.jobPosition}>
            <PositionTitle
              title={position.title}
              timeframe={`${position.startdate} - ${position.enddate}`}
            />
            <Article>
              {position.description}
            </Article>
              {position.highlights.map(highlight => (
                <ListItem>{highlight}</ListItem>
              ))}
            
          </View>
        ))}
    </View>
  );
};

export default Albertsons;
