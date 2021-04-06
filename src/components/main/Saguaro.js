import React from "react";
import { View } from "@react-pdf/renderer";
import ListItem from "../ListItem";
import JobHeader from "./JobHeader";
import Article from "./Article";
import content from '../../resume.json'
const {logo, company, startdate, enddate, positions} = content.experience[1]

const {title, description, highlights} = positions[0]

const Saguaro = () => (
  <View>
    <JobHeader
      src={require(`../../assets/${logo}`)}
      title={title}
      company={company}
      timeframe={`${startdate} - ${enddate}`}
    />
    <Article>
      {description}
    </Article>

    <View>
      {highlights.map(highlight => (
        <ListItem>{highlight}</ListItem>
      ))}
    </View>
  </View>
);

// Additional Content removed for space.
// Maintained a high level of quality assurance by inspecting every job
//         site in great detail, walking job sites with both repairmen and clients
//         listening for feedback and providing assistance where needed.

export default Saguaro;
