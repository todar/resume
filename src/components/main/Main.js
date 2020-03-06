import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import jobs from "../../assets/jobs.png";
import contacts from "../../assets/contacts.png";
import accomplishment from "../../assets/accomplishment.png";

import Divider from "../Divider";
import ListItem from "../ListItem";
import Reference from "./Reference";
import Albertsons from "./Albertsons";
import Saguaro from "./Saguaro";

/**
 * Yikes, a bit a a mess!😞
 * This is all here, but need to refactor and get this code looking good!
 * Really this file just contains several components that need to be in their own file.
 */
const styles = StyleSheet.create({
  main: {
    padding: "18px",
    flexBasis: "380px",
    color: "#333"
  },
  mainTitle: {
    fontSize: 15,
    color: "#2a2b2e"
  },
  referenceGroup: {
    flexDirection: "row"
  },
  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  logo: {
    width: "20px",
    height: "20px",
    marginRight: 5
  }
});

const WorkExperince = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.logo} src={jobs} alt="" />
      <Text style={styles.mainTitle}>Work Experience</Text>
    </View>
    <Albertsons />
    <Saguaro />
  </View>
);

const References = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.logo} src={contacts} alt="" />
      <Text style={styles.mainTitle}>References</Text>
    </View>
    <View style={styles.referenceGroup}>
      <Reference
        name="Greg Rousseau"
        title="Group VP National Service Center"
        company="Albertsons Companies"
        email="greg.rousseau@albertsons.com"
      />
      <Reference
        name="Tracey Schmitz"
        title="Director of Allowance Billing"
        company="Albertsons Companies"
        email="tracey.schmitz@albertsons.com"
      />
    </View>
    <View style={styles.referenceGroup}>
      <Reference
        name="David Lehn"
        title="Manager of Allowance Audit"
        company="Albertsons Companies"
        email="david.lehn@albertsons.com"
      />
      <Reference
        name="Amber Pampas"
        title="Director"
        company="Saguaro Drywall"
        email="amber.pampas@saguharo.com"
      />
    </View>
  </View>
);

const Accomplishments = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.logo} src={accomplishment} alt="" />
      <Text style={styles.mainTitle}>Accomplishments</Text>
    </View>
    <ListItem>
      Self taught programmer and web developer. Learned from online
      documentation, videos, and being an active participant on Stack Overflow.
    </ListItem>
    <ListItem>
      Created a full software application within VBA, that has custom-built in
      version control, distribution system, user analytics, event logging, data
      caching, and full CRUD capabilities to multiple data sources.
    </ListItem>
    <ListItem>
      Developed software tools that are saving over 46,000 labor hours annually.
    </ListItem>
    <ListItem>
      Major contributor in increasing allowance audit findings by millions of
      dollars each year.
    </ListItem>
    <ListItem>
      Certified in Robotic Process Automation through Automation Anywhere.
    </ListItem>
  </View>
);

const Main = () => (
  <View style={styles.main}>
    <WorkExperince />
    <Divider />
    <References />
    <Divider />
    <Accomplishments />
  </View>
);

export default Main;
