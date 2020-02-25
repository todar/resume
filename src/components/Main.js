import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import jobs from "../assets/jobs.png"
import contacts from "../assets/contacts.png"
import accomplishment from "../assets/accomplishment.png"

import Divider from "./Divider"
import ListItem from './ListItem';
import Reference from "./Reference"
import Albertsons from "./Albertsons"
import Saguaro from "./Saguaro"

const styles = StyleSheet.create({
  main: {
    padding: '18px',
    flexBasis: "380px",
    color: "#2a2b2e"
  },
  mainTitle: {
    fontSize: 15,
    color: '#2a2b2e',
    // margin: '0 0 10px'
  },
  referenceGroup: {
    flexDirection: "row"
  },
  titleGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10
  },
  image: {
    width: "15px",
    marginRight: 5
  }
});

const WorkExperince = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.image} src={jobs} alt="" />
      <Text style={styles.mainTitle}>Work Experience</Text>
    </View>
    <Albertsons />
    <Saguaro />
  </View>
)

const References = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.image} src={contacts} alt="" />
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
)

const Accomplishments = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.image} src={accomplishment} alt="" />
      <Text style={styles.mainTitle}>Accomplishments</Text>
    </View>
    <ListItem>Self taught programmer. Learned from documentation, online videos, and StackOverflow.
</ListItem>
    <ListItem>Certified in Robotic Process Automation through Automation Anywhere.</ListItem>
  </View>
)

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