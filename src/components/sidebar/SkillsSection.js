import React from "react";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { View } from "@react-pdf/renderer";
import content from '../../resume.json'

const SkillsSection = () => {
  return (
    <View>
      <SectionTitle>{content.titles.skills}</SectionTitle>
      {content.skills.map((skill) => (
        <Content key={skill}>{skill}</Content>
      ))}
    </View>
  );
};

export default SkillsSection;
