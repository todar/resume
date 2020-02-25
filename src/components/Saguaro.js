import React from "react";
import ListItem, { NestedListItem } from './ListItem';
import { Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import saguaroLogo from "../assets/SaguaroLogo-50x50.PNG"

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 10
  },
  image: {
    width: "25px",
    marginRight: 10
  },
  content: {
    fontSize: 10
  }
});

const Header = () => (
  <View style={styles.header}>
    <View>
      <Image style={styles.image} src={saguaroLogo} alt="Saguaro Drywall" />
    </View>
    <View>
      <Text style={styles.content}>Superintendent of Repairs</Text>
      <Text style={styles.content}>Saguaro Drywall</Text>
      <Text style={styles.content}>2013 - 2015</Text>
    </View>
  </View>
)

const Saguaro = () => (
  <View>
    <Header />
    <ListItem>Began as a laborer.</ListItem>
    <ListItem>Quickly advanced to lead superintendent in charge of all of the drywall repair team.</ListItem>
    <ListItem>Responsibilities included:</ListItem>
    <NestedListItem>Cost estimation.</NestedListItem>
    <NestedListItem>Contract writing.</NestedListItem>
    <NestedListItem>Review of all repair work including high net-worth, custom residential clients.</NestedListItem>
    <NestedListItem>Creating and maintaining jobsite scheduling.</NestedListItem>
    <NestedListItem>Facilitating communications between clients and crew for time-critical situations.
</NestedListItem>
    <NestedListItem>Job site inspection to maintain high quality assurance.
</NestedListItem>
    <ListItem>Discovered my love for software development by creating database for job site information and
created a scheduling application using Visual Basic for Applications in Excel.
</ListItem>
  </View>
)

export default Saguaro;