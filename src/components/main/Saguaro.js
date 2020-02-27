import React from "react";
import { View } from "@react-pdf/renderer";
import ListItem, { NestedListItem } from "../ListItem";
import JobHeader from "./JobHeader";
import saguaroLogo from "../../assets/SaguaroLogo-50x50.PNG";

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
      <ListItem>Began as a laborer.</ListItem>
      <ListItem>
        Quickly advanced to the lead superintendent in charge of all of the
        drywall repair team.
      </ListItem>
      <ListItem>Responsibilities included:</ListItem>
      <View>
        <NestedListItem>Cost estimation.</NestedListItem>
        <NestedListItem>Contract writing.</NestedListItem>
        <NestedListItem>
          Review of all repair work including high net-worth, custom residential
          clients.
        </NestedListItem>
        <NestedListItem>
          Creating and maintaining job site scheduling.
        </NestedListItem>
        <NestedListItem>
          Facilitating communications between clients and crew for time-critical
          situations.
        </NestedListItem>
        <NestedListItem>
          Job site inspection to maintain high-quality assurance.
        </NestedListItem>
      </View>
      <ListItem>
        Discovered my love for software development by creating a database for
        job site information and created a scheduling application using Visual
        Basic for Applications in Excel.
      </ListItem>
    </View>
  </View>
);

export default Saguaro;
