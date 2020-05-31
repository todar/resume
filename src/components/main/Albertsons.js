import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import albertsonsLogo from "../../assets/Albertsons-50x50.png";
import { useContent } from "../../content";

const styles = StyleSheet.create({
  content: {
    fontSize: 9,
    fontWeight: "light",
    color: "#333",
    lineHeight: 1.3,
    marginBottom: 8,
    whiteSpace: "pre-wrap",
  },
});

const Albertsons = () => {
  const {
    workExperience: {
      jobs: [{ title, company, timeframe }],
    },
  } = useContent();

  return (
    <View style={{ marginBottom: 10 }}>
      <JobHeader
        src={albertsonsLogo}
        alt={company}
        title={title}
        company={company}
        timeframe={timeframe}
      />

      <View>
        <Text style={styles.content}>
          The primary software developer for internal auditing within product
          allowances. Developed key business applications that serve as the
          primary platform for data analytics, dashboard reporting, and
          automation of manual tasks that are due to legacy systems. These tools
          are saving over 46,000 labor hours annually and have aided in
          increasing audit findings by 60% in two key audit categories.
        </Text>
      </View>

      <View>
        <ListItem>
          Identified missing critical data from the placement allowance audit
          and implemented a new solution that pulls in the missing data that
          directly led to a substantial increase in findings.
        </ListItem>
        <ListItem>
          Created an audit dashboard that greatly simplified the process for
          auditing case allowances by providing an intuitive workflow for
          running analytics and uploading billings.
        </ListItem>
        <ListItem>
          Led review of legacy applications and data sources, introducing
          increased data integrity and creating a usable source for internal
          auditing.
        </ListItem>
        <ListItem>
          Tasked as the lead workstream for system integrations for moving all
          financial data from a legacy system into the Oracle cloud environment
          to move towards a single source of truth and live data.
        </ListItem>
      </View>
    </View>
  );
};

export default Albertsons;
