import React from "react";
import { View } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import saguaroLogo from "../../assets/SaguaroLogo-50x50.PNG";
import Article from "./Article";

const Saguaro = () => (
  <View>
    <JobHeader
      src={saguaroLogo}
      title="Superintendent"
      company="Saguaro Drywall"
      timeframe="2013 - 2015"
    />
    <Article>
      Learned the business from the ground up, started as a laborer and trained
      under the lead project manager for over a year and advanced to becoming
      the lead superintendent in charge of drywall repairs.
    </Article>

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
