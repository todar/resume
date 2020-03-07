import React from "react";
import { View } from "@react-pdf/renderer";
import ListItem, { NestedListItem } from "../ListItem";
import JobHeader from "./JobHeader";
import albertsonsLogo from "../../assets/Albertsons-50x50.png";
import { useContent } from "../../content";

const Albertsons = () => {
  const {
    workExperience: {
      jobs: [{ title, company, timeframe }]
    }
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
        <ListItem>Began as an auditor in allowance billing.</ListItem>
        <ListItem>
          Recognized for the development of software applications and queries
          that greatly increased audit findings and was promoted to Business
          Analyst responsible for:
        </ListItem>
        <View>
          <NestedListItem>
            Process analysis - identify the businesses needs and inefficiencies
            and use critical thinking to come up with new strategic solutions
            and document design plans for new process implementations.
          </NestedListItem>
          <NestedListItem>
            Software development - develop software for data analytics,
            dashboard reporting, and automation of manual tasks that are in
            place due to legacy systems. These tools are saving over 46,000
            labor hours annually and have aided in increasing findings by 60% in
            two key audit categories.
          </NestedListItem>
          <NestedListItem>
            Data analysis - explore large amounts of data and old queries to
            find inconsistencies, gaps, and corruption and create solutions and
            queries to extract the data for cleansing and consolidation for
            auditing consumption.
          </NestedListItem>
          <NestedListItem>
            Application integration - tasked as the lead of systems integration
            for moving all financial data from a legacy system into the Oracle
            cloud environment.
          </NestedListItem>
        </View>
      </View>
    </View>
  );
};

export default Albertsons;
