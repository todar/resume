import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";
import ListItem, { NestedListItem } from "../ListItem";
import JobHeader from "./JobHeader";
import saguaroLogo from "../../assets/SaguaroLogo-50x50.PNG";

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

const Saguaro = () => (
  <View>
    <JobHeader
      src={saguaroLogo}
      alt="Saguaro Drywall"
      title="Superintendent"
      company="Saguaro Drywall"
      timeframe="2013 - 2015"
    />
    <View>
      <Text style={styles.content}>
        Learned the business from the ground up, started as a laborer and
        trained under the lead project manager for over a year and advanced to
        becoming the lead superintendent in charge of drywall repairs.
      </Text>
    </View>

    <View>
      <ListItem>
        Engaged with clients and builders on a frequent basis to build
        professional relationships to help promote the business and maintain
        open lines of communication.
      </ListItem>
      <ListItem>
        Maintained a high level of quality assurance by inspecting every job
        site in great detail, walking job sites with both repairmen and clients
        listening for feedback and providing assistance where needed.
      </ListItem>
      <ListItem>
        Created a job scheduling application that tracked job site information
        and repairman coverage that better organized the flow chart for all
        upcoming and ongoing projects.
      </ListItem>
    </View>
  </View>
);

export default Saguaro;
