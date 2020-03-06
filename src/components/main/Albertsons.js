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
          Recognized for development of critical tools and queries and was
          promoted to Business Analyst responsible for:
        </ListItem>
        <View>
          <NestedListItem>
            Systems analysis - exploring company systems and infrastructure to
            uncover inefficiencies. My analyses and application development have
            helped identified and reduced over 46,000 labor hours annually.
          </NestedListItem>
          <NestedListItem>
            Process improvement - building appropriate tools and alternative
            workflows to reduce waste. I have personally helped recover the
            company over $20 million in Audit findings since I began in December
            2015.
          </NestedListItem>
          <NestedListItem>
            Overhaul - when it makes sense for the business, I interview primary
            stakeholders, conceptualize the primary goal and re-envision the
            roadmap to accomplishing the task. As an example, I’ve developed,
            tested, deployed, and continued to track analytics to gain insights
            on vendor cost allowances. This project alone has saved the company
            over 70,000 labor hours and has helped increased audit findings in
            this area by more than 60%.
          </NestedListItem>
          <NestedListItem>
            Integration - recently, I was tasked as the lead of systems
            integration for moving all our financial data and workflow from a
            legacy Lawson system into the Oracle cloud environment.
          </NestedListItem>
        </View>
      </View>
    </View>
  );
};

export default Albertsons;
