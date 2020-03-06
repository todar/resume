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
      <ListItem>
        Quickly advanced from a laborer to the lead superintendent in charge of
        drywall repairs.
      </ListItem>
      <ListItem>Responsibilities included:</ListItem>
      <View>
        <NestedListItem>Cost estimation.</NestedListItem>
        <NestedListItem>Contract writing.</NestedListItem>
        <NestedListItem>
          Inspection of all repair work including high net-worth, custom
          residential clients.
        </NestedListItem>
        <NestedListItem>
          Creating and maintaining job site scheduling.
        </NestedListItem>
        <NestedListItem>
          Facilitating communications between clients and crew for time-critical
          situations.
        </NestedListItem>
      </View>
      <ListItem>
        Created a job scheduling application using Visual Basic for Applications
        that maintained job site information and repairman coverage.
      </ListItem>
    </View>
  </View>
);

export default Saguaro;
