import React from "react";
import { View } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import albertsonsLogo from "../../assets/Albertsons-50x50.png";
import { useContent } from "../../content";

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
        <ListItem>
          Recognized for the development of software applications and queries
          that greatly increased audit findings and was promoted to Business
          Analyst responsible for:
        </ListItem>
        <ListItem>
          Process analysis - identify the business's needs and inefficiencies
          and use critical thinking to come up with new strategic solutions and
          document design plans for new process implementations.
        </ListItem>
        <ListItem>
          Software development - develop software for data analytics, dashboard
          {"\n"} reporting, and automation of manual tasks that are in place due
          to legacy systems. These tools are saving over 46,000 labor hours
          annually and have aided in increasing findings by 60% in two key audit
          categories.
        </ListItem>
        <ListItem>
          Data analysis - explore large amounts of data and old queries to find{" "}
          {"\n"}inconsistencies, gaps, and corruption to create solutions and
          queries to extract the data for cleansing and consolidation for
          auditing consumption.
        </ListItem>
        <ListItem>
          Application integration - tasked as the lead of systems integration
          for moving all financial data from a legacy system into the Oracle
          cloud environment.
        </ListItem>
      </View>
    </View>
  );
};

export default Albertsons;
