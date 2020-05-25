import React from "react";
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";

import jobs from "../../assets/jobs.png";
import contacts from "../../assets/contacts.png";
import accomplishment from "../../assets/accomplishment.png";
import about from "../../assets/About.png";

import Divider from "../Divider";
import ListItem, { NestedListItem } from "../ListItem";
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
    marginRight: 5,
  },
  CreateWithNote: {
    fontSize: 8,
    position: "absolute",
    bottom: "47px",
    left: "18px",
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

// const References = () => (
//   <View>
//     <View style={styles.titleGroup}>
//       <Image style={styles.logo} src={contacts} alt="" />
//       <Text style={styles.mainTitle}>References</Text>
//     </View>
//     <View style={styles.referenceGroup}>
//       <Reference
//         name="Greg Rousseau"
//         title="Group VP National Service Center"
//         company="Albertsons Companies"
//         email="greg.rousseau@albertsons.com"
//       />
//       <Reference
//         name="Tracey Schmitz"
//         title="Director of Allowance Billing"
//         company="Albertsons Companies"
//         email="tracey.schmitz@albertsons.com"
//       />
//     </View>
//     <View style={styles.referenceGroup}>
//       <Reference
//         name="David Lehn"
//         title="Manager of Allowance Audit"
//         company="Albertsons Companies"
//         email="david.lehn@albertsons.com"
//       />
//       <Reference
//         name="Amber Pampas"
//         title="Director"
//         company="Saguaro Drywall"
//         email="amber.pampas@saguharo.com"
//       />
//     </View>
//   </View>
// );

const Accomplishments = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.logo} src={accomplishment} alt="" />
      <Text style={styles.mainTitle}>Accomplishments</Text>
    </View>
    <ListItem>
      Created a full software application within VBA that has custom-built:
    </ListItem>
    <NestedListItem>version control</NestedListItem>
    <NestedListItem>distribution system</NestedListItem>
    <NestedListItem>user analytics</NestedListItem>
    <NestedListItem>event logging</NestedListItem>
    <NestedListItem>data caching</NestedListItem>
    <NestedListItem>
      and full CRUD capabilities to multiple data sources
    </NestedListItem>
    <ListItem>
      Major contributor in increasing allowance audit findings by millions of
      dollars each year.
    </ListItem>
    <ListItem>
      Certified in Robotic Process Automation through Automation Anywhere.
    </ListItem>
  </View>
);

const CreateWithNote = () => (
  <Text style={styles.CreateWithNote}>*This resume was made using React</Text>
);

const About = () => (
  <View>
    <View style={styles.titleGroup}>
      <Image style={styles.logo} src={about} alt="" />
      <Text style={styles.mainTitle}>About</Text>
    </View>
    <View>
      <Text style={styles.content}>
        Innovative, teachable, problem solving developer with over 5 years of
        development experience within corporate settings, developing systems and
        processes that have reduced thousands of labor hours while greatly
        increasing internal audit findings. A continuous self educator, staying
        up to date on the latest technologies, best practices, and design trends
        to stay refined in both skills and knowledge. Strong team player with a
        track record of demonstrating high character, accountability,
        maintaining an effective and clear line of communication.
      </Text>
    </View>
  </View>
);

const Main = () => (
  <View style={styles.main}>
    <About />
    <Divider />
    <WorkExperince />
    <Divider />
    <Accomplishments />
    <CreateWithNote />
  </View>
);

export default Main;
